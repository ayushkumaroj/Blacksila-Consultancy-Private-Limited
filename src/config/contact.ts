/**
 * Central contact configuration for Blacksila Consultancy Pvt. Ltd.
 * All WhatsApp and phone links across the UI should use these constants.
 */

export const PHONE_NUMBER   = "+918102762470";          // E.164 format for tel: links
export const PHONE_DISPLAY  = "+91 81027 62470";        // Human-readable display

export const WA_NUMBER      = "918102762470";            // WhatsApp number (no +)
export const WA_MESSAGE     = encodeURIComponent(
  "Hi, I would like to know more about your services."
);

/** Opens WhatsApp (app on mobile, Web on desktop) with pre-filled message */
export const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

/** Triggers the device dialer */
export const PHONE_HREF = `tel:${PHONE_NUMBER}`;

/**
 * Google Apps Script Web App URL — receives form submissions,
 * appends rows to Google Sheet, and sends email notifications.
 *
 * ⚠️  Replace the placeholder below with your actual deployed URL.
 *     See: google-apps-script-setup.js for setup instructions.
 */
export const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ??
  "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

