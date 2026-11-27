import {
    createElement,
    RawHTML,
} from '@wordpress/element';

import {
    useBlockProps,
} from '@wordpress/block-editor';

import { h } from 'preact';
import renderToString from 'preact-render-to-string';

import { Template } from '../../sites/_official/src/components/pricing-table/template.tsx';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();

    const html = renderToString(
        h(Template, attributes),
    );

    const className = blockProps.className || '';

    return createElement(
        RawHTML,
        null,
        `<div class="${className}">${html}</div>`,
    );
}