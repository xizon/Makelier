// Global styles
import '@/styles/tailwind.css';

// Custom styles
import './style.css';

// Components
import SmplePage3Main from '@/components/sample-page-3-main';

export default function WorksPage() {
    return (
        <SmplePage3Main
            view="works"
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
            works={[
                { title: 'Product 1', kind: 'UI Design', h1: 212, h2: 268, angle: 160, ratio: 'a', motif: 0, image: '' },
                { title: 'Product 2', kind: 'Web Development', h1: 168, h2: 204, angle: 200, ratio: 'e', motif: 1, image: '' },
                { title: 'Product 3', kind: 'Web Development', h1: 24, h2: 350, angle: 140, ratio: 'c', motif: 2, image: '' },
                { title: 'Product 4', kind: 'UI Design', h1: 48, h2: 12, angle: 175, ratio: 'b', motif: 3, image: '' },
                { title: 'Product 5', kind: 'Web Development', h1: 276, h2: 220, angle: 120, ratio: 'd', motif: 0, image: '' },
                { title: 'Product 6', kind: 'UI Design', h1: 190, h2: 140, angle: 210, ratio: 'a', motif: 2, image: '' },
                { title: 'Product 7', kind: 'Art', h1: 330, h2: 20, angle: 150, ratio: 'e', motif: 1, image: '' },
                { title: 'Product 8', kind: 'UI Design', h1: 150, h2: 186, angle: 185, ratio: 'c', motif: 3, image: '' },
                { title: 'Product 9', kind: 'Art', h1: 38, h2: 300, angle: 130, ratio: 'b', motif: 0, image: '' },
                { title: 'Product 10', kind: 'Art', h1: 232, h2: 196, angle: 195, ratio: 'd', motif: 2, image: '' },
            ]}
        />
    );
}
