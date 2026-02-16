import { Given, When, Then } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Ensure, equals, isTrue } from "@serenity-js/assertions";
import { PostUser } from "../tasks/PostUser";
import { ReviewRegisterResponse } from "../questions/ReviewUserRegisterResponse";


When('{pronombre} user realiza una petición POST en el endpoint {string} con los siguientes datos', async (actor: Actor, endpoint: string, dataTable) => {
    const rows = dataTable.hashes();
    for (const row of rows) {
        await actor.attemptsTo(
            PostUser.endpointWithData(endpoint, row)
        );
    }
});

Then('{pronombre} campo id debe existir', async (actor: Actor) => {
    // Validar que el campo id exista y sea un número
    await actor.attemptsTo(
        Ensure.that(ReviewRegisterResponse.idIsNotEmpty, isTrue())
    );

});

Then('{pronombre} campo token no debe estar vacío', async (actor: Actor) => {
    // Validar que el token no esté vacío
    await actor.attemptsTo(
        Ensure.that(ReviewRegisterResponse.tokenIsNotEmpty, isTrue())
    );

});

Then('{pronombre} campo error debe ser {string}', async function (actor: Actor, error: string) {
    await actor.attemptsTo(
        Ensure.that(ReviewRegisterResponse.errorMessage, equals(error))
    );
});