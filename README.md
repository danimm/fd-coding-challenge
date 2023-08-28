# Fire Digital Coding Challenge

This is the result of my coding challenge for the company Fire Digital.

[Deployed version](https://fd-coding-challenge.netlify.app)

[Source code](https://github.com/danimm/fd-coding-challenge)

## Functionality implemented

**Apart from the features requested in the coding challenge document**, the following features were also implemented:

1. A navigation system with vue-router was created.
2. Handled the behavior for non-existing routes (redirection).
3. A /watches route was created where you can choose from a list of watches (based on the products.json file).
4. Created a dynamic view for the details of a particular watch. The data will be loaded through a service to simulate the API call as it would be done in real life.
5. A global state was created using [Pinia](https://pinia.vuejs.org/) (the Vuex replacement of Vue 2.x) and a composable to not interact directly with the store inside the components following the good practices of the adapter pattern.
6. A layout that encompasses the application was created.
7. Some basic tests were added using Vitest
8. Husky was added to run, linter, tsc and tests before commits to avoid code arriving to the repository with any of the mentioned errors.

## Technologies used:

1. vue (3.3.4)
2. Typescript
3. vue-router (SPA navigation)
4. pinia (state management)
5. tailwindCSS (utility classes)
6. vueuse (oficial vue helpers library)
7. vite (bundler)
7. vitest (testing)
8. dev tools:
    1. Husky
    2. Prettier
    3. ESLint

## Development

During the test I have tried to follow good practices and I have left some comments to explain my intention when developing this functionality. You will find it with the code ```*INFO*```.

During the creation of components I usually follow an order (highly recommended) when structuring the files, but this may vary according to the criteria of the development team.

## Vue files structure
1. script tag (script setup whenever possible).
2. template
3. style, if necessary (scoped whenever possible)

## Script setup structure
1. Imports:
   1. Libraries
   2. Data, Composables, Helpers, Types, etc..
   3. Components
2. Define component properties (depending on its use): defineProps, DefineEmits, DefineOptions, DefineSlots..
3. Composables instances
4. Local State: refs, template-refs, reactive, computed, etc..
5. Methods: function (I prefer to use _function_ syntax rather than const syntax: _const x = () =>_ ).
6. Watchers, WatchEffects
7. Lifecyle methods: onMounted(), onBeforeUnmount()...

I really enjoyed doing the test and I hope I fulfilled all the requirements that were needed. If you have any questions or doubts, I will be happy to help you and explain any implemented functionality and I am open to constructive feedback.

made with 💚 by Daniel Muñoz