import React from 'react'
import glamorous from 'glamorous'
import StylesEditor from './StylesEditor'
import MarkupEditor from './MarkupEditor'
import Output from './Output'
import {
  toString as stringifyStyleTree,
  update as updateStyleTree,
} from '../../utils/styletree'

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
})
const Editors = glamorous.div({
  flex: 1,
  display: 'flex',
  overflow: 'scroll-y',
})
const OutputContainer = glamorous.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  overflowY: 'auto',
  borderTop: `2px solid ${theme.colors.gray}`,
}))

class Challenge extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markup: this.props.markup,
      styles: this.props.styles,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markup: nextProps.markup,
      styles: nextProps.styles,
    })
  }

  onInputChange = (selector, property, value) => {
    const styles = updateStyleTree(
      { ...this.state.styles },
      selector,
      property,
      value
    )

    this.props.onStylesChanged(styles)
  }

  render() {
    const { markup, styles } = this.state

    if (!markup || !styles) return null

    return (
      <Wrapper>
        <Editors>
          <StylesEditor styles={styles} onChange={this.onInputChange} />
          <MarkupEditor markup={markup} />
        </Editors>
        <OutputContainer>
          <Output markup={markup}>Output</Output>
        </OutputContainer>
        <style>{stringifyStyleTree(styles)}</style>
      </Wrapper>
    )
  }
}

export default Challenge
