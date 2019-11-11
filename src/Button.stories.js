import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 5px',
    lineHeight: '2',
  },
};

storiesOf('Button', module)
  .addWithJSX(
    'with default background',
    () => <Button>Default styles</Button>,
    { info: {
      text:`
      description

      ~~~js
      <Button>Sample button</Button>
      ~~~`,
      style
    }}
  )
  .addWithJSX('with background teal', () => (
    <Button bg="teal">Hola mundo!</Button>
  ));

//Me quede en el modulo 6
