// =======================================----------PAGE [WALLET]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import { fetchDataWallet } from '../actions/index';

class Wallet extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE-------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[HEADER] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    // this.handleFunction = this.handleOnChange.bind(this);

    // 3- create initial-state-component {Object} :
    /* this.state = {
      state1: '',
    }; */
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[HEADER] - 3.ComponentDidMount');
    console.log('------------');
    const { fetchCurrencys } = this.props;

    fetchCurrencys();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function...
  /*
  handleFunction() {
    console.log('handleOnchange');
    console.log('---------------');
 */
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[HEADER] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { email } = this.props;

    return (
      <Header
        email={ email }
      />
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencys: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencys: () => dispatch(fetchDataWallet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
