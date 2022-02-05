module.exports = {
  stories: ['../src/**/*.stories.(js|jsx)','../src/**/stories.(js|jsx)'],
  // registers the installed addons(registration order matters)
  addons: [
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-notes',
  ],

};
