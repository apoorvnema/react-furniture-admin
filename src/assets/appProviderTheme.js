import theme from "./theme";

const appProviderTheme = {
    ...theme,
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
  };

export default appProviderTheme;