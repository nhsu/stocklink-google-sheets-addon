var documentProperties = PropertiesService.getDocumentProperties();

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('StockLink')
      .addItem('Set Access Token', 'setAccessToken')
      .addToUi();
}

function setAccessToken() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.prompt(
      "Please enter your StockLink personal access token.",
      "A personal access token is required for StockLink functions to work. If you don't have one, you can get one at https://stocklink.speran.com/. ",
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    documentProperties.setProperty('ACCESS_TOKEN', text);
    ui.alert('Your personal access token code has been succesfully set.');
  }
}

function TDACCOUNT(acct, field) {
  var url = "https://stocklink.speran.com/accounts/" + acct + '/' + field; 
  return getNumber(url);
}

function TDPOSITION(acct, sym, field) {
  var url = "https://stocklink.speran.com/accounts/" + acct + '/positions/' + sym + '/' + field;
  return getNumber(url);
}

function TDQUOTE(sym, field, time) { 
  var url = "https://stocklink.speran.com/quotes/" + sym + '/' + field;
  return getNumber(url);
}

function getNumber(url) {
  var token = documentProperties.getProperty('ACCESS_TOKEN');
  Logger.log(url);
  var response = UrlFetchApp.fetch(url);
  return Number(response.getContentText());
}
