import React from 'react'
import glamorous from 'glamorous'

const Container = glamorous.div(({ theme }) => ({
  flex: '1 3 500px',
  background: theme.colors.grayLightest,
  color: theme.colors.grayDarkest,
  userSelect: 'none',
  overflow: 'auto',
}))
const ContentWrapper = glamorous.div({
  padding: '1em',
  width: 'auto',
  overflow: 'hidden',
  whiteSpace: 'pre',
  lineHeight: 1.5,
  fontSize: 20,
  fontFamily: '"Source Code Pro", monospace',
})

const MarkupEditor = ({ markup }) => (
  <Container>
    <ContentWrapper>{markup}</ContentWrapper>
  </Container>
)

export default MarkupEditor
