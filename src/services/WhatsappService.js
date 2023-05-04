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
                Authorization: "Bearer EAAxzswRYhbUBAEyWQaAZCLEpQGD7TWgz1OhxDTrXZA9FuqVcSxNXNfCmBxtKF6nZA9MTwFBTpN96JpIrzaZCvivuNnoDKGYuMRCEjCXuSsmW6tQcqdbZCQIRNyZC2ZChYnVjCZCjrbS5KyZApji3d3RfQzDzZBPWC2jKXOiX9vvYRXYOwApBYHn13jH2LuyBoXmbf1qjqbUkVBZCP5OyZAlQRHJYAjdzZC22MpEUZD"
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
