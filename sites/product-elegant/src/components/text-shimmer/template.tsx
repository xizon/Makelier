
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

type TextShimmerProps = {
    children?: JSX.Element | string;
};

export function Template({
    children
}: TextShimmerProps) {
    return (
        <span className="mkl-text-shimmer">
            {children}
        </span>
    );
}
