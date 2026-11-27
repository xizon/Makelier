// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';

// Components
import ScrollNav from '@/components/scroll-nav';
import HeroSkyline from '@/components/hero-skyline';
import StoryScene from '@/components/story-scene';
import PreorderCard from '@/components/preorder-card';
import FaqAccordion from '@/components/faq-accordion';

export default function HomePage() {
    return (
        <main>
            {`<!-- Fixed nav: scene timeline + smooth scroll -->`}
            <ScrollNav
                items={[
                    { id: 'mkl-scene-1', label: '01 Cold open' },
                    { id: 'mkl-scene-2', label: '02 The street' },
                    { id: 'mkl-scene-3', label: '03 Built' },
                    { id: 'mkl-scene-4', label: '04 Speed' },
                    { id: 'mkl-preorder-wrap', label: '05 Preorder' },
                    { id: 'mkl-faq', label: '06 Questions' },
                ]}
            />
            <HeroSkyline
                id="mkl-scene-1"
                title="BLOCK 8.5"
                kicker="A short film by CRATE"
                caption="You skate the long way."
                image="./assets/images/product-demo.png"
            />
            <StoryScene
                id="mkl-scene-2"
                kicker="Scene 02 - The street"
                lines={['THE CITY', 'IS A SKATE', 'PARK.']}
                tone="hot"
                caption="Seven blocks to the spot. Every curb has a name."
            />
            <StoryScene
                id="mkl-scene-3"
                kicker="Scene 03 - Built"
                lines={['TAKES THE', 'HIT. ASKS FOR', 'MORE.']}
                stats={[
                    { value: 7, unit: 'PLY', label: 'Canadian maple' },
                    { value: 8.5, decimals: 1, unit: 'IN', label: 'Deck width' },
                    { value: 14.25, decimals: 2, unit: 'IN', label: 'Wheelbase' },
                ]}
                caption="Seven plies. Zero excuses."
            />
            <StoryScene
                id="mkl-scene-4"
                kicker="Scene 04 - Speed"
                lines={['PUSH ONCE.', 'FEEL THE', 'WHOLE BLOCK.']}
                align="right"
                tone="acid"
                streaks
                stats={[
                    { value: 52, unit: 'MM', label: 'Wheel diameter' },
                    { value: 99, unit: 'A', label: 'Wheel hardness' },
                ]}
                caption="Scroll fast. See what happens."
            />
            <div id="mkl-preorder-wrap" className="mkl-home__preorder mkl:grid">
                <PreorderCard id="mkl-preorder" />
            </div>
            <FaqAccordion
                id="mkl-faq"
                items={[
                    { q: 'When will it ship?', a: 'The first run of 1,200 decks ships from March in numbered batches. You get an email with your batch number.' },
                    { q: 'Can I get my deposit back?', a: 'Yes. Cancel any time before your deck ships and the full deposit goes back to your card within five business days.' },
                    { q: 'Which width should I pick?', a: '8.25 for tech and flat ground, 8.5 for all-round street, 8.75 for stairs, ledges and ramps.' },
                    { q: 'Is the graphic printed or pressed?', a: 'Heat-transfer printed on the bottom ply, sealed with a gloss coat so it survives the grind.' },
                    { q: 'Do you ship outside the US?', a: 'Not in the first run. International shipping opens with the second batch.' },
                ]}
            />
            <footer className="mkl-home__footer">
                <p className="mkl:mx-auto mkl:max-w-400 mkl:px-[clamp(20px,6vw,96px)]">&copy; 2026 <a href="https://makelier.com" target="_blank">Makelier</a>.</p>
            </footer>
        </main>
    );
}
