import React from "react";
import { render, Box, Text, Color } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import open from "open";
import data from "./data";

const user = "epilande";

const App = () => {
  const [query, setQuery] = React.useState("");
  const items = [...data, { label: "Exit", value: "" }].filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
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
          Find <Color green>{user}</Color> on:{" "}
          <TextInput value={query} onChange={text => setQuery(text)} />
        </Text>
      </Box>

      <SelectInput
        items={items}
        onSelect={item => {
          if (item.value) {
            open(item.value as string);
          }
          process.exit();
        }}
      />
    </Box>
  );
};

const renderApp = () => render(<App />);

const renderErr = (sites: string[]) =>
  render(
    <Text>
      Doh! Nothing came up for <Color green>{user}</Color> on{" "}
      <Color red>{sites.join(", ")}</Color>...
    </Text>,
  );

export { renderApp, renderErr, data };
