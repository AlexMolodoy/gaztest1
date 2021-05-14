import React from 'react';
import './App.css';
import Element from './components/Element';

const data = [
  {
    header: "Заголовок 1",
    options: [
      "Элемент списка 1",
      "Элемент списка 2",
      "Элемент списка 3",
      "Элемент списка 4",
      "Элемент списка 5",
    ],
    text: "Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1",
  },
  {
    header: "Заголовок 2",
    options: [
      "Элемент списка 1",
      "Элемент списка 2",
      "Элемент списка 3",
    ],
    text: "Какой-то текс 1, Какой-то текс 1, Какой-то текс 1,",
  },
  {
    header: "Заголовок 3",
    options: [
      "Элемент списка 1",
      "Элемент списка 2",
      "Элемент списка 3",
      "Элемент списка 4",
    ],
    text: "Какой-то текс 1, Какой-то текс 1, Какой-то текс 1, Какой-то текс 1,",
  },
]



function App() {

  return (
    <>
      <div className="container">
        {
          data.map((element, index) => {
            return (
              <Element
                key={index}
                labelText={element.header}
                list={element.options}
                text={element.text}
              />);
          })
        }
        </div>
    </>
  );
}

export default App;
