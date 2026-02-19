# TestAutoBackend

Proyecto de automatización de pruebas **API** utilizando **Serenity/JS + Cucumber** con patrón **Screenplay**.  
Ejemplos de consumo de API ReqRes: GET, POST, PUT y DELETE.

---

```bash

📂 Estructura de carpetas
src/
 ├─ com/siigo/certification/api/
 │    ├─ interactions/
 │    ├─ tasks/
 │    ├─ questions/
 │    ├─ models/
 │    ├─ utils/
 │
 ├─ support/
 └─ test/
      └─ features/
```


## 🛠 Instalación y ejecución

1. Instala las dependencias:

```bash
npm i

```
2. Ejecuta las pruebas:
```bash
npm test
```
3. Genera reportes completos de Serenity BDD:

```bash
npm run report:full
o
npx serenity-bdd run
```

## 🚀 GitHub Actions Workflow

**Archivo:** `.github/workflows/performance.yml`

El workflow realiza:

- Ejecutar pruebas frontend con **Serenity/JS + Cucumber + Playwright** y generar reportes JSON en `target/site/serenity/`.
- Subir reportes como artifacts.
- Publicar dashboard actualizado en **GitHub Pages** desde `target/site/serenity/`.


## 🚀 Enlaces de interés

- **Workflow GitHub Actions:** [https://github.com/CristianHdez90/TestAutoBackend/actions](https://github.com/CristianHdez90/TestAutoBackend/actions)  
- **Dashboard GitHub Pages (Serenity BDD):** [https://cristianhdez90.github.io/TestAutoBackend/](https://cristianhdez90.github.io/TestAutoBackend/)