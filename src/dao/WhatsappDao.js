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
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappDao {
    static VerificarToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var accessToken = "RGFDDS324DGD12DSFDG344";
                var token = req.query["hub.verify_token"];
                var challenge = req.body["hub.challenge"];
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
            res.status(200).send("Hola verifyToken");
        });
    }
}
exports.default = WhatsappDao;
