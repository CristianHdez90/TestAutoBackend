import { Task, Interaction } from "@serenity-js/core";
import { UserModel } from "../models/UserModel";
import { Send, LastResponse, PutRequest } from '@serenity-js/rest';
export class PutUser {
    static endpointWithData(endpoint: string, data: UserModel) {
        const payload = {
            email: data.email,            
            first_name: data.first_name,
            last_name: data.last_name,
            avatar: data.avatar
        };
       
        return Task.where(`#actor realiza una petición PUT en el endpoint ${endpoint} con email ${data.email}, first name ${data.first_name}, last name ${data.last_name} y Avatar: ${data.avatar}`,
            Send.a(PutRequest.to(endpoint).with(payload)),
            // Después de enviar la request, mostramos la respuesta
            Interaction.where(`#actor muestra la respuesta`, async actor => {
                const response = await LastResponse.body<any>().answeredBy(actor);
                console.log(`Respuesta recibida: ${JSON.stringify(response)}`);
            })
        );
    }
}