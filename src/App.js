import { useState } from 'react';
import Input from './components/Input';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [data, setData] = useState([{
    id: 'task',
    name: 'Select a JSON file to update the table',
  }]);

  return (
    <div id="root">
      <Input setData={setData} />
      <Table data={data} />
    </div>
  );
};

export default App;
