import {
    Project,
    type SourceFile,
} from 'ts-morph';

import type { DefaultTreeAdapterMap } from 'parse5';
import {
    registerBlockType,
} from '@wordpress/blocks';


/**
 * ------------------------------------
 * For System Configuration
 * ------------------------------------
 */
export interface BuildHtmlOptions {
    /** Format generated HTML output */
    beautify?: boolean;
}

export interface BuildCssOptions {
    /** Enable CSS compatibility processing */
    compatibility?: boolean;
}

export interface BuildImageOptions {
    /** Enable image optimization */
    enabled?: boolean;

    /** Image quality (1–100) */
    quality?: number;

    /** Image formats to optimize */
    formats?: ('jpeg' | 'png' | 'webp' | 'avif')[];
}

export interface SysConfig {
    build?: {
        html?: BuildHtmlOptions;
        css?: BuildCssOptions;
        images?: BuildImageOptions;
    };
}

/**
 * ------------------------------------
 * For Sites
 * ------------------------------------
 */
export interface SiteInfo {
    name: string;
    root: string;
    components: string[];
}
export interface SiteAuthor {
    name?: string;
    website?: string;
    email?: string;
}
export interface SitePaths {
    src: string;
    public: string;
    dist: string;
    pages: string;
    components: string;
    styles: string;
    template?: string;
}


export interface SiteContext {
    name: string;
    title: string;
    root: string;
    config: SiteConfig;
    paths: SitePaths;
};


export type SiteConfig = {
    name: string;
    version: string;
    lang: string;
    title: string;
    description?: string;
    author?: SiteAuthor;
    template?: string;
    paths?: {
        src?: string;
        public?: string;
        dist?: string;
    };
    entries?: {
        pages?: string;
        components?: string;
        styles?: string;
    };
};

/**
 * ------------------------------------
 * For Components
 * ------------------------------------
 */
export type ComponentManifest = {
    name?: string;
    version?: string;
    type?: 'component';
    description?: string;
    dependencies?: Record<string, string>;
    assets?: unknown[];
};

export type AstNode = {
    type: string;
    start: number;
    end: number;
    [key: string]: unknown;
};

export type ComponentRoot = {
    name: string;
    openingElement: AstNode;
};


/**
 * ------------------------------------
 * For Pages
 * ------------------------------------
 */
export type PageSeo = {
    lang: string;
    title: string;
    description?: string | null;
    keywords?: string[] | null;
    author?: string | null;
    canonical?: string | null;

    // Supports fully customizable SEO extended attributes (such as twitterCard, og:image, etc.)
    [key: string]: any;
};

export type PageDefinition = {
    slug: string;
    dir: string;
    bodyClass: string;
    templatePath: string;
    clientPath: string;
    clientFile: string;
    clientRel: string;
    htmlFileName: string;
    seo: PageSeo;
};

export type PageManifest = {
    name?: string;
    version?: string;
    type?: 'page';
    output?: string;
    bodyClass?: string;
    seo?: Partial<PageSeo>;
};

export type RenderDocumentOptions = {
    seo: PageSeo;
    bodyClass?: string;
    body: string;
    extraHead?: string;
    cssHrefs?: string[];
    jsHrefs?: string[];
    viteClient?: boolean;
    beautify?: boolean;
    siteTitle?: string;
    isIndex?: boolean;
};


/**
 * ------------------------------------
 * For Agent
 * ------------------------------------
 */
export type IndexConfig = {
    type: 'component' | 'page';
    sourceDir: string;
    outputFile: string;
};

export type IndexEntry = {
    name: string;
    title?: string;
    description: string;
    type: string;
    output?: string;
};

export type IndexData = {
    _meta: {
        generated: boolean;
        notice: string;
    };
    [key: string]: unknown;
};


/**
 * ------------------------------------
 * For CLI
 * ------------------------------------
 */
export interface DiscoveredSite {
    name: string;
    root: string;
    configPath: string;
}


/**
 * ------------------------------------
 * For Builder
 * ------------------------------------
 */

export type ExternalMap = Record<string, string>;
export interface SiteBuildConfig {
    externals?: Record<string, string>;
}

export interface SitePackageJson {
    name?: string;
    version?: string;

    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;

    build?: SiteBuildConfig;
}

/**
 * ------------------------------------
 * For Server-side
 * ------------------------------------
 */
export type ViteManifestChunk = {
    file: string;
    css?: string[];
    imports?: string[];
};

export type ViteManifest = Record<string, ViteManifestChunk>;

export interface AutoMountOptions {
    componentsDir?: string; // src/components
    registryEntry?: string;  // src/runtime/bridge/register.ts
    runtimeEntry?: string;
    entryFiles?: string[];
    autoMount?: boolean;
    sitesDir?: string;
    
}


export interface AssetInfo {
    filePath: string;
    devUrl: string;
}

export interface DependencyManifest {
    name: string;
    dependencies?: Record<string, string>;
}

export interface DependencyUsage {
    source: string;
    version: string;
}

export interface DependencyMismatch {
    name: string;
    usages: DependencyUsage[];
}

