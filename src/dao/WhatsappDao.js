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
const fs = require("fs");
const WhatsappService_1 = __importDefault(require("../services/WhatsappService"));
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
function GetTextUser(message) {
    var text = "";
    var typeMessage = message["type"];
    if (typeMessage == "text") {
        text = (message["text"])["body"];
    }
    else if (typeMessage == "interactive") {
        var interactiveObject = (message["interactive"]);
        var typeInteractive = interactiveObject["type"];
        myConsole.log(interactiveObject);
        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        }
        else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        }
        else {
            myConsole.log("Sin Mensaje");
        }
    }
    else {
        myConsole.log("Sin Mensaje");
    }
    return text;
}
class WhatsappDao {
    static VerificarToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var accessToken = "RGFDDS324DGD12DSFDG344";
                var token = req.query["hub.verify_token"];
                var challenge = req.query["hub.challenge"];
                if (challenge != null && token != null && token == accessToken) {
                    res.send(challenge);
                }
                else {
                    res.status(400).send();
                }
            }
            catch (e) {
                res.status(400).send();
            }
            res.status(200).send("Hola verifyToken");
        });
    }
    static RecivedMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var entry = (req.body["entry"])[0];
                var changes = (entry["changes"])[0];
                var value = changes["value"];
                var messageObject = value["messages"];
                if (typeof messageObject != "undefined") {
                    var message = messageObject[0];
                    var text = GetTextUser(message);
                    var number = message["from"];
                    myConsole.log(text);
                    WhatsappService_1.default.SendMessageWhatsApp("The user say: " + text, number);
                }
                res.send("EVENT_RECIVED");
            }
            catch (e) {
                myConsole.log(e);
                res.send("EVENT_RECIVED");
            }
        });
    }
}
exports.default = WhatsappDao;
