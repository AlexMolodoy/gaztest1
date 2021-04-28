import React from 'react';
import * as TYPES from 'prop-types';

import '../App.css';

HeaderText.propTypes = {
  labelText: TYPES.string,
  list: TYPES.array,
  text: TYPES.string,
};

HeaderText.defaultProps = {
  labelText: 'Заголовок любой',
  inputName: [],
  text: '',
};

function HeaderText({ labelText }) {

  return (
    <h1 className='header'>{labelText}</h1>
  );
}

export default HeaderText;