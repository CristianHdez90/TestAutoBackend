import { configure, ArtifactArchiver } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions, TakePhotosBeforeAndAfterInteractions } from '@serenity-js/web';

import path from 'path';

// Carpeta donde se guardan los reportes
const serenityOutputDir = path.resolve(process.cwd(), 'target/site/serenity');
const requirementsDirectoryPath = path.resolve(__dirname, '../test/features/');
const specDirectoryPath = path.resolve(__dirname, '../test/features/');

configure({
    crew: [
        ConsoleReporter.forDarkTerminals(),         // Reporte por consola        
        //new SerenityBDDReporter(),                  // Reportes JSON para Serenity BDD
         ['@serenity-js/serenity-bdd', {
            requirementsDirectory: path.resolve(__dirname, '../test/features/'),
            // Ruta a la carpeta donde están tus features
            specDirectory: path.resolve(__dirname, '../test/features/'), 
            reporter: { includeAbilityDetails: true },
            
        }],
        // ['@serenity-js/console-reporter', { 
        //     showLineNumbers: true, 
        //     showSummary: true,
        // }],                
        ArtifactArchiver.storingArtifactsAt(serenityOutputDir),   // Archivos y evidencias
        //Photographer.whoWill(TakePhotosOfFailures), // Fotos solo cuando falle
        // También puedes usar:
        Photographer.whoWill(TakePhotosOfInteractions),
        //Photographer.whoWill(TakePhotosBeforeAndAfterInteractions),
    ],
});
console.log(`Configuración de Serenity lista. Los reportes se guardarán en: ${serenityOutputDir}`);
console.log('Ruta de requirementsDirectory:', requirementsDirectoryPath);
console.log('Ruta de specDirectory:', specDirectoryPath);
