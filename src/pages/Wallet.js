// =======================================----------PAGE [WALLET]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataWallet, fetchCotacoes } from '../actions/index';
import Header from '../Components/Header';
import FormExpenses from '../Components/FormExpenses';
import Table from '../Components/Table';
// import './Wallet.css';
// import '../Components/Header.css';
// import '../Components/FormExpenses.css';

class Wallet extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE-------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[WALLET] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubtotal = this.handleSubtotal.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      // email: '',
      id: 0,
      currency: '',
      value: '',
      description: '',
      category: '',
      method: '',
      subtotal: Number(0).toFixed(2),
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[WALLET] - 3.ComponentDidMount');
    console.log('------------');
    const { fetchCurrencys } = this.props;

    fetchCurrencys();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function...
  handleOnChange(event) {
    console.log('handleOnchange');
    console.log('-------------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    });
  }

  // =====------FUNCTION------=====
  // describe function: this function...
  async handleClick() {
    console.log('handleClick');
    console.log('---------------');
    const { fetchExpenses } = this.props;
    const { id, value, description, category, method, currency } = this.state;

    const countId = id + 1;

    await fetchExpenses({ countId, value, description, category, method, currency });
    this.setState({
      id: countId,
      value: '',
      description: '',
      category: '',
      method: '',
      currency: '',
      subtotal: '',
    });

    this.handleSubtotal();
  }

  handleSubtotal() {
    console.log('handleSubtotal');
    console.log('---------------');
    const { expenses } = this.props;
    // console.log(expenses);
    const arrayTotal = [];
    const pushExpenses = expenses.forEach((element) => {
      console.log(element);
      const valueExpense = Number(element.value);
      const valueRate = Number(element.exchangeRates[element.currency].ask);
      const valueCurrency = Number(valueExpense * valueRate).toFixed(2);
      arrayTotal.push(valueCurrency);
    });
    console.log(pushExpenses);
    const newSubtotal = arrayTotal.reduce((acc, num) => acc + Number(num), 0);
    this.setState({
      subtotal: newSubtotal,
    });
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[WALLET] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { email, currencies } = this.props;
    const { value, description, category, method, subtotal } = this.state;

    return (
      <>
        <Header
          email={ email }
          subtotalProps={ Number(subtotal).toFixed(2) }
        />
        <FormExpenses
          valueProps={ Number(value) }
          descriptionProps={ description }
          categoryProps={ category }
          methodProps={ method }
          currenciesProps={ currencies }
          onInputChange={ this.handleOnChange }
          onButtonClick={ this.handleClick }
        />
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // subtotalProps: PropTypes.number.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fetchCurrencys: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencys: () => dispatch(fetchDataWallet()),
  fetchExpenses: (id, expenses) => dispatch(fetchCotacoes(id, expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
