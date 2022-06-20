function sendEmailToClient() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var listAnswer = ss.getSheetByName('Ответы на форму (1)');
  var clientEmail = listAnswer.getRange(listAnswer.GetLastRow(),5).getValue();
  var kurs = clientEmail.getRange(listAnswer.GetLastRow(),2).getValue();
  var body = "Здравствуйте!" + "Благодарим за заявку <br/>" +"в ближайшее время с вами свяжутся по указанному телефону <br/>";
  var bodyForPower = "Здравствуйте!"+ "Благодарим за заявку на курс Power BI!";
  var bodyForGas = "Здравствуйте!"+ "Благодарим за заявку на курс Google App Script!";
  var bodyForJava = "Здравствуйте!"+ "Благодарим за заявку на курс Javascript!";
  var bodyForOther = "Здравствуйте!"+ "Благодарим за заявку. В ближайшее время с Вами свяжется менеджер!";


  if (kurs == PowerBI) {htmlbody: bodyForPower} 
    else if (kurs == Javascript) {htmlbody: bodyForGas}
    else if (kurs == GoogleAppScript) {htmlbody: bodyForJava}
  else {htmlbody: bodyForOther}
  
  MailApp.sendEmail(clientEmail,"Ваша заявка принята", "Здравствуйте, благодарим за заявку", "", {htmlbody: body});
  
}
