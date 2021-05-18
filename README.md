# Create-React-App Mobx Without Eject



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

+ config-overrides.js

```
// babel 플러그인 설치
yarn add --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

// 추가적인 es7 데코레이터 설치
yarn add --dev core-decorators

// mobx 설치
yarn add mobx mobx-react

```

+ package.json or .babelrc
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

jsconfig.json
```json
{
    "compilerOptions": {
        "experimentalDecorators" : true
    }
}
```