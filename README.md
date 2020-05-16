# Library boilerplate

<p>
  <a href="https://codecov.io/gh/estevanmaito/library-boilerplate"><img src="https://codecov.io/gh/estevanmaito/library-boilerplate/branch/master/graph/badge.svg" alt="codecov" /></a>
  <a href="https://travis-ci.com/github/estevanmaito/library-boilerplate"><img src="https://img.shields.io/travis/estevanmaito/library-boilerplate" alt="Travis (.org)" /></a>
  <a href="https://www.npmjs.com/package/mylibrary-boilerplate"><img src="https://img.shields.io/npm/v/mylibrary-boilerplate" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/library-boilerplate/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/library-boilerplate" alt="MIT License" /></a>
</p>

Multipurpose JavaScript library boilerplate.

✨ **Code quality**

- Prettier, ESLint, Husky, Jest, Codecov

🛠 **Build**

- Babel, Webpack

🤖 **Release Automation**

- semantic-release, Travis CI

📂 **Repository**

- License, Code of Conduct, Issues & Pull requests templates, saved replies, contributing guide

### First step

First configure the repo:

```sh
npm set save-exact true # will fix dependencies version numbers
npm set init-author-name 'Your Name'
npm set init-author-email 'your@email.com'
npm set init-author-url 'yourwebsite.com'
npm set init-license 'MIT'
```

Login to npm from terminal, inside your folder:

```sh
npm adduser # will prompt for your username, password and email
```

This will configure your `authtoken` inside `~/.npmrc`.

If you're building a library, you will need to install and setup [`semantic-release first`](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started). The best option is to install the cli version globally and follow the instruction.

```sh
npm install -g semantic-release-cli

# inside your package folder
semantic-release-cli setup
```

### Developing

This packaged is better developed with Prettier and ESLint editor extensions. I personally use VS Code.

### Commiting code

After `git add`, you probably would `git commit`. This packaged uses standardized commit formating, so, to help you, instead of `git commit` you must use `npm run cz`.

It will ask you some questions and before commiting will run tests and linters. If something goes wrong here, like a failed test, you can fix it, re add (`git add`) and use `npm run cz -- --retry` to retry the last commit you filled, so you don't have to fill it again.

This is very important because the entire build system depends on the wording of commits, eg. a fix or a new feature will generate a new build, that will be released to GitHub and npm.

### Testing

You can test in development with `npm run test:watch` and see the actual coverage % with `npm run test:coverage`. The last will run before your commit is done, automatically

### Lint and formatting

Just like tests, you can lint your code with `npm run lint` (this will be run automatically before you commit, also), and `npm run lint:fix` to automatically fix errors.

It's best to use Prettier and ESLint in your editor too, to catch these errors soon.

### Code coverage

It depends on [Codecov](https://codecov.io/) integration.
