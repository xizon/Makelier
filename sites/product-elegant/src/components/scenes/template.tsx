import './style.css';

declare namespace JSX {
    interface Element {
        type: unknown;
        props: Record<string, unknown>;
    }

    interface ElementChildrenAttribute {
        children: {};
    }

    interface IntrinsicElements {
        [element: string]: Record<string, unknown>;
    }
}

/**
 * Defaults apply to every SceneItem that does not set its own values.
 * coveredOpacity: the covered part of the layer underneath. The covering layer stays at opacity 1.
 * coverOffset: how far the covering layer travels. Use px, vh, or %.
 */
export function Template({
    children,
    coveredOpacity = 0.4,
    coverOffset = '50vh',
}: {
    children?: JSX.Element | JSX.Element[];
    coveredOpacity?: number;
    coverOffset?: number | string;
}) {
    return (
        <div
            className="mkl-scenes"
            data-covered-opacity={coveredOpacity}
            data-cover-offset={coverOffset}
        >
            {children}
        </div>
    );
}
