import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
setAddon(JSXAddon);
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcome');
  req.keys().forEach(req)
}

configure(loadStories, module);
