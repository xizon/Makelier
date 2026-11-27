import type { RawHTML } from '@wordpress/element';

interface SaveProps {
    attributes: Record<string, unknown>;
}

declare function save(props: SaveProps): ReturnType<typeof import('@wordpress/element').createElement>;

export default save;