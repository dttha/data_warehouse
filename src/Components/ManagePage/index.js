/* eslint-disable no-undef */
import React from 'react';
import './index.css';
import { Layout, Menu } from 'antd';
import {
    BarChartOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './data';

const { Sider, Content } = Layout;

const dataSourceSettings = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData,
    expandAll: true,
    filters: [],
    filterSettings: [{ name: 'Country', type: 'Exclude', items: ['United States'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    // columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
};
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
                    <PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>
                </Content>
            </Layout>
        </Layout>
    );
}

