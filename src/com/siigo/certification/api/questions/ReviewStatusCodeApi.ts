import { Question, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export class ReviewStatusCodeApi {

     /**
     * Question para verificar que el status code del API
     * sea "200 OK"
     */
    public static readonly isStatusCodeOk= Question.about(
        'el código de respuesta sea',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const response = await actor.answer(LastResponse.status());
            console.log(`Código de respuesta: ${response}`);
            return response;
        }
    );
    
}