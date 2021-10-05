import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ updateData }) => {
  const onReaderLoad = (event) => {
    const data = JSON.parse(event.target.result);
    updateData({
      data: data.map((item) => ({
        ...item, key: uuidv4(),
      })),
      keys: Object.keys(data[0]),
    });
  };
  const inputChangeHandler = (event) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };
  return <input onChange={inputChangeHandler} id="file" type="file" />;
};

Input.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default Input;
