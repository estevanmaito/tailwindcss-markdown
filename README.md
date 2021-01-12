# Tailwind CSS Markdown

<p>
  <a href="https://codecov.io/gh/estevanmaito/tailwindcss-markdown"><img src="https://codecov.io/gh/estevanmaito/tailwindcss-markdown/branch/master/graph/badge.svg" alt="codecov" /></a>
  <a href="https://travis-ci.com/github/estevanmaito/tailwindcss-markdown"><img src="https://img.shields.io/travis/estevanmaito/tailwindcss-markdown" alt="Travis (.org)" /></a>
  <a href="https://www.npmjs.com/package/mytailwindcss-markdown"><img src="https://img.shields.io/npm/v/tailwindcss-markdown" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/tailwindcss-markdown/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/tailwindcss-markdown" alt="MIT License" /></a>
</p>

A plugin to style Markdown. Right now it uses the default Tailwind CSS website styles, but it will soon be available as a customizable theme.

## Install

```sh
npm install tailwindcss-markdown
```

In `tailwind.config.js`:

`plugin: [require('tailwindcss-markdown')]`

Then add .markdown class to an element containing markdown to apply the styles.

TODO:

- [ ] Customize root element class
- [ ] Make styles extensible and user configurable
