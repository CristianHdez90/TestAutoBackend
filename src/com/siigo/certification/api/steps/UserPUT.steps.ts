import { Given, When, Then } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Ensure, equals, isTrue } from "@serenity-js/assertions";
import { PutUser } from "../tasks/PutUser";
import { ReviewUserUpdateResponse } from "../questions/ReviewUserUpdateResponse";

When('{pronombre} user realiza una petición PUT en el endpoint {string} con los siguientes datos', async (actor: Actor, endpoint: string, dataTable) => {
    const rows = dataTable.hashes();
    for (const row of rows) {
        await actor.attemptsTo(
            PutUser.endpointWithData(endpoint, row)
        );
    }
});

Then('{pronombre} campo first_name debe ser igual a {string}', async (actor: Actor, string) => {
    await actor.attemptsTo(
        Ensure.that(ReviewUserUpdateResponse.firstName, equals(string))
    );
});

Then('{pronombre} campo last_name debe ser igual a {string}', async (actor: Actor, string) => {
    await actor.attemptsTo(
        Ensure.that(ReviewUserUpdateResponse.lastName, equals(string))
    );
});