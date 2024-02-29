## Тестирование Directus CMS
____

#### Обязательно:
- `NodeJS 18.17` (у меня завелось только на этой версии - не выше, не ниже);
- Если нода не этой версии, используй NVM (`nvm use 18.17`);

#### Запуск:
- `npx directus start` - запуск "backend" (CMS) по адресу `0.0.0.0:8055`;
- `npm run dev` - генерит типы для GQL и запускает dev-server на `localhost:3000`;
- `npm run graphql:watch` - следит за типами "налету" и предлагает сгенерировать типы;

#### Стек:
- [Directus CMS](https://directus.io/) для CRUD'ов;
- [NextJS](https://nextjs.org/) для Frontend;
- [GraphQL](https://graphql.org/) - общение с API;
- [Tanstack/Query](https://tanstack.com/query) - тулза для запросов;

#### TODO:
- Протестить Докер;
- 