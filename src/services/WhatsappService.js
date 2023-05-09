"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require('https');
class WhatsappService {
    SendMessageWhatsApp(data) {
        const options = {
            host: "graph.facebook.com",
            path: "/v16.0/112433098501498/messages",
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(process.env.PASS_SECRET),
            },
        };
        const req = https.request(options, (res) => {
            res.on("data", (d) => {
                process.stdout.write(d);
            });
        });
        req.on("error", (error) => {
            console.error(error);
        });
        req.write(data);
        req.end();
    }
}
const whatsappService = new WhatsappService();
exports.default = whatsappService;
