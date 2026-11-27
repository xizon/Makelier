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
 * coveredOpacity fades only the covered part of the previous SceneItem.
 * This SceneItem stays at opacity 1.
 * coverOffset is the travel of this covering layer (px, vh, or %).
 * Omit either prop to use the value set on Scenes.
 */
export function Template({
    children,
    id,
    coveredOpacity,
    coverOffset,
}: {
    children?: JSX.Element;
    id?: string;
    coveredOpacity?: number;
    coverOffset?: number | string;
}) {
    return (
        <div
            id={id}
            className="mkl-scene-item"
            data-scene-item=""
            data-covered-opacity={coveredOpacity}
            data-cover-offset={coverOffset}
        >
            <div className="mkl-scene-item__panel">
                {children}
            </div>
        </div>
    );
}
