# Create-React-App Mobx Without Eject

## STEP. 01 
```
create-react-app myapp
```

## STEP. 02 

```git
yarn add --dev customize-cra
yarn add --dev react-app-rewired
```

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
  },
```
+ **config-overrides.js**

```
const { 
    addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
    disableEsLint,
    override,
  } = require("customize-cra");
  
  // 사용자 정의 웹팩 설정
  module.exports = {
    webpack: override(
        disableEsLint(),
        addDecoratorsLegacy()
    ),
  };
```

## STEP. 03

```
// babel 플러그인 설치
yarn add --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

// 추가적인 es7 데코레이터 설치
yarn add --dev core-decorators

// mobx 설치
yarn add mobx mobx-react

```

+ package.json
```
  "babel":{
      "presets": [
        "react-app"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ]
      ]
  }
```
+ jsconfig.json

```json
{
    "compilerOptions": {
        "experimentalDecorators" : true
    }
}
```