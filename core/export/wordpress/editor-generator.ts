import {
    createElement,
    useState,
    useEffect,
} from '@wordpress/element';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    registerBlockType,
} from '@wordpress/blocks';


import {
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
    SelectControl,
    Button,
} from '@wordpress/components';

import type {
    BlockAttributeConfig,
    ArrayControlProps,
    AttributeValues,
    RenderAttributeControlOptions,
    JsonControlProps,
    ObjectControlProps,
    BlockConfig,
    EditorBlockSettings
} from '../../utils/types.ts';


import {
    RawHTML,
} from '@wordpress/element';

import {
    useBlockProps,
} from '@wordpress/block-editor';

import { h } from 'preact';
import renderToString from 'preact-render-to-string';

import type { ComponentType } from 'preact';


/**
 * Create a default value from an attribute config.
 */
function createDefaultValue(
    config: BlockAttributeConfig,
): unknown {
    const types = Array.isArray(config.type)
        ? config.type
        : [config.type];

    const type = types[0];

    switch (type) {
        case 'string':
        case 'textarea':
            return '';

        case 'number':
            return 0;

        case 'boolean':
            return false;

        case 'array':
            return [];

        case 'object':
            return {};

        default:
            return null;
    }
}

/**
 * Render recursive controls for an array attribute.
 */
function ArrayControl({
    name,
    config,
    value,
    onChange,
}: ArrayControlProps) {
    const arrayValue = Array.isArray(value) ? value : [];

    const itemConfig: BlockAttributeConfig = config.items ?? {
        type: 'string',
    };

    function updateItem(index: number, nextValue: unknown) {
        const nextArray = [...arrayValue];

        nextArray[index] = nextValue;

        onChange(nextArray);
    }

    function removeItem(index: number) {
        onChange(
            arrayValue.filter((_, itemIndex) => itemIndex !== index),
        );
    }

    function addItem() {
        onChange([
            ...arrayValue,
            createDefaultValue(itemConfig),
        ]);
    }

    return createElement(
        'div',
        {
            className: 'makelier-wp-array-control',
        },
        createElement(
            'strong',
            null,
            name,
        ),
        ...arrayValue.map((item, index) => {
            const itemName = `Item ${index + 1}`;

            return createElement(
                'div',
                {
                    key: index,
                    className: 'makelier-wp-array-item',
                },
                renderAttributeControl({
                    name: itemName,
                    config: itemConfig,
                    attributes: {
                        [itemName]: item,
                    },
                    setAttributes: (nextAttributes: AttributeValues) => {
                        updateItem(index, nextAttributes[itemName]);
                    },
                }),
                createElement(
                    Button,
                    {
                        variant: 'secondary',
                        isDestructive: true,
                        onClick: () => removeItem(index),
                    },
                    'Remove',
                ),
            );
        }),
        createElement(
            Button,
            {
                variant: 'secondary',
                onClick: addItem,
            },
            'Add Item',
        ),
    );
}


/**
 * Render a Gutenberg control for a basic attribute.
 */
function wrapOptionalControl(
    control: ReturnType<typeof createElement>,
    name: string,
    config: BlockAttributeConfig,
    value: unknown,
    setAttributes: (attributes: AttributeValues) => void,
) {
    if (!config.optional) {
        return control;
    }

    return createElement(
        'div',
        {
            className: 'makelier-wp-optional-control',
        },
        control,
        createElement(
            Button,
            {
                variant: 'tertiary',
                onClick: () => {
                    setAttributes({
                        [name]: undefined,
                    });
                },
            },
            'Clear',
        ),
    );
}

