import save from './save.js';

const attributes = {
    eyebrow: 'Pricing',
    title: 'Makelier WordPress Test',
    freeTitle: 'Free',
    premiumTitle: 'Premium',
    rows: [
        {
            feature: 'Unlimited projects',
            free: '3 projects',
            premium: 'Unlimited',
        },
    ],
};

const element = save({ attributes });

console.log('WordPress Element:', element);
console.log('Element type:', element.type);
console.log('Element props:', element.props);

