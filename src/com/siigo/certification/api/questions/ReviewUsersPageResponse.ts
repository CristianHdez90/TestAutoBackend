import { Question, AnswersQuestions, UsesAbilities } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

interface ReqResUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<{
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }>;
    support: {
        url: string;
        text: string;
    };
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

export class ReviewUsersPageResponse {    

    /**
     * Obtener el código HTTP
     */
    static readonly statusCode = Question.about<number>(
        'el código de respuesta HTTP',
        actor => actor.answer(LastResponse.status())
    );

    /**
     * Obtener número de página
     */
    static readonly page = Question.about<number>(
        'la página retornada',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUsersResponse>()
            );
            return body.page;
        }
    );

    /**
     * Validar que data no esté vacío
     */
    static readonly dataIsNotEmpty = Question.about<boolean>(
        'si el arreglo data contiene registros',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUsersResponse>()
            );
            return body.data.length > 0;
        }
    );

    /**
     * Validar que data no esté vacío
     */
    static readonly dataIstEmpty = Question.about<boolean>(
        'si el arreglo data contiene registros',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUsersResponse>()
            );
            return body.data.length === 0;
        }
    );

    /**
     * Obtener valor de _meta.context
     */
    static readonly metaContext = Question.about<string>(
        'el contexto del meta',
        async (actor: AnswersQuestions & UsesAbilities) => {
            const body = await actor.answer(
                LastResponse.body<ReqResUsersResponse>()
            );
            return body._meta.context;
        }
    );

}
