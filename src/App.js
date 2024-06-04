import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, removeName } from './Store/namesSlice';

function App() {
  const [name, setName] = useState('');
  const names = useSelector((state) => state.names.names);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (name) {
      dispatch(addName(name));
      setName('');
    }
  };

  const handleRemoveName = (nameToRemove) => {
    dispatch(removeName(nameToRemove));
  };

  return (
    <div>
      <h1>Список имён</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Добавить имя</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} <button onClick={() => handleRemoveName(name)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;