import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module).add('with default background', () => (
  <Button>Default styles</Button>
));

storiesOf('Button', module).add('with background teal', () => (
  <Button bg="teal">Hola mundo!</Button>
));
