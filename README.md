# Cucumber with Jest example project using React.js and Typescript

This project demonstrates a how to use Cucumber with Jest in a React.js project that uses Typescript. 
- Define features in the `specifications` directory
- Implement them in any `spec` file under `src`
- Run the standard `yarn test` command
- Jest's watch functionality works when you edit a feature file

Read more about [how to run cucumber test with `jest-cucumber`](https://github.com/bencompton/jest-cucumber).

## Configure your own

Here is what has been done to achieve that:

1. Use `craco` to easily override `jest` configuration without ejecting the React app

2. Configure `jest` to watch for changes to `.feature` files locates in `<rootDir>/specifications` directory
- add `<rootDir>/specifications` directory to `roots`
- add `feature` extension to `moduleFileExtensions`

1. Use `jest-cucumber` to write cucumber steps with Jest