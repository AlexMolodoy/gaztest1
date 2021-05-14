import React from 'react';
import * as TYPES from 'prop-types';

import '../App.css';

Element.propTypes = {
  list: TYPES.array,
};

Element.defaultProps = {
  list: [],
};

function List({ list }) {

  console.log(list)

  return (
    <ul className="list">
      {list.map((element, index) => {
        return (<li
          key={index}
          >
            {element}
        </li>
      )})}
    </ul>
  );
}

export default List;