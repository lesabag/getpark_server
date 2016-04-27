/**
 * Created by liore on 4/19/2016.
 */
var xmpp = require('node-xmpp');
/*
//Set node-xmpp options.
//Replace with your projectID in the jid and your API key in the password
//The key settings for CCS are the last two to force SSL and Plain SASL auth.
var options = {
    type: 'client',
    jid: 'XXXXXXXXX@gcm.googleapis.com',
    password: 'XXXXXXXX',
    port: 5235,
    host: 'gcm.googleapis.com',
    legacySSL: true,
    preferredSaslMechanism : 'PLAIN'
};

console.log('creating xmpp app');

var cl = new xmpp.Client(options);
cl.on('online',
    function() {
        console.log("online");
    });

cl.on('stanza',
    function(stanza) {
        if (stanza.is('message') &&
                // Best to ignore an error
            stanza.attrs.type !== 'error') {

            console.log("Message received");

            //Message format as per here: https://developer.android.com/google/gcm/ccs.html#upstream
            var messageData = JSON.parse(stanza.getChildText("gcm"));

            if (messageData && messageData.message_type != "ack" && messageData.message_type != "nack") {

                var ackMsg = new xmpp.Element('message').c('gcm', { xmlns: 'google:mobile:data' }).t(JSON.stringify({
                    "to":messageData.from,
                    "message_id": messageData.message_id,
                    "message_type":"ack"
                }));
                //send back the ack.
                cl.send(ackMsg);
                console.log("Sent ack");

                //Now do something useful here with the message
                //e.g. awesomefunction(messageData);
                //but let's just log it.
                console.log(messageData);

            } else {
                //Need to do something more here for a nack.
                console.log("message was an ack or nack...discarding");
            }

        } else {
            console.log("error");
            console.log(stanza)
        }

    });

cl.on('error',
    function(e) {
        console.log("Error occured:");
        console.error(e);
        console.error(e.children);
    });
*/