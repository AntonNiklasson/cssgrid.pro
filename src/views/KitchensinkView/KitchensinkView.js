import React from 'react';
import glamorous from 'glamorous';
import Button from '../../components/Button';

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const InvertedBackground = glamorous.div(({ theme }) => ({
  padding: '2em',
  background: theme.colors.grayDark,
}));

const KitchensinkView = () => (
  <Wrapper>
    <Button>Button</Button>
    <Button primary>Button</Button>
    <InvertedBackground>
      <Button inverted>Button</Button>
    </InvertedBackground>
    <Button large>Button</Button>
    <Button disabled>Button</Button>
  </Wrapper>
);

export default KitchensinkView;
