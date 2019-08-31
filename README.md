# Turkish Messages for React-Admin

Turkish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

![react-admin demo](http://static.marmelab.com/react-admin.gif)

## Installation

```sh
npm install --save ra-language-turkish
```

## Usage

```js
import turkishMessages from 'ra-language-turkish';

const messages = {
    'tr': turkishMessages,
};

const i18nProvider = locale => messages[locale];

<Admin locale="tr" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
