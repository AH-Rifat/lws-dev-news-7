# Dev News

A simple news portal for developers, showcasing the latest stories and trends in the world of web development.

## Product Features

-   **Internationalization:** Supports multiple languages (English and Bengali).
-   **Dynamic News Feed:** Fetches and displays a list of news articles.
-   **Detailed News View:** Each article has its own dedicated page.
-   **Modal View:** Seamlessly view news articles in a modal without leaving the main page.
-   **Search Functionality:** (Planned) Users will be able to search for articles.

## Tech Stack with Version

-   **Next.js:** 14.2.35
-   **React:** 18
-   **Tailwind CSS:** 3.4.1
-   **ESLint:** 8

## Running Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/Learn-with-Sumit/batch-4-assignment-7-dev-news-AH-Rifat.git>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open http://localhost:3000 with your browser to see the result.

## Component Tree Structure

```
E:\LWS\assignments\batch-4-assignment-7-dev-news-AH-Rifat\
├───app\
│   ├───[lang]\
│   │   ├───layout.js
│   │   ├───not-found.js
│   │   ├───page.js
│   │   ├───(.)news\
│   │   │   └───[slug]\
│   │   │       └───page.js
│   │   ├───components\
│   │   │   ├───Modal.js
│   │   │   ├───Header\
│   │   │   │   └───page.js
│   │   │   └───NewsList\
│   │   │       └───page.js
│   │   ├───dictionaries\
│   │   │   ├───bn.json
│   │   │   ├───dictionaries.js
│   │   │   └───en.json
│   │   └───news\
│   │       └───[slug]\
│   │           ├───not-found.js
│   │           └───page.js
│   ├───api\
│   │   └───news\
│   │       ├───route.js
│   │       └───[slug]\
│   │           └───route.js
│   ├───utils\
│   │   └───CustomFormatFunctions.js
```

## Live Demo Link

[Live link](https://lws-news-dev.netlify.app)

```