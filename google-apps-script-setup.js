/**
 * BLACKSILA — Google Apps Script: Contact Form Handler
 * ─────────────────────────────────────────────────────
 * SETUP INSTRUCTIONS (do this once):
 *
 * 1. Open your Google Sheet (or create a new one at sheets.new)
 * 2. Click Extensions → Apps Script
 * 3. Delete any existing code and paste ALL of this file's contents
 * 4. Click Save (floppy icon or Ctrl+S)
 * 5. Click "Deploy" → "New deployment"
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click "Deploy" → copy the Web App URL
 * 7. Paste that URL into: src/config/contact.ts → APPS_SCRIPT_URL
 *
 * ─────────────────────────────────────────────────────
 * WHAT THIS SCRIPT DOES ON EACH FORM SUBMISSION:
 *   ✅ Appends a new row to the active Google Sheet
 *   ✅ Sends an email notification to blacksila.services@gmail.com
 *   ✅ Returns a JSON success/error response
 * ─────────────────────────────────────────────────────
 */

// ── Paste this code in Google Apps Script ────────────────────────────────────
/*

const NOTIFY_EMAIL = "blacksila.services@gmail.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp (IST)", "Full Name", "Mobile", "Service Required", "Message"]);
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold");
    }

    // Append data row
    var timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "dd-MMM-yyyy HH:mm:ss"
    );

    sheet.appendRow([
      timestamp,
      data.name,
      data.mobile,
      data.service,
      data.message,
    ]);

    // Build email body
    var emailBody =
      "New Consultation Request\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
      "Name     : " + data.name    + "\n" +
      "Mobile   : " + data.mobile  + "\n" +
      "Service  : " + data.service + "\n" +
      "Message  : " + data.message + "\n\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "Submitted : " + timestamp   + " IST\n" +
      "Via       : Blacksila Website";

    // Send email notification
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "New Consultation Request — " + data.name,
      body: emailBody,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

*/
// ─────────────────────────────────────────────────────────────────────────────
