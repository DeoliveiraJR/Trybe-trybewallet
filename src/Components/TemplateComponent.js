// Modelo default de Template para criação de componentes:
import React from 'react';
// import propTypes from 'prop-types';

class TemplateComponent extends React.Component {
  // =============================================================
  // ==========---------BLOCO DO CONSTRUCTOR------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[COMPONENT] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    // this.handleFunction = this.handleFunction.bind(this);

    // 3- create State {Objeto} :
    /* this.state = {
      state1: '',
    }; */
  }

  // =============================================================
  // ==========--------BLOCO componentDidMount---------==========
  // =============================================================
  componentDidMount() {
    console.log('[COMPONENT] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========--------BLOCO Handlers Functions---------==========
  // =============================================================

  // ====----FUNCTION ----====
  // describe function:
  handleFunction() {
    console.log('handleFunction [Part-1]');
    console.log('---------------');
  }

  // =============================================================
  // ==========---------BLOCO de RENDERIZAÇÃO ()--------==========
  // =============================================================
  render() {
    console.log('RENDER [COMPONENT]');
    console.log('---------------');

    // ====Desctructing Objects=====
    // const { state1 } = this.props;
    // const { state1 } = this.state;

    return (
      <div>
        { /* componente - Form */ }
        <form>
          { /* componente 1 - Input type Name */ }
          <label htmlFor="Name">
            Name
            <input
              id="Id"
              name="Name"
              data-testid="name-input"
              type="text"
              placeholder="text here"
              value={ Name }
              onChange={ onInputChange } /* campo para função onChange */
            />
          </label>
          { /* componente 2 - Input type TextArea */ }
          <label htmlFor="Description">
            Description
            <input
              Id="Id"
              name="Description"
              data-testid="description-input"
              type="textArea"
              placeholder="text here"
              value={ Description }
              onChange={ onInputChange } /* campo para função onChange */
            />
          </label>
          { /* componente 3 - Input type Image */ }
          <image
            name="Image"
            data-testid="image-input"
            src=""
            alt=""
          />
          { /* componente 5 - Input type Select */ }
          <label htmlFor="select">
            Select
            <select
              data-testid="select-input"
              name="select"
              value={ select }
              onChange={ select } /* campo para função onChange */
            >
              <option value="option 1" defaultValue>option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
            </select>
          </label>
          { /* componente 5 - Input type CheckBox */ }
          <label htmlFor="checkbox">
            checkbox
            <input
              name="checkbox"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ false }
              onChange={ onChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ false } /* habilita/desabilita button */
            onClick={ onButtonClick } /* prop para função onClick */
          >
            Button
          </button>
        </form>
      </div>
    );
  }
}

/*
TemplateComponent.propTypes = {
  props1: propTypes.string.isRequired,
  props1: propTypes.bool.isRequired,
  props1: propTypes.func.isRequired,
  props1: propTypes.func.isRequired,
};
 */

export default TemplateComponent;
