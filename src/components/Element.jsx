import React from 'react';
import * as TYPES from 'prop-types';

import '../App.css';
import HeaderText from './HeaderText.jsx';
import List from './List.jsx';
import Text from './Text.jsx';

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


function Element({ labelText, list, text }) {

  return (
    <>
      <div className="element">
        <HeaderText labelText={labelText}/>
        <List list={list}/>
        <Text text={text}/>
      </div>
    </>
  );
}

export default Element;