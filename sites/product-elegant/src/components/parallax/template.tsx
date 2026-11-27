import './style.css';

import TextShimmer from '@/components/text-shimmer';

type ParallaxProps = {
    id?: string;
    image?: string;
    imageAlt?: string;
    eyebrow?: string;
    title?: string;
    body?: string;
    figure?: string;
};

export function Template({
    id = '',
    image = '',
    imageAlt = '',
    eyebrow = '',
    title = '',
    body = '',
    figure = '',
}: ParallaxProps) {
    return (
        <section id={id || undefined} className="mkl-parallax">
            <div className="mkl-parallax__frame">
                {image ? (
                    <img
                        className="mkl-parallax__media"
                        data-parallax="1.2"
                        src={image}
                        alt={imageAlt}
                    />
                ) : null}
                <div className="mkl-parallax__scrim" aria-hidden="true"></div>
            </div>

            <div className="mkl-parallax__copy">
                {eyebrow ? (
                    <p className="mkl-parallax__eyebrow">{eyebrow}</p>
                ) : null}
                {title ? (
                    <h2 className="mkl-parallax__title"><TextShimmer>{title}</TextShimmer></h2>
                ) : null}
                <span className="mkl-parallax__rule" aria-hidden="true"></span>
                {body ? (
                    <p className="mkl-parallax__body">{body}</p>
                ) : null}
            </div>

            {figure ? (
                <span className="mkl-parallax__index" aria-hidden="true">{figure}</span>
            ) : null}
        </section>
    );
}
