"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappModels_1 = __importDefault(require("./WhatsappModels"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
class ProcessMessage {
    Process(textUser, number) {
        textUser = textUser.toLowerCase();
        var models = [];
        if (textUser.includes("hola")) {
            //Saludar
            var model = WhatsappModels_1.default.MessageText("Hola, un gusto saludarte", number);
            models.push(model);
        }
        else if (textUser.includes("gracias")) {
            var model = WhatsappModels_1.default.MessageText("Con gusto :)", number);
            models.push(model);
        }
        else if (textUser.includes("adios") || textUser.includes("adiós")
            || textUser.includes("bye") || textUser.includes("me voy")) {
            var model = WhatsappModels_1.default.MessageText("Vuelva pronto", number);
            models.push(model);
        }
        else {
            var model = WhatsappModels_1.default.MessageText("No te entiendo", number);
            models.push(model);
        }
        models.forEach(model => {
            WhatsappService_1.default.SendMessageWhatsApp(model);
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
