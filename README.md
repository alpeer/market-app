# Market App

This application has been created as an assignment for internship purpose.


## Features
- Cart Management
- Cart State on Session Storage
- Pagination
- Sorting
- Filtering
- Fuzzy Logic & Intuitive UI
- Responsible design
## Stack
- React 18
- React Redux
- StoryBook (for manual tests)
- Cypress (for unit/integration tests)
- JSDoc (for documentation)
## Development

You can install and run dev environment by executing following commands
```bash
npm install
npm start
```
### Mock data
Mock files(`items.json`, `companies.json`) are stored under [api/mock](https://github.com/alpeer/market-app/tree/master/api/mock) folder.

You can run [json-server](https://github.com/typicode/json-server) via following command

```bash
npm run mock-server
```

### Folder Structure

- [app](https://github.com/alpeer/market-app/tree/master/src/app) folder has backbone of application, main layout, store and reducers are here. react router should also implemented here in the future.
- [components](https://github.com/alpeer/market-app/tree/master/src/components) folder has UI components separated by folder with their names. These folders contain styles, stories, unit tests for each component.
- [pages](https://github.com/alpeer/market-app/tree/master/src/pages) folder seems unnecessary for now since we have only one page. Nevertheless we may have new pages in the future.
- [pages](https://github.com/alpeer/market-app/tree/master/src/pages) folder seems unnecessary for now since we have only one page. Nevertheless we may have new pages in the future.
- [utils](https://github.com/alpeer/market-app/tree/master/src/utils) folder should have generic utils that can be used project-wide.
## Tests
### Manuel Tests

You can inspect components and test manually by using storybook

```bash
# Runs Storybook
npm run storybook
```
### Unit Tests

Unit tests are under the folder of related component {See example: [components/SearchableFilter](https://github.com/alpeer/market-app/tree/master/src/components/SearchableFilter.cy.js) }

To run unit tests simply run
```bash
npm test
```

### Integration Tests

Integration tests are under [cypress/e2e](https://github.com/alpeer/market-app/tree/master/cypress/e2e/ProductsPage) folder and covers following requirements:

- Pagination
- Product sorting, filtering(item type, brands, tags) 
- Cart Management (both at Product List and Cart)

```bash
npm run test:e2e
```

## Building

Project should be builded by running the following commands:
```bash
npm run ci
npm run build
npm run build:docs
npm run build:storybook
```

## Deployment

Project has been deployed on [Vercel](https://market-app-x6dr.vercel.app/)

API service of mock data is available thanks to [Vercel Functions](https://market-app-x6dr.vercel.app/api/items)
