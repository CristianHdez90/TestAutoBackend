import { Given, When, Then } from "@cucumber/cucumber";
import { Actor } from "@serenity-js/core";
import { Ensure, equals, isTrue } from "@serenity-js/assertions";
import { GET_Users} from "../tasks/GetUsers";
import { ReviewStatusCodeApi } from "../questions/ReviewStatusCodeApi";
import { ReviewUsersPageResponse } from "../questions/ReviewUsersPageResponse";

 
Given('{actor} quiere consumir el API {string}', async (actor: Actor, urlBase: string) => { 
    console.log(`API: ${urlBase}`);     
});


When('{pronombre} realiza una petición GET en el endpoint {string}', async(actor: Actor, endpoint: string) => {
    await actor.attemptsTo(
        GET_Users.endpointWithPage(endpoint)
    );    
});

Then('{pronombre} código de respuesta debe ser {string}', async(actor: Actor, statusCode: string) => {
    await actor.attemptsTo(
        Ensure.that(ReviewStatusCodeApi.isStatusCodeOk, equals(parseInt(statusCode)))
    );
   
});

Then('{pronombre} campo data no debe estar vacío', async(actor: Actor) => {
    await actor.attemptsTo(
        Ensure.that(ReviewUsersPageResponse.dataIsNotEmpty, isTrue())
    );    
});

Then('{pronombre} campo context debe ser igual a {string}', async(actor: Actor, expectedValue: string) => {
    await actor.attemptsTo(
        Ensure.that(ReviewUsersPageResponse.metaContext,equals(expectedValue))
    );    
});


Then('{pronombre} campo data debe estar vacío', async(actor: Actor) => {
    await actor.attemptsTo(
        Ensure.that(ReviewUsersPageResponse.dataIstEmpty, isTrue())
    );    
});