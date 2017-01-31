import AbstractReloadableOverlay from './AbstractReloadableOverlay';
import React from 'react';

/**
 * Implements a React Component for suspended overlay. Shown when suspended
 * is detected.
 */
export default class SuspendedOverlay extends AbstractReloadableOverlay {
    /**
     * Constructs overlay body with the message and a button to rejoin.
     *
     * @returns {ReactElement|null}
     * @override
     * @protected
     */
    _renderOverlayContent() {
        const btnClass = 'inlay__button button-control button-control_primary';
        const onClickHandler = this._reconnectNow;

        return (
            <div className = 'inlay'>
                <span className = 'inlay__icon icon-microphone' />
                <span className = 'inlay__icon icon-camera' />
                <h3
                    className = 'inlay__title'
                    data-i18n = 'suspendedoverlay.title' />
                <button
                    className = { btnClass }
                    data-i18n = 'suspendedoverlay.rejoinKeyTitle'
                    id = 'rejoin'
                    onClick = { onClickHandler } />
            </div>
        );
    }
}
