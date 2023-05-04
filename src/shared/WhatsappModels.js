"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappModels {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "text",
            "text": {
                "body": textResponse,
            }
        });
        return data;
    }
}
const whatsappModels = new WhatsappModels();
exports.default = whatsappModels;
