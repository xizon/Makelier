
/**
 * Image Optimizer
 *
 * Required dependency: "sharp"
 *
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

import type {
    ImageOptimizerOptions,
    OptimizationStats,
} from '../../utils/types.ts';


/**
 * Image file extensions to scan.
 *
 * Both .jpg and .jpeg are included because they represent
 * the same image format but use different file extensions.
 */
const SUPPORTED_EXTENSIONS = new Set([
    '.jpg',
    '.jpeg',
    '.png',
    '.webp',
    '.avif',
]);

/**
 * Recursively collect image files.
 */
async function collectImages(
    directory: string
): Promise<string[]> {
    const files: string[] = [];

    let entries;

    try {
        entries = await fs.readdir(directory, {
            withFileTypes: true,
        });
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return files;
        }

        throw error;
    }

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            files.push(...await collectImages(fullPath));
            continue;
        }

        if (
            entry.isFile() &&
            SUPPORTED_EXTENSIONS.has(
                path.extname(entry.name).toLowerCase()
            )
        ) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Compress an image while preserving its original format.
 */
async function optimizeImage(
    filePath: string,
    quality: number,
    formats: Set<string>,
): Promise<{ originalSize: number; optimizedSize: number } | null> {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    const format = String(metadata.format ?? '');

    if (!formats.has(format)) {
        return null;
    }

    // Skip animated images to avoid losing animation frames.
    if (metadata.pages && metadata.pages > 1) {
        return null;
    }

    let pipeline = image.withMetadata();

    switch (format) {
        case 'jpeg':
            pipeline = pipeline.jpeg({
                quality,
                mozjpeg: true,
            });
            break;

        case 'png':
            pipeline = pipeline.png({
                compressionLevel: 9,
                adaptiveFiltering: true,
            });
            break;

        case 'webp':
            pipeline = pipeline.webp({
                quality,
            });
            break;

        case 'avif':
            pipeline = pipeline.avif({
                quality,
            });
            break;

        default:
            return null;
    }

    const output = await pipeline.toBuffer();
    const originalSize = (await fs.stat(filePath)).size;

    // Keep the original when compression does not reduce its size.
    if (output.length >= originalSize) {
        return null;
    }

    const tempPath = `${filePath}.mkl-tmp`;

    try {
        await fs.writeFile(tempPath, output);
        await fs.rename(tempPath, filePath);
    } catch (error) {
        await fs.rm(tempPath, { force: true });
        throw error;
    }

    return {
        originalSize,
        optimizedSize: output.length,
    };
}

/**
 * Optimize images inside the build output directory.
 */
export async function optimizeImages(
    distDir: string,
    options: ImageOptimizerOptions
): Promise<void> {
    const quality = Math.min(
        100,
        Math.max(1, Math.round(options.quality))
    );

    const formats = new Set(options.formats);

    const files = await collectImages(distDir);

    const stats: OptimizationStats = {
        processed: 0,
        skipped: 0,
        originalSize: 0,
        optimizedSize: 0,
    };

    for (const filePath of files) {
        try {
            const result = await optimizeImage(
                filePath,
                quality,
                formats,
            );

            if (result === null) {
                stats.skipped++;
                continue;
            }

            stats.processed++;
            stats.originalSize += result.originalSize;
            stats.optimizedSize += result.optimizedSize;

        } catch (error) {
            stats.skipped++;

            console.warn(
                `[Makelier] Image optimization skipped: ${path.relative(distDir, filePath)}`,
                error
            );
        }
    }

    const saved = stats.originalSize - stats.optimizedSize;

    const formatSize = (bytes: number) =>
        `${(bytes / 1024).toFixed(1)} KB`;

    console.log(
        `[Makelier] Image optimization: ${stats.processed} optimized, ` +
        `${stats.skipped} skipped, ${formatSize(saved)} saved.`
    );
}
