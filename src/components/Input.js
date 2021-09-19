import PropTypes from 'prop-types';

const Input = ({ setData }) => {
  const onReaderLoad = (event) => {
    const data = JSON.parse(event.target.result);
    setData(data);
  };
  const inputChangeHandler = (event) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };
  return <input onChange={inputChangeHandler} id="file" type="file" />;
};

Input.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default Input;
