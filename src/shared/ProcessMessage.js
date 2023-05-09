"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappModels_1 = __importDefault(require("./WhatsappModels"));
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const ChatgptService_1 = __importDefault(require("../services/ChatgptService"));
class ProcessMessage {
    Process(textUser, number) {
        return __awaiter(this, void 0, void 0, function* () {
            textUser = textUser.toLowerCase();
            var models = [];
            //#region sin chat gpt
            // if (textUser.includes("hola")) {
            //     //Saludar
            //     var model = whatsappModels.MessageText("Hola, un gusto saludarte", number);
            //     models.push(model);
            //     var modelList = whatsappModels.MessageList(number);
            //     models.push(modelList);
            // } else if (textUser.includes("gracias")) {
            //     var model = whatsappModels.MessageText("Con gusto :)", number);
            //     models.push(model);
            // } else if (textUser.includes("adios") || textUser.includes("adiós")
            //     || textUser.includes("bye") || textUser.includes("me voy")) {
            //     var model = whatsappModels.MessageText("Vuelva pronto", number);
            //     models.push(model);
            // } else if (textUser.includes("comprar")) {
            //     var model = whatsappModels.MessageComprar(number);
            //     models.push(model);
            // } else if (textUser.includes("vender")) {
            //     var model = whatsappModels.MessageText("Registrate en el siguiente formulario: https://docs.google.com/forms/d/e/1FAIpQLSeV2-BAld86gZy0aq_ZMRXU9FJnZBBw5yyWxVB4KlfXJmXadA/viewform", number);
            //     models.push(model);
            // } else if (textUser.includes("agencia")) {
            //     var model = whatsappModels.MessageLocation(number);
            //     models.push(model);
            // } else if (textUser.includes("contacto")) {
            //     var model = whatsappModels.MessageText("*Centro de contacto:* \n3114546376",number);
            //     models.push(model);
            // } else {
            //     var model = whatsappModels.MessageText("No te entiendo", number);
            //     models.push(model);
            // }
            //#endregion
            //#region con chat gpt
            const resultChatGPT = yield ChatgptService_1.default.GetMessagesChatGPT(textUser);
            if (resultChatGPT != null) {
                var model = WhatsappModels_1.default.MessageText(resultChatGPT, number);
                models.push(model);
            }
            else {
                var model = WhatsappModels_1.default.MessageText("Los siento algo salió mal 🫣", number);
                models.push(model);
            }
            //#endregion
            models.forEach(model => {
                WhatsappService_1.default.SendMessageWhatsApp(model);
            });
        });
    }
}
const processMessage = new ProcessMessage();
exports.default = processMessage;
