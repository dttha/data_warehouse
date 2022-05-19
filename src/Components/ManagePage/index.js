/* eslint-disable no-undef */
import React from 'react';
import './index.css';
import { Layout, Menu, Table } from 'antd';
import {
    BarChartOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        children: [
            {
                title: 'Tổng giá trị',
                dataIndex: 'total_values',
            },
            {
                title: 'Tổng số lượng',
                dataIndex: 'total_amount',
            },
        ]
    },
    {
        title: 'Address',
        children: [
            {
                title: 'Tổng giá trị',
                dataIndex: 'total_values',
            },
            {
                title: 'Tổng số lượng',
                dataIndex: 'total_amount',
            },
        ]
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        total_values: 32,
        total_amount: 10,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        total_values: 32,
        total_amount: 10,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        total_values: 32,
        total_amount: 10,
        address: 'Sidney No. 1 Lake Park',
    },
];
export default function ManagePage() {

    return (
        <Layout>
            <Sider>
                <div className="logo">aaa</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <BarChartOutlined />,
                            label: 'Sale Cubes',
                        },
                        {
                            key: '2',
                            icon: <PieChartOutlined />,
                            label: 'Kho Cubes',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Table columns={columns} dataSource={data} size="middle" />
                </Content>
            </Layout>
        </Layout>
    );
}

