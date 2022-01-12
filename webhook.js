const Webhook = {}
var XMLHttpRequest = require('xhr2');
Webhook.Webhook =  class{
     /**
     * Create a new webhook 
     * @class Webhook
     * @param {URL} url Webhook URL
     */
    constructor(url){
        this.url = url;

    }
    /**
     * 
     * @param {String} username Username of the webhook
     * @param {String} text Text of the webhook
     * @param {URL} AvatarURL Avatar for the webhook
     */
    Send(username,text,AvatarURL){
        AvatarURL = AvatarURL || ""
        if(!username){throw new Error("Please provide a username for your webhook")}
        if(!text){throw new Error("Please provide text for your webhook")}
        if(!this.url){throw new Error("No webhook URL specified!")}
        const request = new XMLHttpRequest();
        request.open("POST", this.url);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            username: username,
            avatar_url: AvatarURL,
            content: text
        }
         request.send(JSON.stringify(params));
        
    }
}
