import React, { useState } from 'react';

const Child = () => {
  const data = [
    { id: 1, name: 'Prem', age: 31 },
    { id: 2, name: 'Shweta', age: 30 },
    { id: 3, name: 'Prachi', age: 35 },
    { id: 4, name: 'Aaradhya', age: 10 },
    { id: 5, name: 'Yogini', age: 14 },
  ];

  const [toggleAge, setShowAge] = useState(false);

  const showAge = () => {
    setShowAge(!toggleAge);
  };

  return (
    <div>
      <span>
        {data.map((item) => {
          return (
            <div>
              <span>{item.name}</span>
              {toggleAge ? <span>{item.age}</span> : ''}
            </div>
          );
        })}
      </span>
      <button
        onClick={() => {
          showAge();
        }}
      >
        Show Age
      </button>
    </div>
  );
};
export default Child;
