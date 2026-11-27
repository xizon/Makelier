export interface EpicModalProps {
    latinHeader?: string;
    heading?: string;
    description?: string;
    nameLabel?: string;
    namePlaceholder?: string;
    emailLabel?: string;
    emailPlaceholder?: string;
    submitText?: string;
}

export function Template({
    latinHeader = '',
    heading = '',
    description = '',
    nameLabel = '',
    namePlaceholder = '',
    emailLabel = '',
    emailPlaceholder = '',
    submitText = '',
}: EpicModalProps) {
    return (
        <div className="epic-modal-root">
            <div id="modal" role="dialog" aria-modal="true">
                <div className="veil"></div>
                <div className="modal-card">
                    <button className="m-close" id="mClose" aria-label="close">
                        ✕
                    </button>
                    {latinHeader && <p className="m-lat">{latinHeader}</p>}
                    {heading && <h3>{heading}</h3>}
                    {description && <p className="m-body">{description}</p>}
                    <form id="mForm" noValidate>
                        {nameLabel && <label htmlFor="fName">{nameLabel}</label>}
                        <input
                            id="fName"
                            type="text"
                            placeholder={namePlaceholder}
                            autoComplete="name"
                        />
                        {emailLabel && <label htmlFor="fMail">{emailLabel}</label>}
                        <input
                            id="fMail"
                            type="email"
                            placeholder={emailPlaceholder}
                            autoComplete="email"
                        />
                        <p className="m-error" id="mError"></p>
                        {submitText && (
                            <button className="btn" type="submit" style={{ width: '100%' }}>
                                {submitText}
                            </button>
                        )}
                    </form>
                </div>
            </div>
            <div id="toast"></div>
        </div>
    );
}
