import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { Template, PricingLine, PricingHighlight } from '../../sites/_official/src/components/pricing-table/template';


const html = renderToString(
    h(Template, {
        eyebrow: 'Pricing',
        title: 'Simple, transparent pricing',
        freeTitle: 'Free',
        premiumTitle: 'Premium',
        rows: [
            {
                feature: 'Unlimited projects',
                free: '3 projects',
                premium: 'Unlimited',
            },
            {
                feature: 'Priority support',
                free: 'Not included',
                premium: 'Included',
            },
            {
                feature: 'Advanced features',
                free: <PricingLine>Basic features</PricingLine>,
                premium: (
                    <PricingHighlight>
                        All features included
                    </PricingHighlight>
                ),
            }
        ],
    }),
);

console.log('Generated HTML:', html);


document.querySelector('#app')!.innerHTML = html;