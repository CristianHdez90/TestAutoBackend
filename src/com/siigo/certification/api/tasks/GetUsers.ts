import { Task, Interaction, Duration } from "@serenity-js/core";
import { Send, GetRequest, LastResponse } from '@serenity-js/rest';
import { Ensure, equals, isGreaterThan } from '@serenity-js/assertions';

export class GET_Users {

    static endpointWithPage(endpoint: string) {
        return Task.where(`#actor realiza una petición GET en el endpoint ${endpoint}`,
            Send.a(GetRequest.to(endpoint)),
            Interaction.where(`#actor espera 2 segundos`, async () => {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            )
        );
    }

}