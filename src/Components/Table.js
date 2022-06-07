// ==================================----------COMPONENT [Loading]-----------=============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[TABLE] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:

    // 3- create State {Objeto} :
    // this.state = { };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[TABLE] - 3.ComponentDidMount');
    console.log('------------');
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
    console.log('[TABLE]- Render');
    console.log('---------------');

    const { expensesProps } = this.props;
    console.log(expensesProps);

    return (
      <div className="main-table">
        <table>
          <thead>
            <tr className="main-tr">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {expensesProps.map((expense) => (
              <tr key={ expense.id } className="main-td">
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ (Number(expense.value)).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  { (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
                </td>
                <td>
                  {
                    (
                      (expense.value) * (expense.exchangeRates[expense.currency].ask)
                    ).toFixed(2)
                  }
                </td>
                <td>Real</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expensesProps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Table;
