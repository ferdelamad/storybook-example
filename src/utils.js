// import { withInfo } from '@storybook/addon-info';

// const styles = {
//   header: {
//     h1: {
//       marginRight: `1.25rem`,
//       fontSize: `1.5rem`,
//       display: `inline`,
//     },
//     body: {
//       paddingTop: 0,
//       paddingBottom: 0,
//     },
//     h2: {
//       display: `inline`,
//       color: `#999`,
//     }
//   },
//   infoBody: {
//     backgroundColor: `#eee`,
//     padding: `0 5px`,
//     lineHeight: `2`,
//   },
// };

// export const customInfo = text =>
//   withInfo({
//     inline: true,
//     source: false,
//     styles,
//     text
//   })

import { withInfo } from '@storybook/addon-info';
const wInfoStyle = {
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
export const wInfo = text =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });
