// ==================================----------COMPONENT [Header]-----------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import iconsWallet1 from '../imagens/iconsWallet1.png';
import iconsWallet2 from '../imagens/iconsWallet2.png';
import './Header.css';

class Header extends React.Component {
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[HEADER] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' nas funções:
    // this.handleFetchGetUser = this.handleFetchGetUser.bind(this);

    // 3- create State inicial {Objeto} :
    /* this.state = {
    }; */
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[HEADER] - 3.ComponentDidMount');
    console.log('------------');
    this.handleFetchGetUser();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----====
  // describe function:
  handleFetchGetUser() {
    console.log('handleFetchGetUser [Part-1]');
    console.log('---------------');
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[HEADER] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    const { email } = this.props;

    return (
      <header className="main-header">
        <div className="main-container">
          <img src={ iconsWallet1 } alt="wallet-icon" className="main-img" />
          <img src={ iconsWallet2 } alt="wallet-icon" className="main-img" />
          <img src={ iconsWallet1 } alt="wallet-icon" className="main-img" />
        </div>
        <span className="main-span">
          <p data-testid="email-field" className="title">
            <b className="title-bold"> email: </b>
            {email}
          </p>
          <p data-testid="total-field" className="title">
            <b className="title-bold"> | Valor total R$: | </b>
            0.00
          </p>
          <p data-testid="header-currency-field" className="title"><b>BRL</b></p>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
