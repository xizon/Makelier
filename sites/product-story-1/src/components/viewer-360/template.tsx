import './style.css';



export interface Viewer360Props {
    modelUrl?: string;
    deckTexture?: string;
    gripTexture?: string;
    carbonTexture?: string;
    useDemoGlb?: boolean;
}

export function Template({
    modelUrl = '',
    deckTexture = './assets/3d/demo-deck-graphic.png',
    gripTexture = './assets/3d/demo-grip-tape.png',
    carbonTexture = './assets/3d/demo-carbon-map.png',
    useDemoGlb = false,
}: Viewer360Props) {
    return (
        <section
            id="sec-3d-viewer"
            className="mkl-viewer-360 mkl:relative mkl:py-28 mkl:px-6 mkl:max-w-7xl mkl:mx-auto"
        >
            <div className="mkl:flex mkl:flex-col mkl:md:flex-row mkl:md:items-end mkl:justify-between mkl:mb-10 mkl:gap-6">
                <div>
                    <p className="mkl:text-xs mkl:font-mono mkl:tracking-widest mkl:text-[#d4ff00] mkl:uppercase">
                        02 // 360° INTERACTIVE RIG
                    </p>
                    <h2 className="mkl:text-3xl mkl:sm:text-5xl mkl:font-black mkl:tracking-tight mkl:mt-2 mkl:text-white">
                        Inspect KINETIC-01 in 360° 3D
                    </h2>
                </div>
                <p className="mkl:text-zinc-400 mkl:max-w-md mkl:text-sm mkl:leading-relaxed">
                    Drag to orbit around the deck, trucks, and urethane wheels, or toggle auto-rotation and quick camera angles.
                </p>
            </div>

            <div
                id="mkl-3d-config"
                data-model-url={modelUrl}
                data-demo-glb="./assets/3d/demo-skateboard.glb"
                data-use-demo-glb={useDemoGlb ? 'true' : 'false'}
                data-deck-texture={deckTexture}
                data-grip-texture={gripTexture}
                data-carbon-texture={carbonTexture}
                className="mkl-viewer-360__stage mkl:relative mkl:rounded-3xl mkl:border mkl:border-white/10 mkl:bg-gradient-to-b mkl:from-zinc-900/80 mkl:to-[#070709] mkl:overflow-hidden"
            >
                <div
                    id="mkl-3d-canvas-host"
                    className="mkl-viewer-360__canvas mkl:w-full mkl:h-[440px] mkl:sm:h-[540px] mkl:cursor-grab mkl:active:cursor-grabbing"
                />

                <div className="mkl:absolute mkl:top-5 mkl:left-5 mkl:right-5 mkl:flex mkl:items-center mkl:justify-between mkl:pointer-events-none mkl:gap-4">
                    <div className="mkl:px-3.5 mkl:py-1.5 mkl:rounded-full mkl:bg-black/65 mkl:backdrop-blur-md mkl:border mkl:border-white/10 mkl:text-xs mkl:font-mono mkl:text-zinc-300">
                        YAW: <span id="mkl-3d-yaw" className="mkl:text-[#d4ff00]">0°</span> · PITCH:{' '}
                        <span id="mkl-3d-pitch" className="mkl:text-[#d4ff00]">18°</span>
                    </div>
                    <div className="mkl:hidden mkl:sm:block mkl:px-3.5 mkl:py-1.5 mkl:rounded-full mkl:bg-black/65 mkl:backdrop-blur-md mkl:border mkl:border-white/10 mkl:text-xs mkl:font-mono mkl:text-zinc-400">
                        DRAG TO ORBIT 360°
                    </div>
                </div>

                <div className="mkl:p-4 mkl:sm:px-6 mkl:border-t mkl:border-white/10 mkl:bg-black/55 mkl:backdrop-blur-md mkl:flex mkl:flex-wrap mkl:items-center mkl:justify-between mkl:gap-4">
                    <div className="mkl:flex mkl:flex-wrap mkl:items-center mkl:gap-2">
                        <button
                            type="button"
                            data-camera-preset="hero"
                            className="mkl-3d-preset mkl:px-3.5 mkl:py-1.5 mkl:rounded-lg mkl:text-xs mkl:font-mono mkl:border mkl:border-[#d4ff00] mkl:bg-[#d4ff00] mkl:text-black mkl:font-bold mkl:cursor-pointer"
                        >
                            3/4 Hero
                        </button>
                        <button
                            type="button"
                            data-camera-preset="deck"
                            className="mkl-3d-preset mkl:px-3.5 mkl:py-1.5 mkl:rounded-lg mkl:text-xs mkl:font-mono mkl:border mkl:border-white/15 mkl:text-zinc-300 mkl:hover:border-white/40 mkl:cursor-pointer"
                        >
                            Deck Graphic
                        </button>
                        <button
                            type="button"
                            data-camera-preset="trucks"
                            className="mkl-3d-preset mkl:px-3.5 mkl:py-1.5 mkl:rounded-lg mkl:text-xs mkl:font-mono mkl:border mkl:border-white/15 mkl:text-zinc-300 mkl:hover:border-white/40 mkl:cursor-pointer"
                        >
                            Trucks &amp; Wheels
                        </button>
                        <button
                            type="button"
                            data-camera-preset="top"
                            className="mkl-3d-preset mkl:px-3.5 mkl:py-1.5 mkl:rounded-lg mkl:text-xs mkl:font-mono mkl:border mkl:border-white/15 mkl:text-zinc-300 mkl:hover:border-white/40 mkl:cursor-pointer"
                        >
                            Grip Top
                        </button>
                    </div>

                    <button
                        type="button"
                        id="mkl-3d-autospin"
                        aria-pressed="true"
                        className="mkl:px-4 mkl:py-1.5 mkl:rounded-lg mkl:text-xs mkl:font-mono mkl:border mkl:border-[#d4ff00]/50 mkl:bg-[#d4ff00]/15 mkl:text-[#d4ff00] mkl:cursor-pointer"
                    >
                        Auto-Spin: ON
                    </button>
                </div>
            </div>
        </section>
    );
}
