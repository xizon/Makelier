/**
 * Picture-in-picture stage template: ocular loader, atmospheric layers,
 * eyelid blink transitions, WebGL canvas viewport, and custom cursor.
 */
export interface EpicStageProps {
    loaderText?: string;
    initialFrameLabel?: string;
    frameLabels?: Record<string, string>;
    invertedFrameLabel?: string;
    invalidEmailMessage?: string;
    successToastMessage?: string;
}

export function Template({
    loaderText = '',
    initialFrameLabel = '',
    frameLabels,
    invertedFrameLabel,
    invalidEmailMessage,
    successToastMessage,
}: EpicStageProps) {
    return (
        <div
            className="epic-stage-root"
            data-frame-labels={frameLabels ? JSON.stringify(frameLabels) : undefined}
            data-inverted-frame-label={invertedFrameLabel || undefined}
            data-invalid-email-message={invalidEmailMessage || undefined}
            data-success-toast-message={successToastMessage || undefined}
        >
            <div id="loader">
                <svg width="20" className="eye" viewBox="0 0 120 70">
                    <g className="e-rays"></g>
                    <path
                        className="e-lid"
                        pathLength="1"
                        d="M8 35 C30 8 90 8 112 35 C90 62 30 62 8 35 Z"
                    />
                    <circle className="e-iris" cx="60" cy="35" r="14" />
                    <circle className="e-core" cx="60" cy="35" r="5.5" />
                </svg>
                <div className="loader-num">0</div>
                {loaderText && <p className="loader-latin">{loaderText}</p>}
            </div>

            <div className="bg-layer"></div>
            <div className="vignette"></div>
            <div className="grain"></div>

            <div className="lid lid-top" id="lidT"></div>
            <div className="lid lid-bottom" id="lidB"></div>

            <div id="stage">
                <div className="stage-clip" id="stageClip">
                    <canvas id="gl"></canvas>
                </div>
                <div className="frame" id="frame">
                    <span className="corner c-tl"></span>
                    <span className="corner c-tr"></span>
                    <span className="corner c-br"></span>
                    <span className="corner c-bl"></span>
                    <div className="frame-label" id="frameLabel">
                        {initialFrameLabel}
                    </div>
                </div>
            </div>

            <div id="cursor">
                <div className="c-ring"></div>
                <div className="c-dot"></div>
            </div>
        </div>
    );
}
