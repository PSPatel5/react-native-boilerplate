# Coditas React Native boilerplate

[![React Native](./.github/react.png)](https://github.com/facebook/react-native)
[![TypeScript](./.github/typescript.png)](https://www.typescriptlang.org/)
[![Redux](./.github/redux.png)](https://github.com/reactjs/redux)

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application with a cleaner architecture.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic.

## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Boilerplate Highlights

Some of the key highlights of this boilerplate is as below:

#### Core

- [React Native](https://github.com/facebook/react-nativee) for views.
- [React Navigation](https://github.com/react-navigation/react-navigation) handles in-app navigation.
- [TypeScript](https://www.typescriptlang.org/) for adding types to JS files.
- [Redux](https://github.com/reactjs/redux) manages application state.
- [React Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.

#### Utilities

- [Redux Thunk](https://github.com/reduxjs/redux-thunk) makes side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier and better.
- [Axios](https://github.com/axios/axios) for API calls.
- [HTTP Service](https://github.com/Parth-coditas/react-native-boilerplate/blob/main/template/src/services/HttpService.ts) Base service class for API calls.
- [Navigation Service](https://github.com/Parth-coditas/react-native-boilerplate/blob/main/template/src/services/NavigationService.ts) Navigation Service class to navigate without navigation props.
- [Button Wrapper](https://github.com/Parth-coditas/react-native-boilerplate/blob/main/template/src/components/Button/Button.tsx) Custom button component that extends Pressable and enhances it with various helpful props.

#### Developer Experience

- [Prettier](https://prettier.io/) for linting.
- [Flipper](https://fbflipper.com/) for debugging.

## Directory Structure

```bash
.
├── __tests__                       # Test cases container folder
├── android                         # Android specific files container folder
├── ios                             # iOS specific files container folder
├── node_modules                    # Node Packages.
├── resources                       # Font files that are copied to native folder when building.
├── src                             # Source code.
|   ├── assets                      # Container folder for asset files.
│   │ ├── Images                    # Container folder for image files.
│   ├── components                  # Container folder for reusable components through out the app.
│   ├── navigation                  # Navigation components and wrappers.
│   ├── redux-store                 # Container for redux files.
│   │ ├── any-folder                # Container folder specific redux.
│   │   ├── Action                  # redux thunk action functions.
│   │   ├── Reducer                 # Reducer functions for redux
│   │ ├── index.ts                  # store creation function and related files
│   │ ├── ReduxTypes.ts             # redux action types constant file
│   │ ├── RootReducer.ts            # container file for combined reducers
│   ├── services                    # API call related files and general services related files.
│   ├── themes                      # Colors,Fonts,Pixel related calculations and constants.
│   ├── utils                       # Container folder for helper functions.
│   ├── views                       # page like components/screens containers .
├── .gitignore                      # Tells git which files to ignore.
├── .prettierrc                     # Rules for prettier linter.
├── App.tsx                         # Container file for all layouts.
├── index.js                        # Initial file to run the app.
├── package.json                    # Package configuration.
├── tsconfig.json                   # TypeScript transpiler configuration.
├── tslint.json                     # Configures tslint.
├── README.md                       # This file.

```

## Start

To create a new project using the boilerplate simply run :

```bash
$ npx react-native init MyApp --template https://github.com/Parth-coditas/react-native-boilerplate
```

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the _platform_ application (remember to start a simulator or connect a device)

## Roadmap

- To Include Theme support.
- Add post init script to remove/add new functionalities.
- Publish boilerplate as NPM package.
- Enhance README.md