export interface DependencyCheckerOptions {
    /**
     * Directory containing all sites.
     * Defaults to the parent directory of Vite root.
     */
    sitesDir?: string;

    /**
     * Component directory inside each site.
     * Defaults to src/components.
     */
    componentsDir?: string;
}

export interface DependencyUsage {
    source: string;
    version: string;
}

export interface DependencyMismatch {
    name: string;
    usages: DependencyUsage[];
}



/**
 * ------------------------------------
 * For CLI
 * ------------------------------------
 */
export type CliCommand = "dev" | "build" | "preview" | "export:react" | "export:wp"; 


/**
 * ------------------------------------
 * For Playground
 * ------------------------------------
 */
export type MarkdownNode = {
    type: string;
    depth?: number;
    value?: string;
    lang?: string;
    children?: MarkdownNode[];

    // for "marked"
    // Record the position of each Markdown node within the original Markdown text, 
    // so that we can accurately extract the original content.
    position?: {
        start: {
            offset: number;
        };
        end: {
            offset: number;
        };
    };
};

export interface PlaygroundMarkdownTable {
    headers: string[];
    rows: string[][];
}

export interface PlaygroundMarkdownSection {
    markdown?: string; // for "marked"
    title: string;
    paragraphs: string[];
    lists: string[];
    tables: PlaygroundMarkdownTable[];
}

export interface ComponentInfo {
    componentName: string;
    overview: string;

    apiReference: PlaygroundMarkdownSection;
    dependencies: PlaygroundMarkdownSection;
}

export interface ComponentDemo {
    title: string;
    description: string;
    code: string;
}



export type AstRecord = Record<string, unknown> & {
    type?: string;
};


export type ComponentRegistry = Map<string, string>;

export interface ResolvedComponent {
    name: string;
    directory: string;
}

export interface AnalyzedDemo extends ComponentDemo {
    components: ResolvedComponent[];
}

export interface AnalyzedComponent extends ComponentInfo {
    demos: AnalyzedDemo[];
}

export interface WrittenDemoEntry {
    title: string;
    fileName: string;
    filePath: string;
}

export type PlaygroundEntries = Record<string, string>;

export interface PlaygroundManifestEntry {
    file: string;
    name?: string;
    isEntry?: boolean;
    imports?: string[];
    dynamicImports?: string[];
    css?: string[];
    assets?: string[];
}

export type PlaygroundManifest = Record<
    string,
    PlaygroundManifestEntry
>;

export interface PlaygroundDocumentOptions {
    componentName: string;
    overview: string;

    demoTitle: string;
    demoDescription: string;

    previewHtml: string;

    assets: PlaygroundAssets;
    demoCode: string;

    apiReference: PlaygroundMarkdownSection;
    dependencies: PlaygroundMarkdownSection;

    viteClient?: boolean;
}

export interface PlaygroundAssets {
    js: string[];
    css: string[];
}


export interface PlaygroundIndexDemo {
    title: string;
    description: string;
    href: string;
}

export interface PlaygroundIndexComponent {
    name: string;
    slug: string;
    overview: string;
    demos: PlaygroundIndexDemo[];
}

export interface PlaygroundDemoRoute {
    componentName: string;
    overview: string;

    demoTitle: string;
    demoDescription: string;
    demoCode: string;

    apiReference: PlaygroundMarkdownSection;
    dependencies: PlaygroundMarkdownSection; 

    entryPath?: string; 
}

export interface PlaygroundDevData {
    components: PlaygroundIndexComponent[];
    demos: Map<string, PlaygroundDemoRoute>;
}

export type PlaygroundSectionKey =
    | 'overview'
    | 'examples'
    | 'apiReference'
    | 'dependencies';


/**
 * ------------------------------------
 * For HTML Formatter
 * ------------------------------------
 */
export interface FormatHtmlOptions {
    /** Indentation string */
    indentUnit?: string;

    /** Maximum line width */
    printWidth?: number;

    /** Attribute formatting strategy */
    attributeLayout?: 'auto' | 'single-line' | 'multiline';

    /** Preserve HTML comments */
    preserveComments?: boolean;

    /** Preserve whitespace-sensitive content */
    preserveWhitespace?: boolean;

    /** Parse as a complete document or HTML fragment */
    documentMode?: 'document' | 'fragment';
}

export interface ResolvedFormatHtmlOptions {
    indentUnit: string;
    printWidth: number;
    attributeLayout: 'auto' | 'single-line' | 'multiline';
    preserveComments: boolean;
    preserveWhitespace: boolean;
    documentMode: 'document' | 'fragment';
}

// Formatting context passed through the printer.
export interface PrintContext {
    depth: number;
    options: ResolvedFormatHtmlOptions;
}


// Output result for an individual node.
export interface PrintResult {
    content: string;
    isInline: boolean;
}

export interface PrintContext {
    depth: number;
    options: ResolvedFormatHtmlOptions;
    namespace: string;
}

export interface PrintResult {
    content: string;
    isInline: boolean;
}

// Parse5 AST node types.
export type HtmlNode = DefaultTreeAdapterMap['node'];

