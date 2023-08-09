# Sauce w/ WebdriverIO Workshop

Master automated software testing locally and in the cloud.

## 🧠 You will learn

✅ how to test a Nuxt web app

✅ Use Sauce Labs continuous testing grid

✅ Use WebdriverIO comprehensive testing capabilities

😉 And maybe more...

## 🔧 Prerequisites

1. Experience JavaScript + Node.js

## Table Of Contents

- Setup
- E2E UI testing w/ WebdriverIO
- Scaling automation to the cloud
- Conclusions

## Your Co-Instructor: Christian Bromann

<img src="public/images/family.jpg" alt="api-testing" height="200" width="200"/>

- 🏢 X - FILL THIS SECTION IN
- 🔭 Y [Ultimate QA](https://ultimateqa.com/)
- 🚧 Z
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/intent/follow?screen_name=nikolay_a00&region=follow_link)

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
2. Clone the repo or [![Run with VS Code](https://badgen.net/badge/Run%20with%20/VS%20Code/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=https%3A%2F%2Fgithub.com%2Fvueschool%2Fforge-4-poc.git&fileToOpen=README.md)

```sh
git clone git@github.com:vueschool/vue-forge-episode-4.git
```

3. Start on the boilerplate branch

```sh
git checkout boilerplate
```

4. Install the dependencies

```sh
yarn
# or
npm install
```

5. Start the Supabase service

```sh
yarn supabase:start
# or
npm run supabase:start
```

6. The needed supabase environment variables will print after the service has started. Duplicate .env.example to .env and provide the following variables from the terminal print out.

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

7. Migrate and seed your database with initial schema and values by running:

```sh
yarn db:reset
# or
npm run db:reset
```

8. Start the dev server

```sh
yarn dev
# or
npm run dev
```

9. [Follow these directions in the Devnet Setup Guide](https://vueschool.notion.site/DevNet-Setup-2ee973bf5061497d998823dd5cf43e6b?pvs=4) to get a local development blockchain network running.
10. That's it! 🎉 You're ready to go.

## WebdriverIO + Sauce Setup

- Sign up for a [Sauce Labs account](https://bit.ly/3OCzGKT)
- Have `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` set in your `.env` file based on your credentials that can be obtained in https://app.saucelabs.com/user-settings
- Set up WebdriverIO in your project through `npm init wdio@latest .` 🤖 WebdriverIO will guide you through it, make sure you select:
  - `E2E Testing - of Web or Mobile Applications`
  - `In the cloud using Sauce Labs`

## 🏋️‍♂️ 1st Test

Go to `tests/specs/exerciseslogin.test.ts` and try `it('should fail with no input')`

CB to show solution

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

CB shows solution

## Next 3 tests

Now try
`it('email should be valid with valid email'`

`it('should be fail if credentials are invalid'`

`it('should fail if email is not confirmed'`

CB shows solution

## Project Details features

Implement the 3 tests in `projectDetails.ts`

## How to run in the Sauce Labs cloud

Why would you want to run in a cloud grid like Sauce?

- Automatic videos, logs, screenshots, and analytics
- Ability to scale parallelization
- Ability to run on Windows/Mac and all other browsers
- Ability to run on real mobile devices

### Setup

1. CB TO ADD INSTRUCTIONS FOR HOW TO SETUP SAUCE LABS

Now try to run your tests on Chrome/Safari/Windows/Mac. Use [this](https://saucelabs.com/products/platform-configurator) for help

## Conclusions

WebdriverIO is great for:
- CHRISTIAN TO FILL IN

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
