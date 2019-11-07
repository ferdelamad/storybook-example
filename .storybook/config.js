import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcome');
  req.keys().forEach(req)
}

configure(loadStories, module);
