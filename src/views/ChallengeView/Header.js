import glamorous from 'glamorous'

const Header = glamorous('div', { displayName: 'Header' })(({ theme }) => ({
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1em',

  background: theme.colors.grayDarker,
  fontSize: '20px',
  color: 'whitesmoke',
  userSelect: 'none',
  '& h1': {
    margin: '0 0 .2em 0',
    fontSize: '1.5em',
    fontFamily: `'Source Code Pro', 'Roboto', Arial, sans-serif`,
  },
}))

export default Header
