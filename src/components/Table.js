import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Table = ({ data }) => {
  const keys = Object.keys(data[0]);
  const getHead = () => keys.map((key) => <th key={key}>{key}</th>);
  const getBody = () => data.map((row) => (
    /*
         we can't trust any field from metabase to be unique,
         therefore we need to add a unique id to each row to
         be able to use it as a key
    */
    <tr key={uuidv4()}>
      {keys.map((key) => <td key={key}>{row[key]}</td>)}
    </tr>
  ));

  return (
    <table id="table">
      <thead id="thead">
        <tr>{getHead()}</tr>
      </thead>
      <tbody id="tbody">{getBody()}</tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
