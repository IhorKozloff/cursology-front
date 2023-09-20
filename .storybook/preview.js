import '../src/index.css'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'customColor',
    values: [
      {
        name: 'customColor',
        value: '#385EC1',
      },
    ],
  },
}