import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table, Input, Button, Space,
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const TableGenerator = ({ keys, data }) => {
  const [pageSize, setPageSize] = useState(50);
  const [state, setState] = useState({
    searchText: '',
    searchedColumn: '',
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setState({ searchText: '' });
  };

  let searchInput = null;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) => (state.searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[state.searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
  };

  const rowSelection = {
    getCheckboxProps: (record) => ({ // Column configuration not to be checked
      name: record[keys[0]],
    }),
  };
  const sorter = (a, b) => {
    if (a[keys[0]] < b[keys[0]]) {
      return -1;
    }
    if (a[keys[0]] > b[keys[0]]) {
      return 1;
    }
    return 0;
  };

  const columns = keys.map((key) => ({
    title: key,
    dataIndex: key,
    key,
    ...getColumnSearchProps(key),
    sorter: {
      compare: (a, b) => sorter(a, b),
    },
  }));

  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize,
          showSizeChanger: true,
          onShowSizeChange,
          pageSizeOptions: ['50', '100', '200', String(data.length)],
        }}
        scroll={{ x: '100vw', y: '80vh' }}
        bordered
      />
    </div>
  );
};

TableGenerator.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableGenerator;
