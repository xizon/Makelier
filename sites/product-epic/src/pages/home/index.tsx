// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';


import '@/components/epic-stage/style.css';
import '@/components/epic-nav/style.css';
import '@/components/epic-hero/style.css';
import '@/components/epic-narrative/style.css';
import '@/components/epic-finale/style.css';
import '@/components/epic-modal/style.css';

import EpicStage from '@/components/epic-stage';
import EpicNav from '@/components/epic-nav';
import EpicHero from '@/components/epic-hero';
import EpicNarrative from '@/components/epic-narrative';
import EpicFinale from '@/components/epic-finale';
import EpicModal from '@/components/epic-modal';

export default function HomePage() {
    return (
        <>
            <EpicStage
                loaderText="ROMA AETERNA"
                initialFrameLabel="MVNDVS — THE PANTHEON"
                frameLabels={{
                    top: 'MVNDVS — THE PANTHEON',
                    ch1: 'TABVLA I — THE EYE',
                    ch2: 'TABVLA II — NEURAL RENDERING',
                    ch3: 'TABVLA III — TOUCH & SOUND',
                    ch4: 'TABVLA IV — THE DRAFTING',
                    ch5: 'TABVLA V — THE LAUREL',
                    ch6: '',
                }}
                invertedFrameLabel="THE WORLD YOU LEFT"
                invalidEmailMessage="The eagle needs a valid address."
                successToastMessage="Engraved in the rolls of the Empire · GRATIAS TIBI"
            />

            <EpicNav
                brandMain="Makelier"
                brandSub=""
                brandHref="#top"
                solidThresholdPx={60}
                links={[
                    { label: 'NARRATIVE', href: '#ch1' },
                    { label: 'SPECS', href: '#specs' },
                ]}
                ctaText="RESERVE"
            />

            <main id="main">
                <EpicHero
                    id="top"
                    latinMotto="EX MARMORE · IN AETERNVM"
                    titlePrimary="OCVLUS"
                    titleSecondary="IMPERIVM"
                    subtitle="THE EYE OF THE EMPIRE · NEURAL HEADSET"
                    specLine="DUAL 8K · 120 HZ · HAPTIC CROWN · SPATIAL SOUND"
                    scrollHintText="DESCEND THE SAGA"
                />

                <EpicNarrative
                    id="ch1"
                    chapterClass="ch1"
                    watermark="I"
                    kicker="I · OCVLVS — THE EYE"
                    heading="To see, is to exist."
                    body="The Romans left one eye eternally open in the dome of the Pantheon, making light the temple's only god. Two thousand years later we cast that eye into a shape you can wear — not a screen, but a door into another Rome."
                    stats={[
                        { value: 210, unit: '° FIELD OF VIEW' },
                        { value: 8, unit: 'K PER EYE' },
                    ]}
                />

                <EpicNarrative
                    id="ch2"
                    chapterClass="ch2"
                    layout="split-plate"
                    watermark="II"
                    kicker="II · RENDERE — NEURAL RENDERING"
                    heading="Every frame, a fresco."
                    body="Foveated rendering lets compute behave like candlelight — it illuminates only where you gaze. Wherever the pupil turns, the marble is carved to meet it. One hundred and twenty times a second, and not one frame profaned."
                    stats={[
                        { value: 120, unit: 'HZ REFRESH' },
                        { value: 12, unit: 'MS LATENCY' },
                    ]}
                />

                <EpicNarrative
                    id="ch3"
                    chapterClass="ch3"
                    watermark="III"
                    kicker="III · SENSVS — TOUCH & SOUND"
                    heading="Let the wind pass through your shield."
                    body="Beneath the imperial-red cushion sleep sixty-four pressure cells: the shock of sword on shield climbs from your temples down your spine. The spatial soundscape lets a whisper arrive from any bench of the Colosseum — every direction you hear is a real direction."
                    stats={[
                        { value: 64, unit: 'HAPTIC CELLS' },
                        { value: 360, unit: '° SOUNDSCAPE' },
                    ]}
                />

                <EpicNarrative
                    id="ch4"
                    chapterClass="ch4"
                    layout="blueprint"
                    watermark="IV"
                    kicker="IV · CONSCRIBERE — THE DRAFTING"
                    heading="Every empire begins as a line."
                    captionNote="FOGLIVS I · THE DRAFTING OF THE EYE"
                    blueprintLabels={{
                        dimWidth: '188 MM',
                        dimHeight: '112 MM',
                        lensSpec: 'OCVLVS · 52 MM',
                        part1: 'I · AVREVM RING',
                        part2: 'II · PVLPVIS TACTVA',
                        part3: 'III · CORONA',
                        detailLabel: 'DETAIL A · II:I',
                        titleBlock1: 'OCVLVS IMPERIVM',
                        titleBlock2: 'FOGLIVS I — MACHINA VISIONIS',
                        titleBlock3: 'SCALA I:II · MMXXV',
                        figCaption: 'fig. i. — drawn by the light of a single candle',
                    }}
                />

                <EpicNarrative
                    id="ch5"
                    chapterClass="ch5"
                    watermark="V"
                    kicker="V · RECOMPOSITIO — THE LAUREL"
                    heading="Lines remember another shape."
                    body="The wireframe exhales and recombines itself — piece by piece, stroke by stroke — into a second design: OCVLVS LAUREA, worn like a wreath of victory."
                    captionNote="OCVLUS LAUREA · fig. ii. — assemblage in light"
                />

                <EpicNarrative
                    id="ch6"
                    chapterClass="ch6"
                    layout="arena-dual"
                    watermark="VI"
                    arenaActs={[
                        {
                            sub: 'CROSS THE THRESHOLD',
                            title: 'THROUGH THE EYE',
                            footer: 'THE SAND · THE CANDLES · THE RIVER FOG',
                        },
                        {
                            sub: 'A FOURTH ROME, BUILT OF LIGHT',
                            title: 'THE COLOSSEUM OF MINDS',
                            footer: 'WHERE EVERY VISITOR IS BOTH GLADIATOR AND GOD',
                        },
                    ]}
                />

                <EpicNarrative
                    id="ch7"
                    chapterClass="ch7"
                    watermark="VII"
                    kicker="VII · INVERSIO — THE INVERSION"
                    heading="You are inside the picture now."
                    body="The gallery you left behind drifts past like a framed relic — proof that worlds can be worn both ways. Drag it, if you doubt it is real. Around you, the hours themselves orbit the arena in gilded numerals, and the great eye above blinks — slowly — as if memorising your face."
                />

                <EpicFinale
                    id="ch8"
                    specsId="specs"
                    finisTitle="FINIS."
                    finisSubtitle="THE EYE CLOSES · THE GAMES BEGIN"
                    frescoImageUrl="./assets/images/paper.jpg"
                    kicker="VIII · GLADIVS — THE MUSTER"
                    heading="Arm your legion."
                    price="$ 1,199"
                    priceNote="STRUCK BY THE IMPERIAL MINT · MMXXV · AUTUMN"
                    primaryCtaText="ENGRAVE A PRE-ORDER"
                    secondaryCtaText="REVIEW THE SPECS"
                    secondaryCtaHref="#specs"
                    specs={[
                        { key: 'FIELD OF VIEW', value: '210°' },
                        { key: 'RESOLUTION', value: 'DUAL 3840 × 2160' },
                        { key: 'REFRESH', value: '120 Hz' },
                        { key: 'MOTION LATENCY', value: '12 ms' },
                        { key: 'WEIGHT', value: '488 g' },
                        { key: 'HAPTICS', value: '64 CELLS' },
                        { key: 'SOUNDSCAPE', value: '360°' },
                        { key: 'TRACKING', value: 'FULL-BODY · 10 PT' },
                    ]}
                    approvalNote="MACHINA VISIONIS · APPROVED BY THE SENATE OF PLAY"
                    footerLatin="SENATVS · POPVLVSQVE · GAMERQVE"
                    footerTagline="Rome was not built in a day — nor seen in one glance."
                    footerCopyright={<>&copy; 2026 <a href="https://makelier.com" target="_blank">Makelier</a>.</>}
                />
            </main>

            <EpicModal
                latinHeader="SACRAMENTVM"
                heading="Engrave your name"
                description="No deposit required. On the day of release, the Imperial Mint will send word by eagle."
                nameLabel="NAME"
                namePlaceholder="Gaius Julius"
                emailLabel="WORD BY EAGLE (EMAIL)"
                emailPlaceholder="name@roma.im"
                submitText="SUBMIT THE ENGRAVING"
            />
        </>
    );
}
