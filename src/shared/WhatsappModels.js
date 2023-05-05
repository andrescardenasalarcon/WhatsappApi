"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappModels {
    MessageText(textResponse, number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": true,
                "body": textResponse,
            }
        });
        return data;
    }
    MessageList(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "Tengo"
                },
                "body": {
                    "text": "Estas opciones:"
                },
                "footer": {
                    "text": "Selecciona una de las opciones para poder atenderte"
                },
                "action": {
                    "button": "Ver opciones",
                    "sections": [
                        {
                            "title": "Compra y vende productos",
                            "rows": [
                                {
                                    "id": "main-comprar-header",
                                    "title": "Comprar",
                                    "description": "Compra los mejores productos para tu hogar"
                                },
                                {
                                    "id": "main-comprar",
                                    "title": "Vender",
                                    "description": "Vende tus productos"
                                }
                            ]
                        },
                        {
                            "title": "Centro de atencion",
                            "rows": [
                                {
                                    "id": "main-agencia",
                                    "title": "Agencia",
                                    "description": "Puedes visitar nuestra agencia."
                                },
                                {
                                    "id": "main-contacto",
                                    "title": "Centro de contacto",
                                    "description": "Te atenderá uno de nuestro agentes"
                                }
                            ]
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageComprar(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¿Selecciona uno de los productos?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-laptop",
                                "title": "Laptop"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-telefono",
                                "title": "Telefono"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    MessageLocation(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "location",
            "location": {
                "latitude": "5.544479653380838",
                "longitude": "73.35158729082059",
                "name": "HitData",
                "address": "Centro Comercial Boulevard, Cl. 32 # 3-76, Tunja, Boyacá"
            }
        });
        return data;
    }
}
const whatsappModels = new WhatsappModels();
exports.default = whatsappModels;
