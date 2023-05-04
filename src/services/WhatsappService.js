"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require('https');
// function SendMessageWhatsApp(textResponse: string | any, number: string | any) {}
class WhatsappService {
    SendMessageWhatsApp(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "text",
            "text": {
                "body": textResponse,
            }
        });
        const options = {
            host: "graph.facebook.com",
            path: "/v16.0/112433098501498/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer EAAxzswRYhbUBALRPWjGmxp0UtW8v5PNVUG0LAfW5nBjLHURjft31i3Xc8I57T8ZCqmH6ixLNp80s9r1DablnpyoWFuI3ZBfHbFJyjKZBCU1ZCRG3db9esHEUz0Kc8BSiV7CMulqqrlbJTtflR21UmSsV1tSOg0eDNwcBcWfZAZCGiezZC6t9bS5"
            },
        };
        const req = https.request(options, (res) => { res.on("data", (d) => { process.stdout.write(d); }); });
        req.on("error", (error) => {
            console.error(error.message);
        });
        req.write(data);
        req.end();
    }
}
const whatsappService = new WhatsappService();
exports.default = whatsappService;
