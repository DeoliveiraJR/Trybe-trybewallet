// ==================================---------COMPONENT [btn-Login]---------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import './FormExpenses.css';
import propTypes from 'prop-types';

class FormExpenses extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[FORM-EXPENSES] - 1.Constructor');
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
    console.log('[FORM-EXPENSES] - 3.ComponentDidMount');
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
    console.log('[FORM-EXPENSES] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    const {
      valueProps,
      descriptionProps,
      currenciesProps,
      onInputChange,
      onButtonClick,
    } = this.props;

    return (
    /* >>>>> component: FORM <<<<< */
      <form className="main-form">
        <label htmlFor="value" className="main-label">
          Valor:
          {/* >>>>> component: INPUT-VALUE <<<<< */}
          <input
            className="input-value"
            name="value"
            data-testid="value-input"
            type="number"
            placeholder="value here"
            value={ valueProps }
            onChange={ onInputChange }
          />
        </label>
        {/* >>>>> component: INPUT-DESCRIPTION <<<<< */}
        <label htmlFor="description" className="main-label">
          Descrição:
          <input
            className="input"
            name="description"
            data-testid="description-input"
            type="text"
            placeholder="descript here"
            value={ descriptionProps }
            onChange={ onInputChange }
          />
        </label>
        { /* >>>>> component: SELECT-CATEGORIES <<<<< */ }
        <label htmlFor="category" className="main-label">
          Categoria:
          <select
            id="category"
            className="select-categories"
            data-testid="tag-input"
            name="category"
            onChange={ onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        { /* >>>>> component: SELECT-METHOD <<<<< */ }
        <label htmlFor="method" className="main-label">
          Método/Pgto:
          <select
            id="method"
            className="select-method"
            data-testid="method-input"
            name="method"
            onChange={ onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de crédito</option>
            <option value="Cartão de Débito">Cartão de débito</option>
          </select>
        </label>
        { /* >>>>> component: SELECT-CURRENCIES <<<<< */ }
        <label htmlFor="moeda" className="main-label">
          Moeda:
          <select
            id="moeda"
            className="select-currency"
            name="currency"
            onChange={ onInputChange }
          >
            { currenciesProps.map(
              (currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  {currency}
                </option>
              ),
            )}
          </select>
        </label>
        <button
          type="button"
          className="main-buttonAdd"
          disabled={ false }
          onClick={ onButtonClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormExpenses.propTypes = {
  valueProps: propTypes.number.isRequired,
  descriptionProps: propTypes.string.isRequired,
  currenciesProps: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onInputChange: propTypes.func.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default FormExpenses;
