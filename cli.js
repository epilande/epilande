#!/usr/bin/env node

const meow = require("meow");
const open = require("open");
const { renderApp, renderErr, data } = require("./dist/index");

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

const { open: openArgs } = cli.flags;

if (openArgs) {
  const sites = openArgs.split(",");
  const unavailable = [];

  sites.forEach(site => {
    if (site) {
      const result = data.find(
        d => d.label.toLowerCase() === site.toLowerCase(),
      );
      if (result) {
        open(result.value);
      } else {
        unavailable.push(site);
      }
    }
  });

  if (unavailable.length > 0) {
    renderErr(unavailable);
  }
} else {
  renderApp();
}
