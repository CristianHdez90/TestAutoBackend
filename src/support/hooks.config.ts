import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { configure, Cast } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import * as playwright from 'playwright';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

setDefaultTimeout(60 * 1000); // Timeout global para todos los escenarios

const serenityOutputDir = path.resolve(process.cwd(), 'target/site/serenity');

BeforeAll(async () => {
    // Limpiar reportes previos de Serenity
    if (fs.existsSync(serenityOutputDir)) {
        fs.rmSync(serenityOutputDir, { recursive: true, force: true });
        console.log('Se limpiaron los reportes de Serenity');
    }    
});

Before(async function () {    

    // Variables del entorno    
    const apiUrl = process.env.BASE_URL_API || '';
    const apiKey = process.env.XAPIKEY || '';
    console.log(`API URL: ${apiUrl}`);
    console.log(`API Key: ${apiKey ? '*******' : 'X - No se encontró XAPIKEY en .env'}`);

    // Configurar actor con habilidades tanto de front (Playwright) como de API (CallAnApi)
    this.actor = configure({
        actors: Cast.where(actor =>
            actor.whoCan(                
                CallAnApi.using({
                    baseURL: apiUrl,
                    headers: {                        
                        'Content-Type': 'application/json',
                        'x-api-key': `${apiKey}`,
                    },
                })
            )
        )
    });

    console.log('Actor configurado con habilidades de Playwright y API');
});