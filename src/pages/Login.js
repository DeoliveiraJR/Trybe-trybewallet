// =======================================----------PAGE [LOGIN]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BtnLogin from '../Components/BtnLogin';
import Loading from '../Components/Loading';
import { getEmailAndLogin } from '../store/actions/index';
// import './Login.css';

class Login extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[LOGIN] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleValidateBtnDisable = this.handleValidateBtnDisable.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      email: '',
      password: '',
      statusBtn: true,
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[LOGIN] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function receive an event onChange on input and setState:
  handleOnChange(event) {
    console.log('handleOnchange');
    console.log('---------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    }, () => {
      this.handleValidateBtnDisable();
    });
  }

  // ====----FUNCTION 2----====
  // describe function: this function receive an event onClick on btn-Login and setState:
  handleClick(email) {
    console.log('handleClick [Part-1]');
    console.log('--------------');
    const { dispatch, history } = this.props;

    // 1. dispatch to state:
    dispatch(getEmailAndLogin(email));

    // 2. redirect to page 'search';
    history.push('/carteira');
  }

  // ====----FUNCTION 3----====
  // describe function: this function validate logic to disable 'btn-Login' and change state if necessary:
  handleValidateBtnDisable() {
    console.log('handleBtnDisable');
    console.log('------------');

    const { email, password } = this.state;
    // const MIN_LENGHT_EMAIL = 0;
    const MIN_LENGHT_PASSWORD = 6;

    if (
      email.includes('@email.com')
      && password.length >= MIN_LENGHT_PASSWORD
    ) {
      this.setState({ statusBtn: false });
    } else {
      this.setState({ statusBtn: true });
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[LOGIN] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { email, statusBtn, loading } = this.state;

    return (
      <div data-testid="page-login">
        { loading ? (
          <Loading />
        ) : (
          <div>
            <img src="" alt="Logo TrybeWallet" />
            <form>

              {/* componente 1 - input username */}
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  data-testid="email-input"
                  placeholder="digite seu usuário"
                  onChange={ this.handleOnChange }
                />
              </label>

              {/* componente 2 - input password */}
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  data-testid="password-input"
                  placeholder="digite seu usuário"
                  onChange={ this.handleOnChange }
                />
              </label>

              {/* componente 2 - btn Login */}
              <BtnLogin
                statusBtn={ statusBtn }
                onClickButton={ () => this.handleClick(email) }
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
