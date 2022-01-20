function doPost(e) {
  let postdata = JSON.parse(e.postData.contents);
  let userId = postdata.userId;
  let displayName = postdata.displayName;
  let pictureUrl = postdata.pictureUrl;
  let request = postdata.request;
  SpreadsheetApp.openById("<< Spreadsheet ID >>").getSheetByName("<< Sheet NAme >>").appendRow([userId,displayName,pictureUrl,request]);
  // SpreadsheetApp.getActive().getSheetByName("<< Sheet NAme >>").appendRow([userId,displayName,pictureUrl,request]);
  let result = {"type":true,"msg":"completed"};
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}