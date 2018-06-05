import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../App.css';
import { Table, Button } from 'antd';
import 'rc-table/assets/index.css';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

if(data.length === 0){
    data.push({
        a: '暂无数据',
    })
}

class Home extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <Table rowKey={record => record.key} rowSelection={rowSelection} columns={columns} dataSource={data} />
        );
    }
}

export default Home;
