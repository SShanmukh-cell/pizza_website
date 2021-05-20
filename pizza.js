function showPageSection(id) {
    var listofIds = ["home", "about-us", "menu", "contact-us"];
    for(i=0; i<listofIds.length; i++)
    {
        if(listofIds[i] == id)
        {
            document.getElementById(id).style.visibility = "visible";
        }
        else{
            document.getElementById(listofIds[i]).style.visibility = "hidden"
        }
    }
}
function priceButton(idOfItem, idOfAmount){
    var item = document.getElementById(idOfItem).innerHTML;
    var amount = document.getElementById(idOfAmount).innerHTML;
    var alertMessage = "Item:" + item + "Pizza" + "\n" + "price: for only " + amount + "more";
    alert(alertMessage);
}
function displyAlert() {
    var emailAddress = document.getElementById("email").value
    var subjectLine = document.getElementById("subject").value
    var messageBody = document.getElementById("body").value
    var alertMessage = "Email: " + emailAddress + "\n" + "Subject: " + subjectLine + "\n" + "Body: " + messageBody + "\nWe got your Message.\nWe will soon respond you";
    alert(alertMessage);
}