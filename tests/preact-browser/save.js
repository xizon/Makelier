import {
    createElement,
    RawHTML,
} from '@wordpress/element';

import { h } from 'preact';
import renderToString from 'preact-render-to-string';

import { Template } from '../../sites/_official/src/components/pricing-table/template.tsx';

export default function save({ attributes }) {
    const html = renderToString(
        h(Template, attributes),
    );

    return createElement(
        RawHTML,
        null,
        html,
    );
}