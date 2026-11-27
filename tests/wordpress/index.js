
import { registerBlockType } from '@wordpress/blocks';

import {
    createElement,
    Fragment,
    RawHTML,
} from '@wordpress/element';

import {
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';

import {
    PanelBody,
    TextControl,
} from '@wordpress/components';

import { h } from 'preact';
import renderToString from 'preact-render-to-string';

import { Template } from '../../sites/_official/src/components/pricing-table/template.tsx';

import save from './save.js';

registerBlockType('makelier/pricing-table', {
    edit({ attributes, setAttributes }) {
        const {
            eyebrow,
            title,
        } = attributes;

        // Gutenberg block properties.
        const blockProps = useBlockProps({
            className: 'makelier-pricing-preview',
        });

        // Render the original Template for editor preview.
        const previewHtml = renderToString(
            h(Template, attributes),
        );

        return createElement(
            Fragment,
            null,

            // Block settings panel.
            createElement(
                InspectorControls,
                null,
                createElement(
                    PanelBody,
                    {
                        title: 'Pricing Settings',
                        initialOpen: true,
                    },

                    createElement(TextControl, {
                        label: 'Eyebrow',
                        value: eyebrow || '',
                        onChange: (value) => {
                            setAttributes({
                                eyebrow: value,
                            });
                        },
                    }),

                    createElement(TextControl, {
                        label: 'Title',
                        value: title || '',
                        onChange: (value) => {
                            setAttributes({
                                title: value,
                            });
                        },
                    }),
                ),
            ),

            // Template preview.
            createElement(
                'div',
                blockProps,
                createElement(
                    RawHTML,
                    null,
                    previewHtml,
                ),
            ),
        );
    },

    save,
});
