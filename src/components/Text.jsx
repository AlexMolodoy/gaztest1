import React from 'react';
import * as TYPES from 'prop-types';

import '../App.css';

Element.propTypes = {
  labelText: TYPES.string,
  list: TYPES.array,
  text: TYPES.string,
};

Element.defaultProps = {
  labelText: 'Заголовок любой',
  inputName: [],
  text: '',
};

function Text({ text }) {

  return (
    <span className='text'>{text}</span>
  );
}

export default Text;