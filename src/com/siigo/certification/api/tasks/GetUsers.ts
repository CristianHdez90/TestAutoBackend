import { Task, Interaction, Duration } from "@serenity-js/core";
import { Send, GetRequest } from '@serenity-js/rest';

export class GET_Users {

    static endpointWithPage(endpoint: string) {
        return Task.where(`#actor realiza una petición GET en el endpoint ${endpoint}`,
            Send.a(GetRequest.to(endpoint)),     
            Interaction.where(`#actor espera 2 segundos`, async ()=>{
                await new Promise(resolve => setTimeout(resolve, 2000));
            }                
        )
        );               
    }
}