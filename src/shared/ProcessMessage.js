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
            var modelList = WhatsappModels_1.default.MessageList(number);
            models.push(modelList);
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
        else if (textUser.includes("comprar")) {
            var model = WhatsappModels_1.default.MessageComprar(number);
            models.push(model);
        }
        else if (textUser.includes("vender")) {
            var model = WhatsappModels_1.default.MessageText("Registrate en el siguiente formulario: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
            models.push(model);
        }
        else if (textUser.includes("agencia")) {
            var model = WhatsappModels_1.default.MessageLocation(number);
            models.push(model);
        }
        else if (textUser.includes("contacto")) {
            var model = WhatsappModels_1.default.MessageText("*Centro de contacto:* \n3114546376", number);
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
