import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Input = ({ updateData }) => {
  const [name, setName] = useState('Select a file');
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
    setName(event.target.value.replace(/.*[/\\]/, ''));
  };
  return (
    <div className="upload-button">
      <Button type="primary" shape="round" icon={<UploadOutlined />} size="large" style={{ width: '100%', cursor: 'pointer' }}>
        {name}
      </Button>
      <input onChange={inputChangeHandler} id="file" type="file" />
    </div>
  );
};

Input.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default Input;
