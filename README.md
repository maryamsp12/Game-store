# Paf frontend exercise

## Objective

Translate the provided [design mocks](./design/) into a working solution with HTML, CSS, Typescript, and React.
Do not add any other frameworks or libraries. 

## Requirements

1. Use modern HTML to produce a semantic information structure.
1. Use modern CSS to produce the layout with a mobile first approach  
   _Should support screen resolutions from small screens (320px+) up to big screens (1920px+)_
1. Fetch JSON-data from the following url: ```/api/games/lists.json```
1. Use React to generate the elements/components based on the fetched JSON-data.
1. Create a search/filter component based upon the JSON-data.
   - Implement your own design for the search/filter component
   - Should be a component
   - Should filter the JSON-data based on user input
   - Should display up to 10 previous searches
   - Should persist search history on reload  
     _**Don't** use autocomplete="on"_

**Author your solution in the following places:**  
- `index.html`
- `src/styles.css`
- `src/scripts.tsx`

## Getting started

There are two avaliable development environments
- [Localhost](#localhost)
- [Code Sandbox](#sandbox)

### Localhost

This setup provides a development server to be used in your machine.  
Prerequisites are **node.js** _(LTS)_ (and **git** if you clone the repo)
1. Install dependencies:
    ```bash
    npm ci
    ```
1. Start server:
    ```bash
    npm start
    ```
1. When done, package your solution with the following command:
    ```bash
    npm pack
    ```
1. And then send us your ```paf-frontend-exercise-1.0.0.tgz```.

### Sandbox 
This is the web based setup that only requires a modern browser to get you started.

1. [Open a new Codesandbox](https://codesandbox.io/s/github/AndreasLindbergPAF/paf-frontend-exercise/tree/master/?fontsize=14&hidenavigation=1&theme=dark).
1. When done, send us your Codesandbox-link.

## Evaluation
Your code test will be evaluated against the following criteria:

- Meets the stated requirements.
- Ability to implement and adapt a given design to a responsive design
- Creativity shown in implementing a custom search feature
- Simple over clever
- Understanding of:
  - React fundamentals
  - TypeScript
  - Immutability vs. mutability
