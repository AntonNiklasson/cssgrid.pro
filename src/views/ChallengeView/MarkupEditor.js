import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(({ theme }) => ({
  flex: 1,
  background: theme.colors.grayLightest,
  padding: '2em',
  fontSize: 20,
  color: theme.colors.grayDarkest,
  userSelect: 'none',
  lineHeight: 1.5,
  overflowY: 'auto',
}));

const StylesEditor = ({ markup }) => (
  <Container>
    <pre>{markup}</pre>
  </Container>
);

export default StylesEditor;
