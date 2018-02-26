import styled from 'styled-components';

const Input = styled.input`
    width: 502px;
    padding: 0.4em;
    font-size: 40px;
    word-wrap: break-word;
    line-height: 1em;
    outline: 0;
    white-space: normal;
    min-height: 2em;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
`;

// const Input = glamorous.input(
//     {
//       width: 'calc(100% - 16px)', // full width - icon width/2 - border
//       fontSize: 14,
//       wordWrap: 'break-word',
//       lineHeight: '1em',
//       outline: 0,
//       whiteSpace: 'normal',
//       minHeight: '2em',
//       background: '#fff',
//       display: 'inline-block',
//       padding: '.5em 2em .5em 1em',
//       color: 'rgba(0,0,0,.87)',
//       boxShadow: 'none',
//       border: '1px solid rgba(34,36,38,.15)',
//       borderRadius: '.30rem',
//       transition: 'box-shadow .1s ease,width .1s ease',
//       ':hover': {
//         borderColor: 'rgba(34,36,38,.35)',
//         boxShadow: 'none',
//       },
//       [onAttention]: {
//         borderColor: '#96c8da',
//         boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
//       },
//     },
//     ({isOpen}) =>
//       isOpen
//         ? {
//             borderBottomLeftRadius: '0',
//             borderBottomRightRadius: '0',
//           }
//         : null,
//   )
  

export default Input;