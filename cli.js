#!/usr/bin/env node

const meow = require("meow");

const cli = meow(
  `
  Usage: 
    $ epilande <options>

  Options:
    --open, -o      Open site(s)
    --help, -h      Displays this message
    --version, -v   CLI Version

  Examples:
    $ epilande
    $ epilande --open=github,codepen
`,
  {
    flags: {
      open: {
        type: "string",
        alias: "o",
      },
      help: {
        type: "boolean",
        alias: "h",
      },
      version: {
        type: "boolean",
        alias: "v",
      },
    },
  },
);

console.log("cli", cli);

require("./dist/index");
