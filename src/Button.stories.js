import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .addWithJSX('with default background', () => (
  <Button>Default styles</Button>
  ))
  .addWithJSX('with background teal', () => (
    <Button bg="teal">Hola mundo!</Button>
  ));
