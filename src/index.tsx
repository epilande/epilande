import React from "react";
import { render, Box, Text, Color } from "ink";
import data from "./data";

const renderApp = () =>
  render(
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text>
          Hello World! <Color green>epilande</Color>
        </Text>
      </Box>
    </Box>,
  );

const renderErr = (sites: string[]) =>
  render(
    <Text>
      Doh! Nothing came up for <Color red>{sites.join(", ")}</Color>...
    </Text>,
  );

export { renderApp, renderErr, data };
