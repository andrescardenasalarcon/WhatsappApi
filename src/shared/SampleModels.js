"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleModels {
    SampleText(textResponse, number) {
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
    SampleImage(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "image",
            "image": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png",
            }
        });
        return data;
    }
    SampleAudio(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "audio",
            "audio": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
            }
        });
        return data;
    }
    SampleVideo(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "video",
            "video": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
            }
        });
        return data;
    }
    SampleDocument(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
            }
        });
        return data;
    }
    SampleButtons(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¿Me Aceptas?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Sí"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        });
        return data;
    }
    SampleList(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "Tengo estas opciones"
                },
                "body": {
                    "text": "Son:"
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
    SampleLocation(number) {
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
const sampleModels = new SampleModels();
exports.default = sampleModels;