export type HtmlDocument = DefaultTreeAdapterMap['document'];

export type HtmlFragment = DefaultTreeAdapterMap['documentFragment'];


// print
export  type LayoutType = 'inline' | 'block';
export  interface NodeLike {
    nodeName: string;
    tagName?: string;
    namespaceURI?: string;
    attrs?: Array<{
        name: string;
        value: string;
    }>;
    childNodes?: NodeLike[];
    value?: string;
    data?: string;
}

export  type PrintOptions = ResolvedFormatHtmlOptions;



/**
 * ------------------------------------
 * For Image Optimizer
 * ------------------------------------
 */
export interface ImageOptimizerOptions {
    quality: number;
    formats: readonly ('jpeg' | 'png' | 'webp' | 'avif')[];
}

export interface OptimizationStats {
    processed: number;
    skipped: number;
    originalSize: number;
    optimizedSize: number;
}


/**
 * ------------------------------------
 * For  CSS Compatibility
 * ------------------------------------
 */

export interface RGBColor {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface ColorMixInfo {
    colorVariable: string;
    alpha: number;
}

export interface ColorMixRule {
    selector: string;
    property: string;
    scope: string;
    colorVariable: string;
    alpha: number;
}

/**
 * ------------------------------------
 * For  Template Engine
 * ------------------------------------
 */

export type TemplateTarget = 'react';

export interface ParseTemplateOptions {
    source: string;
    fileName?: string;
    tsConfigFilePath?: string;
}

export interface AnalyzeTemplateOptions extends ParseTemplateOptions {}

export interface TransformTemplateOptions extends ParseTemplateOptions {
    target: TemplateTarget;
}

export interface TemplateAnalysis {
    componentName: 'Template' | null;
    declarationKind: 'variable' | 'function' | null;
    propsType: string | null;
    hasParameter: boolean;
    hasCustomProps: boolean;
    hasChildren: boolean;
    childrenType: string | null;
    jsxNamespaceDeclarations: number;
    jsxElementTypeReferences: number;
}

export interface TemplateDiagnostic {
    message: string;
    fileName?: string;
    line?: number;
    column?: number;
}

export interface TransformTemplateResult {
    success: boolean;
    code: string;
    analysis: TemplateAnalysis;
    warnings: TemplateDiagnostic[];
    errors: TemplateDiagnostic[];
}

export interface TransformResult {
    code: string;
    changed: boolean;
    replacedElementTypes: number;
}

export interface ParsedTemplate {
    project: Project;
    sourceFile: SourceFile;
}


// for Editor
// --------
export type BlockAttributeType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'textarea'
    | 'array'
    | 'object';

export interface BlockAttributeConfig {
    type: BlockAttributeType | BlockAttributeType[];
    optional?: boolean;
    enum?: (string | number | boolean)[];
    items?: BlockAttributeConfig;
    properties?: Record<string, BlockAttributeConfig>;
}

export interface BlockConfig {
    name: string;
    attributes: Record<string, BlockAttributeConfig>;
}


export type AttributeValues = Record<string, unknown>;

export interface RenderAttributeControlOptions {
    name: string;
    config: BlockAttributeConfig;
    attributes: AttributeValues;
    setAttributes: (attributes: AttributeValues) => void;
}


export interface JsonControlProps {
    name: string;
    value: unknown;
    setAttributes: (attributes: AttributeValues) => void;
}


export interface ObjectControlProps {
    name: string;
    config: BlockAttributeConfig;
    value: unknown;
    onChange: (value: Record<string, unknown>) => void;
}



export interface ArrayControlProps {
    name: string;
    config: BlockAttributeConfig;
    value: unknown;
    onChange: (value: unknown[]) => void;
}


export type EditorBlockSettings = NonNullable<
    Parameters<typeof registerBlockType>[1]
>;

/**
 * ------------------------------------
 * For Export
 * ------------------------------------
 */

export type DependencyState = 'processing' | 'completed';

export interface ComponentDependency {
    siteName: string;
    componentName: string;
    sourceDir: string;
    outputDir: string;
    site: SiteContext;
}

export interface ResolvedComponentImport {
    dependency: ComponentDependency;
    internalPath: string;
    outputPath: string;
}


export interface CollectDependenciesOptions {
    site: SiteContext;
    componentName: string;
    outputRoot: string;
}

export interface CollectDependenciesResult {
    dependencies: ComponentDependency[];
}

export interface RewriteComponentImportsOptions {
    source: string;
    fileName: string;
    importerOutputPath: string;
    site: SiteContext;
    outputRoot: string;
}

export interface ExportComponentOptions {
    dependency: ComponentDependency;
    outputRoot: string;
}


/**
 * ------------------------------------
 * For WordPress Block
 * ------------------------------------
 */

export type WordPressBlockMetadata = Record<string, unknown>;


/**
 * ------------------------------------
 * For React App
 * ------------------------------------
 */export interface DiscoveredReactPage {
    slug: string;
    route: string;
    sourceDir: string;
    sourceFile: string;
    outputDir: string;
    outputFile: string;
}
