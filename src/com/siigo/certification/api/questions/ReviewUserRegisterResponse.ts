import { Question, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

interface ReqResRegisterResponse {
    id: number;
    token: string;
    _meta: {
        powered_by: string;
        docs_url: string;
        upgrade_url: string;
        example_url: string;
        variant: string;
        message: string;
        cta: {
            label: string;
            url: string;
        };
        context: string;
    };
}

interface ReqResRegisterResponseFailed {
    error: string;
}

export class ReviewRegisterResponse {

    /**
     * Obtener el ID
     */
    static readonly idIsNotEmpty = Question.about<boolean>(
        'el id retornado',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResRegisterResponse>()
            );
            return body.id > 0;
        }
    );

    /**
     * Obtener el token
     */
    static readonly tokenIsNotEmpty = Question.about<boolean>(
        'el token retornado',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResRegisterResponse>()
            );
            return body.token.length > 0;
        }
    );

    /**
     * Obtener el mensaje de error
     */
    static readonly errorMessage = Question.about<string>(
        'el mensaje del meta',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResRegisterResponseFailed>()
            );
            return body.error;
        }
    );

    /**
     * Obtener el contexto de _meta.context
     */
    static readonly metaContext = Question.about<string>(
        'el contexto del meta',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResRegisterResponse>()
            );
            return body._meta.context;
        }
    );    

}