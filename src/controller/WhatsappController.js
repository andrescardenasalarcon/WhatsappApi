"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WhatsappDao_1 = __importDefault(require("../dao/WhatsappDao"));
class WhatsappController extends WhatsappDao_1.default {
    Verificar(req, res) {
        WhatsappController.VerificarToken(req, res);
    }
    Recived(req, res) {
        WhatsappController.RecivedMessage(req, res);
    }
}
const whatsappController = new WhatsappController();
exports.default = whatsappController;
