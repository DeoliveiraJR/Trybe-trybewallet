// =======================================----------PAGE [WALLET]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { fetchDataWallet, fetchCotacoes, deleteExpenses } from '../actions/index';
import Header from '../Components/Header';
import FormExpenses from '../Components/FormExpenses';
import '../Components/Table.css';
import './Wallet.css';
// import { Player } from '@lottiefiles/react-lottie-player';
// import Table from '../Components/Table';

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
    // this.handleDeleteExpense = this.handleDeleteExpense.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      // email: '',
      // id: 0,
      currency: '',
      value: '',
      description: '',
      tag: '',
      method: '',
      subtotal: '',
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
    console.log('----------------');
    const { fetchExpenses, expenses } = this.props;
    const { value, description, tag, method, currency } = this.state;

    const id = expenses.length; // id + 1;
    // console.log(id);

    await fetchExpenses(id, { value, description, tag, method, currency });
    this.setState({
      // id: countId,
      value: '',
      description: '',
      tag: '',
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
    expenses.forEach((element) => {
      // console.log(element);
      const valueExpense = Number(element.value);
      const valueRate = Number(element.exchangeRates[element.currency].ask);
      const valueCurrency = Number(valueExpense * valueRate);
      arrayTotal.push(valueCurrency);
    });
    const newSubtotal = arrayTotal.reduce((acc, num) => acc + Number(num), 0);
    const newSubtotalConvert = Math.floor(newSubtotal * 100) / 100;

    this.setState({
      subtotal: newSubtotalConvert,
    });
  }

  /* handleDeleteExpense(id) {
    console.log('handleDeleteExpense [Part-1]');
    console.log('---------------');
    const { dispatch, testingDelete } = this.props;
    console.log(id);
    // dispatch(deleteExpenses(id));
    testingDelete(id)
    // console.log(id);
  } */

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[WALLET] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { email, currencies, expenses, testingDelete } = this.props;
    const { value, description, tag, method, subtotal } = this.state;
    // console.log(this.props);

    return (
      <>
        <div>
          <Header
            email={ email }
            subtotalProps={ Number(subtotal).toFixed(2) }
          />
          <FormExpenses
            valueProps={ Number(value) }
            descriptionProps={ description }
            categoryProps={ tag }
            methodProps={ method }
            currenciesProps={ currencies }
            onInputChange={ this.handleOnChange }
            onButtonClick={ this.handleClick }
          />
        </div>
        <div className="main-tableExpenses">
          <table className="main-table">
            <tr className="main-tr">
              <th className="celulasCollumns">Descrição</th>
              <th className="celulasCollumns">Tag</th>
              <th className="celulasCollumns">Método de pagamento</th>
              <th className="celulasCollumns">Valor</th>
              <th className="celulasCollumns">Moeda</th>
              <th className="celulasCollumns">Câmbio utilizado</th>
              <th className="celulasCollumns">Valor convertido</th>
              <th className="celulasCollumns">Moeda de conversão</th>
              <th className="celulasCollumns">Editar/Excluir</th>
            </tr>
            {expenses.map((expense) => (
              <tr key={ expense.id } className="main-td">
                <td className="celulasRow">{ expense.description }</td>
                <td className="celulasRow">{ expense.tag }</td>
                <td className="celulasRow">{ expense.method }</td>
                <td className="celulasRow">{ (Number(expense.value)).toFixed(2) }</td>
                <td className="celulasRow">
                  { expense.exchangeRates[expense.currency].name }
                </td>
                <td className="celulasRow">
                  { (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
                </td>
                <td className="celulasRow">
                  {
                    (
                      (expense.value) * (expense.exchangeRates[expense.currency].ask)
                    ).toFixed(2)
                  }
                </td>
                <td className="celulasRow">Real</td>
                <td className="container-buttons">
                  <button
                    type="button"
                    className="main-buttonEdit"
                    data-testid="delete-btn"
                    disabled={ false }
                    onClick={ () => {} }
                  >
                    <FontAwesomeIcon
                      icon={ faEdit }
                      className="icon-edit"
                    />
                  </button>
                  <button
                    type="button"
                    className="main-buttonDelete"
                    data-testid="delete-btn"
                    disabled={ false }
                    onClick={ () => testingDelete(expense.id) }
                  >
                    <FontAwesomeIcon
                      icon={ faTrashAlt }
                      className="icon-trash"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencys: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  testingDelete: PropTypes.func.isRequired,
  // subtotalProps: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencys: () => dispatch(fetchDataWallet()),
  fetchExpenses: (id, expenses) => dispatch(fetchCotacoes(id, expenses)),
  testingDelete: (id) => dispatch(deleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
