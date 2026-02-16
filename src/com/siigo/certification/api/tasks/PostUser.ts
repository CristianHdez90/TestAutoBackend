import { Task, Interaction } from "@serenity-js/core";
import { UserModel } from "../models/UserModel";
import { Send, PostRequest, LastResponse } from '@serenity-js/rest';

export class PostUser {
    static endpointWithData(endpoint: string, data: UserModel) {
        const payload = {
            email: data.email,
            password: data.password
        };      

        return Task.where(`#actor realiza una petición POST en el endpoint ${endpoint} con email ${data.email} y password ${data.password}`,
            Send.a(PostRequest.to(endpoint).with(payload)),
            
            // Después de enviar la request, mostramos la respuesta
            Interaction.where(`#actor muestra la respuesta`, async actor => {
                const response = await LastResponse.body<any>().answeredBy(actor);
                console.log(`Respuesta recibida: ${JSON.stringify(response)}`);
            })

        );
    }
}