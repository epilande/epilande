import React from "react";
import { render, Box, Text, Color } from "ink";
import SelectInput from "ink-select-input";
import open from "open";
import data from "./data";

const user = "epilande";

const renderApp = () =>
  render(
    <Box flexDirection="column">
      <Text>Hello! I am Emmanuel Pilande.</Text>
      <Box marginBottom={1}>
        <Text>
          You can usually find me on the internet as <Color green>{user}</Color>
          .
        </Text>
      </Box>
      <Box>
        <Text>
          Find <Color green>{user}</Color> on:
        </Text>
      </Box>

      <SelectInput
        items={[
          ...data,
          {
            label: "Exit",
            value: "",
          },
        ]}
        onSelect={item => {
          if (item.value) {
            open(item.value as string);
          }
          process.exit();
        }}
      />
    </Box>,
  );

const renderErr = (sites: string[]) =>
  render(
    <Text>
      Doh! Nothing came up for <Color green>{user}</Color> on{" "}
      <Color red>{sites.join(", ")}</Color>...
    </Text>,
  );

export { renderApp, renderErr, data };
