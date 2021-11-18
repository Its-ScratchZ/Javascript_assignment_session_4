/*Create an object using object literal syntax and use variable name email for creating an object, create properties like:
sendTo and sentFrom properties and give values to it, create send method which will log the message like "message sent."
 */

let email = {
    sendTo    :'Bibek Subedi',
    sentFrom  :'Anubhav Karki',
    dateSent  :'18/11/2021 : 12:41 PM',
    Send : function() {
        console.log('Message Sent')
    }
}

console.log(email)
email.Send()

