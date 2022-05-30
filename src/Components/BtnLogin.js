// ==================================---------COMPONENT [btn-Login]---------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';

class BtnLogin extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[BTNLOGIN] - 1.Constructor');
    console.log('-----------');
    super();

    // 2- 'binding' functions:
    // this.handleBtnDisable = this.handleBtnDisable.bind(this);

    // 3- create State inicial {Objeto} :
    // this.state = { };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[BTNLOGIN] - 3.ComponentDidMount');
    console.log('------------');
    // this.handleBtnDisable();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----====
  // describe function:
  handleFunction() {
    console.log('handleFunction [Part-1]');
    console.log('---------------');
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[BTNLOGIN] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    const { statusBtn, onClickButton } = this.props;

    return (
      <button
        data-testid=""
        type="button"
        disabled={ statusBtn }
        onClick={ onClickButton }
      >
        Entrar
      </button>
    );
  }
}

BtnLogin.propTypes = {
  statusBtn: propTypes.bool.isRequired,
  onClickButton: propTypes.func.isRequired,
};

export default BtnLogin;
