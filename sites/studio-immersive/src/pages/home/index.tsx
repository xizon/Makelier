// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';

// Components
import SmplePage3Main from '@/components/sample-page-3-main';

export default function HomePage() {
    return (
        <SmplePage3Main
            view="home"
            logoLink="./home.html"
            logoHighlight="#d6a319"
            nav={[
                { key: 'home', label: 'Home', href: './home.html' },
                { key: 'works', label: 'Works', href: './works.html' },
                { key: 'about', label: 'About', href: './about.html' },
                { key: 'contact', label: 'Contact', href: './contact.html' },
            ]}
            footer={{
                text: '&copy; 2026 Makelier.',
                href: 'https://github.com/xizon/Makelier',
            }}
            hero={{
                title: 'Makelier',
                subtitle: 'A web creation toolkit for developers.',
            }}
        />
    );
}
