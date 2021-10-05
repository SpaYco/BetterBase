import { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Input from './components/Input';
import TableGenerator from './components/TableGenerator';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  const [data, setData] = useState([{
    id: 'task',
    name: 'Select a JSON file to update the table',
  }]);
  const [keys, setKeys] = useState([]);
  const updateData = (params) => {
    setData(params.data);
    setKeys(params.keys);
  };

  return (
    <ThemeProvider theme={{}}>
      <div id="root">
        <Input updateData={updateData} />
        <TableGenerator data={data} keys={keys} />
      </div>
    </ThemeProvider>
  );
};

export default App;
