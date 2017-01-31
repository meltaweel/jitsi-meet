/* global APP */
import AbstractOverlay from './AbstractOverlay';

/**
 * Implements an abstract React Component for overlay with ability to
 * reload the page.
 */
export default class AbstractReloadableOverlay extends AbstractOverlay {
    /**
     * Initializes a new AbstractOverlay instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     * @public
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once for every instance.

        /**
         * @protected
         * @type {Function}
         */
        this._reconnectNow = this._reconnectNow.bind(this);
    }

    /**
     * Reloads the page.
     *
     * @returns {void}
     * @protected
     */
    _reconnectNow() {
        // FIXME: In future we should dispatch an action here that will result
        // in reload.
        APP.ConferenceUrl.reload();
    }
}
