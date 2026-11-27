// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';

// Components
import SmoothScroller from '@/components/smooth-scroller';
import StoryNav from '@/components/story-nav';
import HeroParallax from '@/components/hero-parallax';
import Viewer360 from '@/components/viewer-360';
import MetricsCounter from '@/components/metrics-counter';
import VelocityShowcase from '@/components/velocity-showcase';
import SpecAccordion from '@/components/spec-accordion';
import PreorderCta from '@/components/preorder-cta';

export default function HomePage() {
    return (
        <div className="mkl-story-root mkl:min-h-screen mkl:bg-[#0a0a0c] mkl:text-zinc-100">
            <SmoothScroller />
            <StoryNav />

            <main className="mkl-page-main">
                <HeroParallax />

                <div className="mkl:max-w-7xl mkl:mx-auto mkl:px-6">
                    <div className="mkl:h-px mkl:w-full mkl:bg-gradient-to-r mkl:from-transparent mkl:via-white/15 mkl:to-transparent" />
                </div>

                <Viewer360
                    modelUrl=""
                    useDemoGlb={false}
                    deckTexture="./assets/3d/demo-deck-graphic.png"
                    gripTexture="./assets/3d/demo-grip-tape.png"
                    carbonTexture="./assets/3d/demo-carbon-map.png"
                />
                <MetricsCounter />
                <VelocityShowcase />
                <SpecAccordion />
                <PreorderCta />
            </main>

            <footer className="mkl:py-12 mkl:px-6 mkl:border-t mkl:border-white/10 mkl:text-center mkl:text-xs mkl:font-mono mkl:text-zinc-500">
                &copy; 2026 <a href="https://makelier.com" target="_blank">Makelier</a>.
            </footer>
        </div>
    );
}
