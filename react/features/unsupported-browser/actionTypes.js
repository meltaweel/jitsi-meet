import { Symbol } from '../base/react';

/**
 * The type of the Redux action which signals that the React Component
 * UnsupportedMobileBrowser which was rendered as a promotion of the mobile app
 * on a browser was dismissed by the user. For example, the Web app may possibly
 * run in Google Chrome on Android but we choose to promote the mobile app
 * anyway claiming the user experience provided by the Web app is inferior to
 * that of the mobile app. Eventually, the user may choose to dismiss the
 * promotion of the mobile app and take their chances with the Web app instead.
 * If unused, then we have chosen to force the mobile app and not allow the Web
 * app in mobile browsers.
 *
 * {
 *     type: DISMISS_MOBILE_APP_PROMO
 * }
 */
export const DISMISS_MOBILE_APP_PROMO = Symbol('DISMISS_MOBILE_APP_PROMO');
