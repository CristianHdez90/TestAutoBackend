import { When } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Ensure, equals, isTrue } from "@serenity-js/assertions";
import { DeleteUser } from "../tasks/DeleteUser";

When('{pronombre} user realiza una petición DELETE en el endpoint {string}', async  (actor: Actor, endpoint: string) => {
    await actor.attemptsTo(
        DeleteUser.endpointWithData(endpoint)       
    );
  });