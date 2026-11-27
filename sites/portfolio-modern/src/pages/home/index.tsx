// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';

// Components
import PrimaryMenu from '@/site/product-elegant/components/primary-menu';
import Logo from '@/site/product-elegant/components/logo';

//
import SmplePage2Main from '@/components/sample-page-2-main';


export default function HomePage() {
    return (
        <main className="mkl:relative mkl:min-h-screen mkl:bg-[#f8f9ff] mkl:font-sans mkl:text-[#25264a] mkl:selection:bg-violet-200">

            <SmplePage2Main />

            {/* Ambient background decoration */}
            <div className="mkl:bg-[radial-gradient(rgba(99,102,241,0.16)_1px,transparent_1px)] mkl:bg-[length:28px_28px] mkl:[mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_100%)] mkl:[-webkit-mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_100%)] mkl:pointer-events-none mkl:fixed mkl:inset-0 mkl:z-0" />
            <div
                data-mkl-parallax="25"
                className="mkl:animate-[mkl-float-slow_14s_ease-in-out_infinite] mkl:pointer-events-none mkl:fixed mkl:-right-32 mkl:-top-32 mkl:z-0 mkl:h-[540px] mkl:w-[540px] mkl:rounded-full mkl:bg-violet-400/20 mkl:blur-[120px] mkl:transition-[margin] mkl:duration-700 mkl:ease-out"
            />
            <div
                data-mkl-parallax="-20"
                className="mkl:animate-[mkl-float-reverse_18s_ease-in-out_infinite] mkl:pointer-events-none mkl:fixed mkl:-bottom-40 mkl:-left-32 mkl:z-0 mkl:h-[520px] mkl:w-[520px] mkl:rounded-full mkl:bg-blue-400/20 mkl:blur-[120px] mkl:transition-[margin] mkl:duration-700 mkl:ease-out"
            />
            <div
                data-mkl-parallax="15"
                className="mkl:animate-[mkl-float-slow_14s_ease-in-out_infinite] mkl:pointer-events-none mkl:fixed mkl:left-1/2 mkl:top-1/3 mkl:z-0 mkl:h-[360px] mkl:w-[360px] mkl:-translate-x-1/2 mkl:rounded-full mkl:bg-fuchsia-300/15 mkl:blur-[110px]"
            />

            {/* Navigation - Restored to your exact original structure */}
            <header className="mkl-header mkl:sticky mkl:top-0 mkl:z-[100] mkl:border-b mkl:border-white/70 mkl:bg-white/75 mkl:backdrop-blur-xl">

                <nav className="mkl:m-0 mkl:block mkl:w-full mkl:bg-gradient-to-r mkl:from-blue-600/80 mkl:to-violet-600/80 mkl:p-5 mkl:font-serif mkl:text-[1.2rem] mkl:text-gray-400 mkl:backdrop-blur-[12px]">
                    <Logo theme="light" link="./home.html" />
                </nav>

                <PrimaryMenu
                    offsetTarget=".mkl-header"
                    theme="light"
                    links={[
                        { href: '#home', page: 'home', label: 'Home' },
                        { href: '#about', page: 'about', label: 'About' },
                        { href: '#projects', page: 'projects', label: 'Projects' },
                        { href: '#experience', page: 'experience', label: 'Experience' },
                        { href: '#skills', page: 'skills', label: 'Skills' },
                        { href: '#contact', page: 'contact', label: 'Contact' },
                    ]}
                />

            </header>

            {/* Hero */}

            {/* Hero */}
            <section
                id="home"
                className="mkl:relative mkl:z-10 mkl:mx-auto mkl:grid mkl:max-w-[1200px] mkl:grid-cols-1 mkl:items-center mkl:gap-14 mkl:px-6 mkl:pb-24 mkl:pt-24 mkl:lg:grid-cols-[0.85fr_1.15fr] mkl:lg:gap-20 mkl:lg:pb-32 mkl:lg:pt-32"
            >
                {/* Left: Profile Card */}
                <div
                    data-mkl-reveal
                    data-mkl-delay="150"
                    className="mkl:relative mkl:mx-auto mkl:w-full mkl:max-w-[420px]"
                >
                    <div className="mkl:animate-[mkl-float-slow_14s_ease-in-out_infinite] mkl:absolute mkl:-inset-5 mkl:rounded-[3rem] mkl:bg-gradient-to-br mkl:from-blue-200/70 mkl:via-violet-200/60 mkl:to-fuchsia-200/70 mkl:blur-2xl" />

                    <div
                        data-mkl-tilt="8"
                        className="mkl:relative mkl:overflow-hidden mkl:rounded-[2rem] mkl:border mkl:border-white mkl:bg-gradient-to-br mkl:from-[#dfe8ff] mkl:via-[#e9e3ff] mkl:to-[#f4e5ff] mkl:p-6 mkl:shadow-2xl mkl:shadow-violet-200/50"
                    >
                        <div className="mkl:flex mkl:items-center mkl:justify-between">
                            <span className="mkl:text-xs mkl:font-bold mkl:tracking-widest mkl:text-violet-500">
                                PROFILE / 001
                            </span>
                            <span className="mkl:rounded-full mkl:bg-white/70 mkl:px-3 mkl:py-1 mkl:text-[10px] mkl:font-semibold mkl:text-violet-700">
                                CREATIVE MIND
                            </span>
                        </div>

                        <div className="mkl:relative mkl:mx-auto mkl:mt-10 mkl:flex mkl:aspect-square mkl:max-w-[290px] mkl:items-center mkl:justify-center mkl:overflow-hidden mkl:rounded-full mkl:bg-gradient-to-br mkl:from-blue-500 mkl:via-violet-500 mkl:to-fuchsia-500 mkl:shadow-xl mkl:shadow-violet-300/50">
                            <div className="mkl:animate-[mkl-spin-slow_24s_linear_infinite] mkl:absolute mkl:inset-4 mkl:rounded-full mkl:border mkl:border-dashed mkl:border-white/40" />
                            <div className="mkl:absolute mkl:inset-10 mkl:rounded-full mkl:border mkl:border-white/20" />

                            <span className="mkl:relative mkl:select-none mkl:text-[120px] mkl:font-black mkl:tracking-tighter mkl:text-white/90">
                                AM
                            </span>

                            <div className="mkl:absolute mkl:bottom-7 mkl:right-7 mkl:flex mkl:h-14 mkl:w-14 mkl:items-center mkl:justify-center mkl:rounded-2xl mkl:border mkl:border-white/50 mkl:bg-white/20 mkl:text-2xl mkl:text-white mkl:backdrop-blur-lg">
                                #
                            </div>
                        </div>

                        <div className="mkl:mt-8 mkl:text-center">
                            <h2 className="mkl:text-2xl mkl:font-extrabold mkl:tracking-tight">
                                Makelier
                            </h2>
                            <p className="mkl:mt-1 mkl:text-sm mkl:text-violet-700">
                                Creative Developer & UI Engineer
                            </p>
                        </div>

                        <div className="mkl:mt-7 mkl:grid mkl:grid-cols-3 mkl:gap-2 mkl:border-t mkl:border-violet-200/70 mkl:pt-5">
                            <div className="mkl:text-center">
                                <p
                                    data-mkl-count="8"
                                    data-mkl-pad="true"
                                    data-mkl-suffix="+"
                                    className="mkl:text-xl mkl:font-extrabold"
                                >
                                    08+
                                </p>
                                <p className="mkl:mt-1 mkl:text-[10px] mkl:text-slate-500">
                                    YEARS EXP.
                                </p>
                            </div>

                            <div className="mkl:border-x mkl:border-violet-200/70 mkl:text-center">
                                <p data-mkl-count="42" className="mkl:text-xl mkl:font-extrabold">
                                    42
                                </p>
                                <p className="mkl:mt-1 mkl:text-[10px] mkl:text-slate-500">
                                    PROJECTS
                                </p>
                            </div>

                            <div className="mkl:text-center">
                                <p data-mkl-count="18" className="mkl:text-xl mkl:font-extrabold">
                                    18
                                </p>
                                <p className="mkl:mt-1 mkl:text-[10px] mkl:text-slate-500">
                                    CLIENTS
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge: Left */}
                    <div className="mkl:animate-[mkl-float-slow_14s_ease-in-out_infinite] mkl:absolute mkl:-left-8 mkl:top-24 mkl:hidden mkl:rounded-2xl mkl:border mkl:border-white mkl:bg-white/90 mkl:px-4 mkl:py-3 mkl:shadow-xl mkl:shadow-violet-100 mkl:backdrop-blur-md mkl:sm:block">
                        <span className="mkl:text-xl">✦</span>
                    </div>

                    {/* Floating Badge: Right */}
                    <div className="mkl:animate-[mkl-float-reverse_18s_ease-in-out_infinite] mkl:absolute mkl:-right-5 mkl:bottom-24 mkl:hidden mkl:rounded-2xl mkl:border mkl:border-white mkl:bg-white/90 mkl:px-4 mkl:py-3 mkl:shadow-xl mkl:shadow-violet-100 mkl:backdrop-blur-md mkl:sm:block">
                        <p className="mkl:mt-1 mkl:text-[10px] mkl:text-slate-500">
                            ✦
                        </p>
                    </div>
                </div>

                {/* Right: Hero Content */}
                <div data-mkl-reveal>
                    <div className="mkl:mb-7 mkl:inline-flex mkl:items-center mkl:gap-2 mkl:rounded-full mkl:border mkl:border-emerald-200 mkl:bg-emerald-50/90 mkl:px-4 mkl:py-2 mkl:text-xs mkl:font-semibold mkl:text-emerald-700 mkl:shadow-sm mkl:backdrop-blur-md">
                        <span className="mkl:relative mkl:flex mkl:h-2 mkl:w-2">
                            <span className="mkl:absolute mkl:inline-flex mkl:h-full mkl:w-full mkl:animate-ping mkl:rounded-full mkl:bg-emerald-400 mkl:opacity-60" />
                            <span className="mkl:relative mkl:inline-flex mkl:h-2 mkl:w-2 mkl:rounded-full mkl:bg-emerald-500" />
                        </span>
                        AVAILABLE FOR SELECT PROJECTS
                    </div>

                    <p className="mkl:mb-5 mkl:text-sm mkl:font-semibold mkl:uppercase mkl:tracking-[0.2em] mkl:text-violet-600">
                        Hello, I'm Makelier
                    </p>

                    <h1 className="mkl:max-w-[760px] mkl:text-5xl mkl:font-extrabold mkl:leading-[1.12] mkl:tracking-[-0.055em] mkl:sm:text-6xl mkl:lg:text-7xl">
                        I build digital
                        <span className="mkl:block mkl:bg-gradient-to-r mkl:from-blue-600 mkl:via-violet-600 mkl:to-fuchsia-500 mkl:bg-clip-text mkl:text-transparent">
                            experiences.
                        </span>
                    </h1>

                    <p className="mkl:mt-7 mkl:max-w-[570px] mkl:text-base mkl:leading-8 mkl:text-slate-500 mkl:sm:text-lg">
                        Creative developer and UI engineer focused on crafting thoughtful interfaces, interactive websites, and digital products that make technology feel human.
                    </p>

                    <div className="mkl:mt-9 mkl:flex mkl:flex-wrap mkl:items-center mkl:gap-4">
                        <a
                            href="#projects"
                            data-mkl-magnetic="0.28"
                            className="mkl:group mkl:inline-flex mkl:items-center mkl:rounded-full mkl:bg-gradient-to-r mkl:from-blue-600 mkl:to-violet-600 mkl:px-7 mkl:py-3.5 mkl:text-sm mkl:font-bold mkl:text-white mkl:shadow-lg mkl:shadow-violet-200 mkl:transition-all mkl:hover:-translate-y-1 mkl:hover:shadow-xl"
                        >
                            Explore My Work
                            <span className="mkl:ml-2 mkl:inline-block mkl:transition-transform mkl:duration-300 mkl:group-hover:translate-x-1 mkl:group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </a>

                        <a
                            href="#about"
                            data-mkl-magnetic="0.2"
                            className="mkl:inline-flex mkl:items-center mkl:rounded-full mkl:border mkl:border-slate-200 mkl:bg-white/90 mkl:px-7 mkl:py-3.5 mkl:text-sm mkl:font-bold mkl:text-slate-700 mkl:backdrop-blur-md mkl:transition-all mkl:hover:border-violet-300 mkl:hover:text-violet-700"
                        >
                            More About Me
                        </a>
                    </div>

                    <div className="mkl:mt-12 mkl:flex mkl:items-center mkl:gap-5">
                        <div className="mkl:flex mkl:-space-x-2">
                            <div className="mkl:flex mkl:h-9 mkl:w-9 mkl:items-center mkl:justify-center mkl:rounded-full mkl:border-2 mkl:border-[#f8f9ff] mkl:bg-blue-100 mkl:text-xs mkl:font-bold mkl:text-blue-700 mkl:transition-transform mkl:hover:-translate-y-1">
                                UI
                            </div>
                            <div className="mkl:flex mkl:h-9 mkl:w-9 mkl:items-center mkl:justify-center mkl:rounded-full mkl:border-2 mkl:border-[#f8f9ff] mkl:bg-violet-100 mkl:text-xs mkl:font-bold mkl:text-violet-700 mkl:transition-transform mkl:hover:-translate-y-1">
                                UX
                            </div>
                            <div className="mkl:flex mkl:h-9 mkl:w-9 mkl:items-center mkl:justify-center mkl:rounded-full mkl:border-2 mkl:border-[#f8f9ff] mkl:bg-fuchsia-100 mkl:text-xs mkl:font-bold mkl:text-fuchsia-700 mkl:transition-transform mkl:hover:-translate-y-1">
                                DEV
                            </div>
                        </div>

                        <p className="mkl:text-xs mkl:leading-5 mkl:text-slate-500">
                            Design-minded developer<br />
                            <span className="mkl:font-semibold mkl:text-slate-700">
                                Based in London, UK
                            </span>
                        </p>
                    </div>
                </div>
            </section>


            {/* About */}
            <section id="about" className="mkl:relative mkl:z-10 mkl:bg-white/90 mkl:py-24 mkl:backdrop-blur-sm">
                <div data-mkl-reveal className="mkl:mx-auto mkl:grid mkl:max-w-[1200px] mkl:gap-12 mkl:px-6 mkl:md:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-[0.2em] mkl:text-violet-600">01 / About Me</p>
                        <h2 className="mkl:mt-5 mkl:text-4xl mkl:font-extrabold mkl:leading-tight mkl:tracking-tight mkl:sm:text-5xl">
                            A little bit<br />
                            <span className="mkl:text-violet-600">about myself.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="mkl:text-lg mkl:leading-9 mkl:text-slate-600">
                            I’m a multidisciplinary developer who enjoys bringing ideas to life through design and technology. I care about the details — from the first sketch to the final interaction.
                        </p>
                        <p className="mkl:mt-5 mkl:text-base mkl:leading-8 mkl:text-slate-500">
                            My work sits at the intersection of user experience, visual design, and front-end engineering. I enjoy solving complex problems, exploring emerging technologies, and building products that are both useful and delightful.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects with interactive category filters */}
            <section id="projects" className="mkl:relative mkl:z-10 mkl:py-24">
                <div className="mkl:mx-auto mkl:max-w-[1200px] mkl:px-6">
                    <div data-mkl-reveal className="mkl:flex mkl:flex-col mkl:justify-between mkl:gap-5 mkl:sm:flex-row mkl:sm:items-end">
                        <div>
                            <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-[0.2em] mkl:text-violet-600">02 / Selected Work</p>
                            <h2 className="mkl:mt-4 mkl:text-4xl mkl:font-extrabold mkl:tracking-tight mkl:sm:text-5xl">Featured Projects<span className="mkl:text-violet-600">.</span></h2>
                            <p className="mkl:mt-4 mkl:text-sm mkl:text-slate-500">A selection of things I've designed and built.</p>
                        </div>

                        {/* Category filter tabs */}
                        <div className="mkl:flex mkl:flex-wrap mkl:items-center mkl:gap-2">
                            <button type="button" data-mkl-filter="all" className="mkl:cursor-pointer mkl:rounded-full mkl:bg-violet-600 mkl:px-4 mkl:py-2 mkl:text-xs mkl:font-bold mkl:text-white mkl:shadow-md mkl:transition-all">
                                All
                            </button>
                            <button type="button" data-mkl-filter="product" className="mkl:cursor-pointer mkl:rounded-full mkl:bg-white mkl:px-4 mkl:py-2 mkl:text-xs mkl:font-bold mkl:text-slate-600 mkl:transition-all mkl:hover:text-violet-600">
                                Product
                            </button>
                            <button type="button" data-mkl-filter="creative" className="mkl:cursor-pointer mkl:rounded-full mkl:bg-white mkl:px-4 mkl:py-2 mkl:text-xs mkl:font-bold mkl:text-slate-600 mkl:transition-all mkl:hover:text-violet-600">
                                Creative
                            </button>
                            <button type="button" data-mkl-filter="experiment" className="mkl:cursor-pointer mkl:rounded-full mkl:bg-white mkl:px-4 mkl:py-2 mkl:text-xs mkl:font-bold mkl:text-slate-600 mkl:transition-all mkl:hover:text-violet-600">
                                Experiment
                            </button>
                        </div>
                    </div>

                    <div className="mkl:mt-12 mkl:grid mkl:grid-cols-1 mkl:gap-6 mkl:sm:grid-cols-2 mkl:lg:grid-cols-3">
                        {/* Project 01 */}
                        <article
                            data-mkl-reveal
                            data-mkl-delay="0"
                            data-mkl-tilt="5"
                            data-mkl-category="product"
                            className="mkl:group mkl:overflow-hidden mkl:rounded-[2rem] mkl:border mkl:border-slate-100 mkl:bg-white mkl:shadow-sm mkl:transition-all mkl:duration-300 mkl:hover:shadow-xl mkl:hover:shadow-violet-100"
                        >
                            <div className="mkl:relative mkl:flex mkl:aspect-[16/10] mkl:items-center mkl:justify-center mkl:overflow-hidden mkl:bg-gradient-to-br mkl:from-blue-100 mkl:to-violet-200 mkl:p-5">
                                <div className="mkl:w-full mkl:max-w-[330px] mkl:rounded-2xl mkl:border mkl:border-white/80 mkl:bg-white/80 mkl:p-5 mkl:shadow-2xl mkl:backdrop-blur-xl mkl:transition-transform mkl:duration-500 mkl:group-hover:scale-105">
                                    <div className="mkl:flex mkl:gap-1.5"><span className="mkl:h-2 mkl:w-2 mkl:rounded-full mkl:bg-rose-400" /><span className="mkl:h-2 mkl:w-2 mkl:rounded-full mkl:bg-amber-400" /><span className="mkl:h-2 mkl:w-2 mkl:rounded-full mkl:bg-emerald-400" /></div>
                                    <div className="mkl:mt-5 mkl:h-3 mkl:w-2/3 mkl:rounded-full mkl:bg-violet-200" />
                                    <div className="mkl:mt-3 mkl:h-2 mkl:w-full mkl:rounded-full mkl:bg-slate-100" />
                                    <div className="mkl:mt-2 mkl:h-2 mkl:w-4/5 mkl:rounded-full mkl:bg-slate-100" />
                                    <div className="mkl:mt-6 mkl:grid mkl:grid-cols-3 mkl:gap-2"><div className="mkl:h-16 mkl:rounded-lg mkl:bg-blue-100" /><div className="mkl:h-16 mkl:rounded-lg mkl:bg-violet-100" /><div className="mkl:h-16 mkl:rounded-lg mkl:bg-fuchsia-100" /></div>
                                </div>
                                <span className="mkl:absolute mkl:right-5 mkl:top-5 mkl:rounded-full mkl:bg-white/70 mkl:px-3 mkl:py-1 mkl:text-[10px] mkl:font-bold mkl:text-violet-700">UI Design</span>
                            </div>
                            <div className="mkl:p-6">
                                <div className="mkl:flex mkl:items-center mkl:justify-between mkl:gap-2">
                                    <h3 className="mkl:text-xl mkl:font-extrabold">Product 1</h3>
                                    <span className="mkl:text-xl mkl:text-violet-600 mkl:transition-transform mkl:group-hover:translate-x-1 mkl:group-hover:-translate-y-1">↗</span>
                                </div>
                                <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">This is the description text for the work; feel free to express yourself as you wish..</p>
                                <div className="mkl:mt-5 mkl:flex mkl:flex-wrap mkl:gap-2">
                                    <span className="mkl:rounded-full mkl:bg-blue-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-blue-700">UI Design</span>
                                    <span className="mkl:rounded-full mkl:bg-violet-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-violet-700">React</span>
                                    <span className="mkl:rounded-full mkl:bg-fuchsia-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-fuchsia-700">Dashboard</span>
                                </div>
                            </div>
                        </article>

                        {/* Project 02 */}
                        <article
                            data-mkl-reveal
                            data-mkl-delay="100"
                            data-mkl-tilt="5"
                            data-mkl-category="creative"
                            className="mkl:group mkl:overflow-hidden mkl:rounded-[2rem] mkl:border mkl:border-slate-100 mkl:bg-white mkl:shadow-sm mkl:transition-all mkl:duration-300 mkl:hover:shadow-xl mkl:hover:shadow-violet-100"
                        >
                            <div className="mkl:relative mkl:flex mkl:aspect-[16/10] mkl:items-center mkl:justify-center mkl:overflow-hidden mkl:bg-gradient-to-br mkl:from-fuchsia-100 mkl:to-purple-200 mkl:p-5">
                                <div className="mkl:relative mkl:flex mkl:h-40 mkl:w-40 mkl:items-center mkl:justify-center mkl:rounded-full mkl:bg-gradient-to-br mkl:from-fuchsia-500 mkl:to-violet-700 mkl:shadow-2xl mkl:shadow-violet-400/40 mkl:transition-transform mkl:duration-500 mkl:group-hover:rotate-12 mkl:group-hover:scale-110">
                                    <div className="mkl:absolute mkl:inset-5 mkl:rounded-full mkl:border mkl:border-white/30" />
                                    <span className="mkl:text-6xl mkl:font-black mkl:text-white">S.</span>
                                </div>
                                <span className="mkl:absolute mkl:right-5 mkl:top-5 mkl:rounded-full mkl:bg-white/70 mkl:px-3 mkl:py-1 mkl:text-[10px] mkl:font-bold mkl:text-fuchsia-700">Software</span>
                            </div>
                            <div className="mkl:p-6">
                                <div className="mkl:flex mkl:items-center mkl:justify-between mkl:gap-2">
                                    <h3 className="mkl:text-xl mkl:font-extrabold">Product 2</h3>
                                    <span className="mkl:text-xl mkl:text-violet-600 mkl:transition-transform mkl:group-hover:translate-x-1 mkl:group-hover:-translate-y-1">↗</span>
                                </div>
                                <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">This is the description text for the work; feel free to express yourself as you wish..</p>
                                <div className="mkl:mt-5 mkl:flex mkl:flex-wrap mkl:gap-2">
                                    <span className="mkl:rounded-full mkl:bg-blue-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-blue-700">Branding</span>
                                    <span className="mkl:rounded-full mkl:bg-violet-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-violet-700">Three.js</span>
                                    <span className="mkl:rounded-full mkl:bg-fuchsia-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-fuchsia-700">Animation</span>
                                </div>
                            </div>
                        </article>

                        {/* Project 03 */}
                        <article
                            data-mkl-reveal
                            data-mkl-delay="200"
                            data-mkl-tilt="5"
                            data-mkl-category="product"
                            className="mkl:group mkl:overflow-hidden mkl:rounded-[2rem] mkl:border mkl:border-slate-100 mkl:bg-white mkl:shadow-sm mkl:transition-all mkl:duration-300 mkl:hover:shadow-xl mkl:hover:shadow-violet-100"
                        >
                            <div className="mkl:relative mkl:flex mkl:aspect-[16/10] mkl:items-center mkl:justify-center mkl:overflow-hidden mkl:bg-gradient-to-br mkl:from-cyan-100 mkl:to-blue-200 mkl:p-5">
                                <div className="mkl:w-full mkl:max-w-[300px] mkl:rounded-2xl mkl:bg-white mkl:p-5 mkl:shadow-2xl mkl:transition-transform mkl:duration-500 mkl:group-hover:-rotate-2">
                                    <div className="mkl:flex mkl:items-center mkl:justify-between"><span className="mkl:text-sm mkl:font-extrabold">TaskFlow</span><span className="mkl:rounded-full mkl:bg-blue-100 mkl:px-2 mkl:py-1 mkl:text-[9px] mkl:font-bold mkl:text-blue-700">MY WORKSPACE</span></div>
                                    <div className="mkl:mt-5 mkl:space-y-3">
                                        <div className="mkl:flex mkl:items-center mkl:gap-3"><span className="mkl:h-4 mkl:w-4 mkl:rounded-md mkl:border-2 mkl:border-blue-400" /><span className="mkl:h-2 mkl:flex-1 mkl:rounded-full mkl:bg-slate-200" /></div>
                                        <div className="mkl:flex mkl:items-center mkl:gap-3"><span className="mkl:flex mkl:h-4 mkl:w-4 mkl:items-center mkl:justify-center mkl:rounded-md mkl:bg-violet-500 mkl:text-[9px] mkl:text-white">✓</span><span className="mkl:h-2 mkl:w-3/4 mkl:rounded-full mkl:bg-slate-100" /></div>
                                        <div className="mkl:flex mkl:items-center mkl:gap-3"><span className="mkl:h-4 mkl:w-4 mkl:rounded-md mkl:border-2 mkl:border-blue-400" /><span className="mkl:h-2 mkl:w-5/6 mkl:rounded-full mkl:bg-slate-200" /></div>
                                    </div>
                                </div>
                                <span className="mkl:absolute mkl:right-5 mkl:top-5 mkl:rounded-full mkl:bg-white/70 mkl:px-3 mkl:py-1 mkl:text-[10px] mkl:font-bold mkl:text-blue-700">UI Design</span>
                            </div>
                            <div className="mkl:p-6">
                                <div className="mkl:flex mkl:items-center mkl:justify-between mkl:gap-2">
                                    <h3 className="mkl:text-xl mkl:font-extrabold">Product 3</h3>
                                    <span className="mkl:text-xl mkl:text-violet-600 mkl:transition-transform mkl:group-hover:translate-x-1 mkl:group-hover:-translate-y-1">↗</span>
                                </div>
                                <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">This is the description text for the work; feel free to express yourself as you wish..</p>
                                <div className="mkl:mt-5 mkl:flex mkl:flex-wrap mkl:gap-2">
                                    <span className="mkl:rounded-full mkl:bg-blue-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-blue-700">TypeScript</span>
                                    <span className="mkl:rounded-full mkl:bg-violet-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-violet-700">Next.js</span>
                                    <span className="mkl:rounded-full mkl:bg-fuchsia-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-fuchsia-700">UX</span>
                                </div>
                            </div>
                        </article>

                        {/* Project 04 */}
                        <article
                            data-mkl-reveal
                            data-mkl-delay="300"
                            data-mkl-tilt="5"
                            data-mkl-category="experiment"
                            className="mkl:group mkl:overflow-hidden mkl:rounded-[2rem] mkl:border mkl:border-slate-100 mkl:bg-white mkl:shadow-sm mkl:transition-all mkl:duration-300 mkl:hover:shadow-xl mkl:hover:shadow-violet-100"
                        >
                            <div className="mkl:relative mkl:flex mkl:aspect-[16/10] mkl:items-center mkl:justify-center mkl:overflow-hidden mkl:bg-gradient-to-br mkl:from-indigo-100 mkl:to-purple-200 mkl:p-5">
                                <div className="mkl:relative mkl:flex mkl:h-40 mkl:w-40 mkl:items-center mkl:justify-center mkl:rounded-[2.5rem] mkl:bg-gradient-to-br mkl:from-indigo-500 mkl:to-purple-700 mkl:shadow-2xl mkl:shadow-indigo-400/40 mkl:transition-transform mkl:duration-500 mkl:group-hover:rotate-6">
                                    <span className="mkl:text-6xl mkl:font-black mkl:text-white">AI</span>
                                    <span className="mkl:absolute mkl:-right-3 mkl:-top-3 mkl:flex mkl:h-12 mkl:w-12 mkl:items-center mkl:justify-center mkl:rounded-2xl mkl:bg-white mkl:text-xl mkl:shadow-lg">✧</span>
                                </div>
                                <span className="mkl:absolute mkl:right-5 mkl:top-5 mkl:rounded-full mkl:bg-white/70 mkl:px-3 mkl:py-1 mkl:text-[10px] mkl:font-bold mkl:text-indigo-700">Web Development</span>
                            </div>
                            <div className="mkl:p-6">
                                <div className="mkl:flex mkl:items-center mkl:justify-between mkl:gap-2">
                                    <h3 className="mkl:text-xl mkl:font-extrabold">Product</h3>
                                    <span className="mkl:text-xl mkl:text-violet-600 mkl:transition-transform mkl:group-hover:translate-x-1 mkl:group-hover:-translate-y-1">↗</span>
                                </div>
                                <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">This is the description text for the work; feel free to express yourself as you wish..</p>
                                <div className="mkl:mt-5 mkl:flex mkl:flex-wrap mkl:gap-2">
                                    <span className="mkl:rounded-full mkl:bg-blue-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-blue-700">AI</span>
                                    <span className="mkl:rounded-full mkl:bg-violet-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-violet-700">RAG</span>
                                    <span className="mkl:rounded-full mkl:bg-fuchsia-50 mkl:px-3 mkl:py-1.5 mkl:text-[10px] mkl:font-semibold mkl:text-fuchsia-700">Node.js</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="mkl:relative mkl:z-10 mkl:bg-white/90 mkl:py-24 mkl:backdrop-blur-sm">
                <div data-mkl-reveal className="mkl:mx-auto mkl:max-w-[1200px] mkl:px-6">
                    <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-[0.2em] mkl:text-violet-600">03 / Career Journey</p>
                    <h2 className="mkl:mt-4 mkl:text-4xl mkl:font-extrabold mkl:tracking-tight mkl:sm:text-5xl">Experience & Education<span className="mkl:text-violet-600">.</span></h2>

                    <div className="mkl:mt-14 mkl:grid mkl:gap-12 mkl:md:grid-cols-2">
                        <div>
                            <h3 className="mkl:mb-7 mkl:flex mkl:items-center mkl:gap-3 mkl:text-lg mkl:font-extrabold"><span className="mkl:flex mkl:h-9 mkl:w-9 mkl:items-center mkl:justify-center mkl:rounded-xl mkl:bg-violet-100 mkl:text-violet-700">↗</span> Work Experience</h3>
                            <div className="mkl:space-y-8 mkl:border-l-2 mkl:border-violet-100 mkl:pl-6">
                                <div className="mkl:group mkl:relative">
                                    <span className="mkl:absolute mkl:-left-[31px] mkl:top-1 mkl:h-3 mkl:w-3 mkl:rounded-full mkl:border-2 mkl:border-violet-500 mkl:bg-white mkl:transition-transform mkl:group-hover:scale-150 mkl:group-hover:bg-violet-500" />
                                    <p className="mkl:text-xs mkl:font-bold mkl:text-violet-600">2022 — PRESENT</p>
                                    <h4 className="mkl:mt-2 mkl:text-base mkl:font-extrabold">Senior Frontend Developer</h4>
                                    <p className="mkl:mt-1 mkl:text-sm mkl:text-slate-500">Digital Studio · London</p>
                                    <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">Leading front-end development, building reusable interfaces, and collaborating with designers to deliver polished digital products.</p>
                                </div>
                                <div className="mkl:group mkl:relative">
                                    <span className="mkl:absolute mkl:-left-[31px] mkl:top-1 mkl:h-3 mkl:w-3 mkl:rounded-full mkl:border-2 mkl:border-violet-300 mkl:bg-white mkl:transition-transform mkl:group-hover:scale-150 mkl:group-hover:border-violet-500 mkl:group-hover:bg-violet-500" />
                                    <p className="mkl:text-xs mkl:font-bold mkl:text-violet-600">2019 — 2022</p>
                                    <h4 className="mkl:mt-2 mkl:text-base mkl:font-extrabold">UI / UX Developer</h4>
                                    <p className="mkl:mt-1 mkl:text-sm mkl:text-slate-500">PixelWorks · Remote</p>
                                    <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">Designed and developed responsive web experiences, design systems, and interactive prototypes for international clients.</p>
                                </div>
                                <div className="mkl:group mkl:relative">
                                    <span className="mkl:absolute mkl:-left-[31px] mkl:top-1 mkl:h-3 mkl:w-3 mkl:rounded-full mkl:border-2 mkl:border-violet-300 mkl:bg-white mkl:transition-transform mkl:group-hover:scale-150 mkl:group-hover:border-violet-500 mkl:group-hover:bg-violet-500" />
                                    <p className="mkl:text-xs mkl:font-bold mkl:text-violet-600">2017 — 2019</p>
                                    <h4 className="mkl:mt-2 mkl:text-base mkl:font-extrabold">Junior Web Designer</h4>
                                    <p className="mkl:mt-1 mkl:text-sm mkl:text-slate-500">Creative Lab · Manchester</p>
                                    <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">Created visual concepts, landing pages, and marketing websites while developing a strong foundation in front-end technologies.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mkl:mb-7 mkl:flex mkl:items-center mkl:gap-3 mkl:text-lg mkl:font-extrabold"><span className="mkl:flex mkl:h-9 mkl:w-9 mkl:items-center mkl:justify-center mkl:rounded-xl mkl:bg-blue-100 mkl:text-blue-700">✧</span> Education</h3>
                            <div className="mkl:space-y-8 mkl:border-l-2 mkl:border-blue-100 mkl:pl-6">
                                <div className="mkl:group mkl:relative">
                                    <span className="mkl:absolute mkl:-left-[31px] mkl:top-1 mkl:h-3 mkl:w-3 mkl:rounded-full mkl:border-2 mkl:border-blue-500 mkl:bg-white mkl:transition-transform mkl:group-hover:scale-150 mkl:group-hover:bg-blue-500" />
                                    <p className="mkl:text-xs mkl:font-bold mkl:text-blue-600">2014 — 2017</p>
                                    <h4 className="mkl:mt-2 mkl:text-base mkl:font-extrabold">BSc in Computer Science</h4>
                                    <p className="mkl:mt-1 mkl:text-sm mkl:text-slate-500">University of Manchester</p>
                                    <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">Focused on software engineering, human-computer interaction, and web technologies.</p>
                                </div>
                                <div className="mkl:group mkl:relative">
                                    <span className="mkl:absolute mkl:-left-[31px] mkl:top-1 mkl:h-3 mkl:w-3 mkl:rounded-full mkl:border-2 mkl:border-blue-300 mkl:bg-white mkl:transition-transform mkl:group-hover:scale-150 mkl:group-hover:border-blue-500 mkl:group-hover:bg-blue-500" />
                                    <p className="mkl:text-xs mkl:font-bold mkl:text-blue-600">2020</p>
                                    <h4 className="mkl:mt-2 mkl:text-base mkl:font-extrabold">Advanced UI Design</h4>
                                    <p className="mkl:mt-1 mkl:text-sm mkl:text-slate-500">Online Professional Program</p>
                                    <p className="mkl:mt-3 mkl:text-sm mkl:leading-7 mkl:text-slate-500">Further study in interface systems, prototyping, accessibility, and design thinking.</p>
                                </div>
                            </div>

                            <div data-mkl-tilt="4" className="mkl:mt-10 mkl:rounded-2xl mkl:bg-gradient-to-br mkl:from-blue-50 mkl:to-violet-50 mkl:p-6">
                                <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-widest mkl:text-violet-600">My Philosophy</p>
                                <p className="mkl:mt-3 mkl:text-lg mkl:font-bold mkl:leading-8 mkl:text-[#34345f]">"Great digital products happen when thoughtful design meets purposeful engineering."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="mkl:relative mkl:z-10 mkl:py-14">
                <div className="mkl:mx-auto mkl:max-w-[1200px] mkl:px-6">
                    <div data-mkl-reveal>
                        <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-[0.2em] mkl:text-violet-600">04 / My Toolkit</p>
                        <h2 className="mkl:mt-4 mkl:text-4xl mkl:font-extrabold mkl:tracking-tight mkl:sm:text-5xl">Skills<span className="mkl:text-violet-600">.</span></h2>
                        <p className="mkl:mt-4 mkl:max-w-xl mkl:text-sm mkl:leading-7 mkl:text-slate-500">A combination of creative thinking, technical knowledge, and a passion for continuous learning.</p>
                    </div>

                    <div className="mkl:mt-12 mkl:grid mkl:gap-5 mkl:sm:grid-cols-2 mkl:lg:grid-cols-3">
                        <div data-mkl-reveal data-mkl-delay="0" data-mkl-tilt="5" className="mkl:rounded-2xl mkl:border mkl:border-slate-100 mkl:bg-white mkl:p-6 mkl:shadow-sm mkl:hover:shadow-lg">
                            <div className="mkl:flex mkl:h-11 mkl:w-11 mkl:items-center mkl:justify-center mkl:rounded-xl mkl:bg-blue-100 mkl:text-xl mkl:text-blue-700">◈</div>
                            <h3 className="mkl:mt-5 mkl:font-extrabold">Frontend</h3>
                            <div className="mkl:mt-4 mkl:flex mkl:flex-wrap mkl:gap-2">
                                {['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'].map((skill) => (
                                    <span key={skill} className="mkl:rounded-lg mkl:bg-slate-50 mkl:px-2.5 mkl:py-2 mkl:text-xs mkl:text-slate-600 mkl:transition-colors mkl:hover:bg-blue-50 mkl:hover:text-blue-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div data-mkl-reveal data-mkl-delay="100" data-mkl-tilt="5" className="mkl:rounded-2xl mkl:border mkl:border-slate-100 mkl:bg-white mkl:p-6 mkl:shadow-sm mkl:hover:shadow-lg">
                            <div className="mkl:flex mkl:h-11 mkl:w-11 mkl:items-center mkl:justify-center mkl:rounded-xl mkl:bg-violet-100 mkl:text-xl mkl:text-violet-700">✧</div>
                            <h3 className="mkl:mt-5 mkl:font-extrabold">Design</h3>
                            <div className="mkl:mt-4 mkl:flex mkl:flex-wrap mkl:gap-2">
                                {['UI / UX', 'Figma', 'Prototyping', 'Design Systems'].map((skill) => (
                                    <span key={skill} className="mkl:rounded-lg mkl:bg-slate-50 mkl:px-2.5 mkl:py-2 mkl:text-xs mkl:text-slate-600 mkl:transition-colors mkl:hover:bg-violet-50 mkl:hover:text-violet-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mkl:relative mkl:z-10 mkl:px-6 mkl:pb-24 mkl:pt-12">
                <div data-mkl-reveal className="mkl:relative mkl:mx-auto mkl:max-w-[1200px] mkl:overflow-hidden mkl:rounded-[2rem] mkl:bg-gradient-to-br mkl:from-[#3447b8] mkl:via-[#6546c9] mkl:to-[#923fd0] mkl:px-8 mkl:py-16 mkl:text-center mkl:shadow-2xl mkl:shadow-violet-200/70 mkl:sm:px-16 mkl:sm:py-20">
                    <div className="mkl:animate-[mkl-spin-slow_24s_linear_infinite] mkl:absolute mkl:-right-20 mkl:-top-32 mkl:h-72 mkl:w-72 mkl:rounded-full mkl:border mkl:border-dashed mkl:border-white/20" />
                    <div className="mkl:animate-[mkl-spin-slow_24s_linear_infinite] mkl:absolute mkl:-bottom-40 mkl:-left-20 mkl:h-80 mkl:w-80 mkl:rounded-full mkl:border mkl:border-white/15" />
                    <div className="mkl:relative">
                        <p className="mkl:text-xs mkl:font-bold mkl:uppercase mkl:tracking-[0.25em] mkl:text-violet-200">05 / Get In Touch</p>
                        <h2 className="mkl:mx-auto mkl:mt-5 mkl:max-w-2xl mkl:text-4xl mkl:font-extrabold mkl:leading-tight mkl:tracking-tight mkl:text-white mkl:sm:text-6xl">Have a project in mind?</h2>
                        <p className="mkl:mx-auto mkl:mt-5 mkl:max-w-xl mkl:text-sm mkl:leading-7 mkl:text-violet-100 mkl:sm:text-base">I'm always open to discussing new ideas, creative collaborations, and interesting opportunities.</p>
                        <a
                            href="mailto:hello@example.com"
                            data-mkl-magnetic="0.3"
                            className="mkl:mt-9 mkl:inline-flex mkl:items-center mkl:gap-3 mkl:rounded-full mkl:bg-white mkl:px-8 mkl:py-4 mkl:text-sm mkl:font-extrabold mkl:text-violet-700 mkl:shadow-lg mkl:hover:bg-violet-50"
                        >
                            Say Hello <span className="mkl:text-lg">↗</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mkl:relative mkl:z-10 mkl:border-t mkl:border-slate-200/80 mkl:bg-white/70 mkl:backdrop-blur-md">
                <div className="mkl:mx-auto mkl:flex mkl:max-w-[1200px] mkl:flex-col mkl:items-center mkl:justify-between mkl:gap-5 mkl:px-6 mkl:py-8 mkl:sm:flex-row">
                    <a href="#home" className="mkl:text-lg mkl:font-extrabold mkl:tracking-tight">A web creation toolkit for developers<span className="mkl:text-violet-600">.</span></a>
                    <p className="mkl:text-xs mkl:text-slate-400">&copy; 2026 <a href="https://makelier.com" target="_blank">Makelier</a>.</p>
                    <div className="mkl:flex mkl:gap-5 mkl:text-xs mkl:font-semibold mkl:text-slate-500">
                        <a href="#" target="_blank" rel="noreferrer" className="mkl:transition-colors mkl:hover:text-violet-600">GitHub ↗</a>
                        <a href="#" target="_blank" rel="noreferrer" className="mkl:transition-colors mkl:hover:text-violet-600">LinkedIn ↗</a>
                        <a href="#" className="mkl:transition-colors mkl:hover:text-violet-600">Email ↗</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}