export function renderAttributeControl({
    name,
    config,
    attributes,
    setAttributes,
}: RenderAttributeControlOptions) {
    const value = attributes[name];
    const types = Array.isArray(config.type)
        ? config.type
        : [config.type];



    // Enum
    // =========================
    if (config.enum?.length) {
        return wrapOptionalControl(
            createElement(SelectControl, {
                label: name,
                value: value === undefined ? '' : String(value),
                options: [
                    {
                        label: 'Select an option',
                        value: '',
                    },
                    ...config.enum.map((item) => ({
                        label: String(item),
                        value: String(item),
                    })),
                ],
                onChange: (nextValue: string) => {
                    const selectedValue = config.enum?.find(
                        (item) => String(item) === nextValue,
                    );

                    setAttributes({
                        [name]: selectedValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    // String
    // =========================
    if (types.includes('string')) {
        if (types.length > 1) {
            return wrapOptionalControl(
                renderJsonControl({
                    name,
                    value,
                    setAttributes,
                }),
                name,
                config,
                value,
                setAttributes,
            );
        }

        return wrapOptionalControl(
            createElement(TextControl, {
                label: name,
                value: typeof value === 'string' ? value : '',
                onChange: (nextValue: string) => {
                    setAttributes({
                        [name]: nextValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    // Textarea
    // =========================
    if (types.includes('textarea')) {
        return wrapOptionalControl(
            createElement(TextareaControl, {
                label: name,
                value: typeof value === 'string' ? value : '',
                onChange: (nextValue: string) => {
                    setAttributes({
                        [name]: nextValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    // Number
    // =========================
    if (types.includes('number')) {
        if (types.length > 1) {
            return wrapOptionalControl(
                renderJsonControl({
                    name,
                    value,
                    setAttributes,
                }),
                name,
                config,
                value,
                setAttributes,
            );
        }

        return wrapOptionalControl(
            createElement(TextControl, {
                label: name,
                type: 'number',
                value: typeof value === 'number' ? String(value) : '',
                onChange: (nextValue: string) => {
                    const parsed = Number(nextValue);

                    setAttributes({
                        [name]: nextValue.trim() === '' ? undefined : parsed,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }



    // Boolean
    // =========================
    if (types.includes('boolean')) {
        if (types.length > 1) {
            return wrapOptionalControl(
                renderJsonControl({
                    name,
                    value,
                    setAttributes,
                }),
                name,
                config,
                value,
                setAttributes,
            );
        }

        return wrapOptionalControl(
            createElement(ToggleControl, {
                label: name,
                checked: Boolean(value),
                onChange: (nextValue: boolean) => {
                    setAttributes({
                        [name]: nextValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    // Array and Object will be handled by recursive controls.
    // =========================
    if (types.includes('object')) {
        return wrapOptionalControl(
            createElement(ObjectControl, {
                name,
                config,
                value,
                onChange: (nextValue: Record<string, unknown>) => {
                    setAttributes({
                        [name]: nextValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    if (types.includes('array')) {
        return wrapOptionalControl(
            createElement(ArrayControl, {
                name,
                config,
                value,
                onChange: (nextValue: unknown[]) => {
                    setAttributes({
                        [name]: nextValue,
                    });
                },
            }),
            name,
            config,
            value,
            setAttributes,
        );
    }

    return null;
}




/**
 * Render a JSON editor with local draft state.
 */
function JsonControl({
    name,
    value,
    setAttributes,
}: JsonControlProps) {
    const serializedValue = JSON.stringify(
        value ?? null,
        null,
        4,
    );

    const [draft, setDraft] = useState(serializedValue);

    // Sync the editor when the external attribute changes.
    useEffect(() => {
        setDraft(serializedValue);
    }, [serializedValue]);

    function handleChange(nextValue: string) {
        setDraft(nextValue);

        try {
            const parsedValue = JSON.parse(nextValue);

            setAttributes({
                [name]: parsedValue,
            });
        } catch {
            // Keep the draft while the JSON is invalid.
        }
    }

    return createElement(TextareaControl, {
        label: `${name} (JSON)`,
        value: draft,
        rows: 10,
        onChange: handleChange,
    });
}

/**
 * Create a JSON editor element.
 */
function renderJsonControl({
    name,
    value,
    setAttributes,
}: JsonControlProps) {
    return createElement(JsonControl, {
        name,
        value,
        setAttributes,
    });
}



/**
 * Render recursive controls for an object attribute.
 */
function ObjectControl({
    name,
    config,
    value,
    onChange,
}: ObjectControlProps) {
    const objectValue = (
        value &&
        typeof value === 'object' &&
        !Array.isArray(value)
    )
        ? value as Record<string, unknown>
        : {};

    const properties = config.properties ?? {};

    return createElement(
        'div',
        {
            className: 'makelier-wp-object-control',
        },
        createElement(
            'strong',
            null,
            name,
        ),
        ...Object.entries(properties).map(([key, propertyConfig]) => {
            return renderAttributeControl({
                name: key,
                config: propertyConfig,
                attributes: objectValue,
                setAttributes: (nextValue) => {
                    onChange({
                        ...objectValue,
                        ...nextValue,
                    });
                },
            });
        }),
    );
}

/**
 * Create the Gutenberg edit component for a block.
 */
export function createBlockEdit(
    config: BlockConfig,
    Template: ComponentType<any>,
) {
    return function Edit({
        attributes,
        setAttributes,
    }: {
        attributes: AttributeValues;
        setAttributes: (attributes: AttributeValues) => void;
    }) {
        const blockProps = useBlockProps();

        const html = renderToString(
            h(Template, attributes),
        );

        return createElement(
            'div',
            blockProps,
            createElement(
                RawHTML,
                null,
                html,
            ),
            createElement(
                InspectorControls,
                null,
                createElement(
                    PanelBody,
                    {
                        title: 'Settings',
                        initialOpen: true,
                    },
                    ...Object.entries(config.attributes).map(
                        ([name, attributeConfig]) => {
                            return renderAttributeControl({
                                name,
                                config: attributeConfig,
                                attributes,
                                setAttributes,
                            });
                        },
                    ),
                ),
            ),
        );
    };
}


/**
 * Create the Gutenberg save component for a block.
 */
export function createBlockSave(
    Template: ComponentType<any>,
) {
    return function Save({
        attributes,
    }: {
        attributes: AttributeValues;
    }) {
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
    };
}

/**
 * Register a Gutenberg block.
 */
export function registerEditorBlock(
    name: string,
    config: BlockConfig,
    Template: ComponentType<any>,
) {
    const settings: EditorBlockSettings = {
        title: name,
        category: 'widgets',
        attributes: {},
        edit: createBlockEdit(config, Template),
        save: createBlockSave(Template),
    };

    registerBlockType(name, settings);
}