# Sauce w/ WebdriverIO Workshop

Master automated software testing locally and in the cloud.

## 🧠 You will learn

✅ how to test a Nuxt web app

✅ Use Sauce Labs continuous testing grid

✅ Use [WebdriverIO](https://webdriver.io) comprehensive testing capabilities

😉 And maybe more...

## 🔧 Prerequisites

1. Experience JavaScript + Node.js

## Table Of Contents

- Setup
- E2E UI testing w/ [WebdriverIO](https://webdriver.io)
- Scaling automation to the cloud
- Conclusions

## Your Co-Instructor: Christian Bromann

<img src="https://user-images.githubusercontent.com/731337/259603794-493bdc08-e12e-455d-81c6-c93281359170.png" alt="Christian Bromann" height="200" width="200"/>

- 🏢 I’am a Founding Engineer at [Stateful](https://stateful.com)
- 🤖 Lead Maintainer of the [WebdriverIO](https://webdriver.io) project
- 💬 Ask me about automation, open source, testing, and techno
- 😄 Pronouns: he/him
- ⚡ Fun fact I grew up on the country side in Germany next to 🐮 and 🐔
- 📫 Follow me on my socials
   - [LinkedIn for professional connections](https://www.linkedin.com/in/christian-bromann/)
   - [Twitter for 🔥 Dev quotes](https://twitter.com/bromann)
   - [GitHub for 🆓 code](https://github.com/christian-bromann)

## Your Co-Instructor: Nikolay Advolodkin

<img src="https://s3.eu-west-3.amazonaws.com/production.sesamers-sprint.s3-api-upload.sesamers.com/63f78d1016ed8_7cojihbvtis0_c7230d8fa1.png" alt="api-testing" height="200" width="200"/>

- 🏢 I’m a Principal Developer Advocate at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/about) - 150K+ dev community learning to release higher quality software.
- 🚧 I’m currently working on using AI to improve automated testing. Let's talk :)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm an Easter-European Jew, born in Uzbekistan, speak Russian, raised in US since 1996
- 📫 Follow me for testing and dev training
   - [JS Testing Tips Weekly Newsletter](https://ultimateqa.ck.page/js-testing-tips)
   - [Testing training on Youtube](https://youtube.com/ultimateqa)
   - [Test Automation Experience Show](https://youtube.com/@test-automation-experience)
   - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
   - [Twitter](https://twitter.com/intent/follow?screen_name=nikolay_a00&region=follow_link)

## ⚙️ Setup

1. Ensure you have [docker installed](https://docs.docker.com/get-docker/) and running
2. Clone the repo or [![Run with VS Code](https://badgen.net/badge/Run%20with%20/VS%20Code/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=https%3A%2F%2Fgithub.com%2Fnadvolod%2Fsauce-wdio-workshop.git&fileToOpen=README.md)

```sh
git clone git@github.com:nadvolod/sauce-wdio-workshop.git
```

3. Install the dependencies

```sh
yarn
# or
npm install
```

4. Start the Supabase service

```sh
yarn supabase:start
# or
npm run supabase:start
```

5. The needed supabase environment variables will print after the service has started. Duplicate .env.example to .env and provide the following variables from the terminal print out.

```sh
# this can stay the same
SUPABASE_URL="http://localhost:3000"
# anon key the terminal print out
SUPABASE_KEY="<your anon key>"
# service role key from the terminal print out
SUPABASE_SERVICE_KEY="<your service_role key>"
```

You can also retrieve these at any time by running the following:

```sh
npx supabase status
```

6. Migrate and seed your database with initial schema and values by running:

```sh
yarn db:reset
# or
npm run db:reset
```

7. Start the dev server

```sh
yarn dev
# or
npm run dev
```

8. That's it! 🎉 You're ready to go.

## WebdriverIO + Sauce Setup

- Sign up for a [Sauce Labs account](https://bit.ly/3OCzGKT)
- Have `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` set in your `.env` file based on your credentials that can be obtained in https://app.saucelabs.com/user-settings
- Set up WebdriverIO in your project through `npm init wdio@latest .` 🤖 WebdriverIO will guide you through it, make sure you select:
   - `E2E Testing - of Web or Mobile Applications`
   - `On my local machine` (we will set up our Sauce Labs integration within the next step)

## 🏋️‍♂️ 1st Test

Go to `tests/specs/exerciseslogin.test.ts` and try `it('should fail with no input')`

## 2nd test

Try this test. Follow the instructions in the comments to fill in one line of code at a time

```ts
it('should be invalid if username is not an email', async () => {
    // go to login page
    // get email input element
    // set value to invalid email
    // check if input is invalid - try method below
    // expect(await browser.execute((elem: HTMLInputElement) => elem.checkValidity(), input)).toBe(false)
})
```

## Next 3 tests

Now try
`it('email should be valid with valid email'`

`it('should be fail if credentials are invalid'`

### Registration without a UI

Now try the `it('should be able to login'` test in `tests/specs/exercises/registration.test.ts`. The key here is to login. However, the registration happens on the back end using the `before()`.

## Project Details features

Implement the 3 tests in `projectDetails.ts`

## How to run in the Sauce Labs cloud

Why would you want to run in a cloud grid like Sauce?

- Automatic videos, logs, screenshots, and analytics
- Ability to scale parallelization
- Ability to run on Windows/Mac and all other browsers
- Ability to run on real mobile devices

### Sauce Labs Integration

Few steps are required to run your tests on Sauce Labs:

1. Install WebdriverIO's Sauce Labs integration service via `npx wdio install service sauce`
1. Create a second config called `wdio.sauce.conf.ts` file for running on Sauce Labs
  - Make it inherit local configuration, e.g.
    ```js
    import { config as localConfig } from './wdio.conf.js'
    export const config = {
      ...localConfig,
      // Sauce Labs specific configurations
      // ...
    }
    ```
  - Add your user credentials, e.g.:
    ```js
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY
    ```
  - Add the Sauce Labs integration service and enable [Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/), e.g.:
    ```js
    services: [
      'nuxt',
      ['sauce', { sauceConnect: true }]
    ]
    ```
  - Add more capabilities to run your tests on Chrome/Firefox/Edge/Safari on Windows/Mac on (see Sauce Labs's [Platform Configurator](https://saucelabs.com/products/platform-configurator) for help)

## Conclusions

WebdriverIO is great for:

- [Unit and component](https://webdriver.io/docs/component-testing), [native desktop](https://webdriver.io/docs/desktop-testing/macos), [Web](https://webdriver.io/docs/extension-testing/web-extensions) and [VS Code](https://webdriver.io/docs/extension-testing/vscode-extensions) Extension as well as E2E testing on web and mobile devices
- Test web and mobile applications in real browser/devices that your users/customers are using (and not just browser engines)
- Get unlimited parallelisation for free
- Make use of countless reporters and plugins build by a [rich ecosystem](https://www.npmjs.com/search?q=keywords%3Awdio-service%2Cwdio-reporter)

Sauce Labs is great for:

- Developers that want to test fast and at scale
- Developers that want to run tests in real browsers, the way users see their apps
- Have a complete history of automated testing for your team/org

## Honest feedback

Please take 3 min to leave your [honest and anonymous feedback](https://docs.google.com/forms/d/e/1FAIpQLSefjACp8xGXRiSzzhoud9j18puDlc7lMjJB_HiGRQf-zia7tw/viewform?usp=sf_link)

## Join the WebdriverIO community

- Follow WebdriverIO on [Twitter](https://twitter.com/webdriverio)
- Ask any questions on [Discord](https://discord.webdriver.io)
- Subscribe on [YouTube](https://youtube.com/@webdriverio)

## Follow Nikolay

- [LinkedIn](https://www.linkedin.com/in/nikolayadvolodkin/)
- [Twitter](https://twitter.com/intent/follow?screen_name=nikolay_a00&region=follow_link)
