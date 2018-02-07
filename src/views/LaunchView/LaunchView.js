import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isEmail } from '../../utils';
import SubmitButton from './SubmitButton';
import Spinner from './Spinner';
import Checkmark from './Checkmark';

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
const Form = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '6em 0',
});
const InputContainer = glamorous.div({
  width: '100%',
  minWidth: 400,
  maxWidth: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 0 2em 0',
  borderBottom: '1px solid #CCC',

  '& input': {
    flex: 1,
    fontSize: '23px',
    border: 'none',
    padding: '0.3em',
    ':focus': {
      outline: 'none',
    },
  },
});

class LaunchView extends Component {
  state = {
    email: '',
    valid: false,
    submitting: false,
    submitSuccess: false,
  };

  handleEmailChange = evt => {
    const email = evt.target.value;
    const valid = isEmail(email);

    this.setState({ email, valid, submitSuccess: false });
  };

  handleSubmit = () => {
    this.setState({ submitting: true });

    setTimeout(() => {
      this.setState({ submitting: false, submitSuccess: true });
    }, 2000);
  };

  render() {
    const { email, valid, submitting, submitSuccess } = this.state;

    return (
      <Wrapper>
        <h1>You wanna learn CSS Grid?</h1>

        <Form>
          <InputContainer>
            <input
              onChange={this.handleEmailChange}
              type="email"
              placeholder="you@domain.com"
              value={email}
              autoFocus
              disabled={submitting}
            />
            {submitting && !submitSuccess && <Spinner />}
            {submitSuccess && <Checkmark />}
          </InputContainer>
          <SubmitButton visible={valid} onClick={this.handleSubmit} />
        </Form>
      </Wrapper>
    );
  }
}

export default LaunchView;
