import { Question, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

interface ReqResUpdateUserResponse {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    updatedAt: string;
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

export class ReviewUserUpdateResponse {

    /**
     * Obtener first_name
     */
    static readonly firstName = Question.about<string>(
        'el first_name del usuario actualizado',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUpdateUserResponse>()
            );
            return body.first_name;
        }
    );

    /**
     * Obtener last_name
     */
    static readonly lastName = Question.about<string>(
        'el last_name del usuario actualizado',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUpdateUserResponse>()
            );
            return body.last_name;
        }
    );

    /**
     * Obtener email
     */
    static readonly email = Question.about<string>(
        'el email del usuario actualizado',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUpdateUserResponse>()
            );
            return body.email;
        }
    );

    /**
     * Validar que updatedAt exista
     */
    static readonly updatedAtIsNotEmpty = Question.about<boolean>(
        'si el campo updatedAt no está vacío',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUpdateUserResponse>()
            );
            return body.updatedAt.length > 0;
        }
    );

    /**
     * Obtener contexto meta
     */
    static readonly metaContext = Question.about<string>(
        'el contexto del meta',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUpdateUserResponse>()
            );
            return body._meta.context;
        }
    );
}
