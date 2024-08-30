<h1 align="center">RU | Redux counter app V4</h1>

[V1](https://github.com/4min-dev/ReduxCounterApp_V1) | [V2](https://github.com/4min-dev/ReduxCounterApp_V2) | [V3](https://github.com/4min-dev/ReduxCounterApp_V3) | [V4](https://github.com/4min-dev/ReduxCounterApp_V4) | [V5](https://github.com/4min-dev/ReduxCounterApp_V5)

<h2 align="center">Технологический стек, используемый в проекте:</h2>

- CSS;
- HTML;
- JS;
- TS;
- React;
- Redux;
- Redux-saga;
- Redux-thunk;
- Redux-toolkit;
- RTK-Query.

<h2 align="center">Что нового?</h2>

Проект был модифицирован в соответствии с современным подходом redux за счет широкого использования redux-toolkit.

В предыдущей версии проекта middleware получал thunk через ручную спецификацию. Теперь middleware возвращает thunk по умолчанию, а также добавляет redux-saga. Мы избавились от ненужной установки и реализации redux-thunk.

Редьюсеры были подправлены для redux-toolkit, теперь они объявляются с помощью createSlice.

Добавлена поддержка RTK-query, теперь вся работа с API стала удобнее и проще. Асинхронная логика получения пользователей теперь происходит с помощью этого инструмента.

Папка action-types была перенесена в папку с другими интерфейсами, чтобы с ней было проще работать.

<hr/>

<h1 align="center">EN | Redux counter app V4</h1>

<h2 align="center">Whats new?</h2>

The project has been modified to fit the modern redux approach through extensive use of redux-toolkit.

In the previous version of the project middleware received thunk through manual specification. Now middleware returns thunk by default and also adds redux-saga. We got rid of unnecessary installation and implementation of redux-thunk.

Reducers have been tweaked for redux-toolkit, they are now declared using createSlice.

RTK-query support has been added, all API work is now more convenient and easier. Asynchronous logic on getting users now happens by using this tool.

The action-types folder has been moved to the folder with other interfaces to make it easier to work with.

