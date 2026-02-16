import { Task, Interaction } from "@serenity-js/core";
import { UserModel } from "../models/UserModel";
import { Send, DeleteRequest, LastResponse } from '@serenity-js/rest';

export class DeleteUser {
    static endpointWithData(endpoint: string) { 
        return Task.where(`#actor realiza una petición DELETE en el endpoint ${endpoint}`,
            Send.a(DeleteRequest.to(endpoint)), 
            // Después de enviar la request, mostramos la respuesta
            Interaction.where(`#actor muestra la respuesta`, async actor => {
                const response = await LastResponse.body<any>().answeredBy(actor);
                console.log(`Respuesta recibida: ${JSON.stringify(response)}`);
            })
        );
    }   
}