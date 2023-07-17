import React, { useCallback, useState } from 'react';
import { Select, Table, Switch, Typography } from 'antd';
import { ColumnType } from 'antd/es/table';


interface DataType {
    key: string;
    id: string;
    name: string;
    edition: string;
    architecture: string;
    description: string;
    option: boolean;
}
const valueEumarr = [
    { text: 'v1.0.0', value: 'v1.0.0' },
    { text: 'v2.0.0', value: 'v2.0.0' },
    { text: 'v3.0.0', value: 'v3.0.0' },
    { text: 'v4.0.0', value: 'v4.0.0' },
];

const dataSource: DataType[] = [
    {
        key: '1',
        id: 'component1',
        name: '组件名称1',
        edition: 'v1.0.0',
        architecture: '',
        description: '',
        option: true
    },
    {
        key: '2',
        id: 'component2',
        name: '组件名称2',
        edition: 'v1.0.0',
        architecture: '',
        description: '',
        option: true
    },
    {
        key: '3',
        id: 'component3',
        name: '组件名称3',
        edition: 'v1.0.0',
        architecture: '',
        description: '',
        option: true
    },
    {
        key: '4',
        id: 'component4',
        name: '组件名称4',
        edition: 'v1.0.0',
        architecture: '',
        description: '',
        option: false
    },
];

export const Step2: React.FC = () => {
    const columns: ColumnType<DataType>[] = [
        {
            title: '组件ID',
            dataIndex: 'id',
            width: '15%'
        },
        {
            title: '组件名称',
            dataIndex: 'name',
            width: '15%'
        },
        {
            title: '组件版本',
            dataIndex: 'edition',
            render: (text: string, record: DataType) => {
                if (record.option) {
                    return (
                        <Select
                            value={text}
                            onChange={(value) => handleSelectChange(value, record.key)}
                            style={{ width: '100px' }}
                        >
                            {
                                valueEumarr.map((item) => (
                                    <Select.Option key={item.value} value={item.value} >
                                        {item.text}
                                    </Select.Option>
                                ))
                            }
                        </Select>
                    );
                }
                return <span>{record.edition}</span>
            },
            width: '15%'
        },
        {
            title: '架构',
            dataIndex: 'architecture',
            width: '15%'
        },
        {
            title: '版本描述',
            dataIndex: 'description',
            width: '20%'
        },
        {
            title: '操作',
            dataIndex: 'option',
            render: (_, record, index) => (
                <Switch onChange={(text) => handle(text, index)} checkedChildren="开" unCheckedChildren="关" defaultChecked={record.option} />
            ),
            width: '20%'
        },
    ];

    const [data, setData] = useState<DataType[]>(dataSource)
    const handle = useCallback((text: boolean, index: any) => {
        const newDate = [...data];
        newDate[Number(index)].option = text;
        setData(newDate);
    }, []);
    const handleSelectChange = useCallback((value: string, key: string) => {
        const newData = [...data];
        const target = newData.find((item) => item.key === key);
        if (target) {
            target.edition = value;
            setData(newData);
        }
    }, [])
    
    return (
        <>
            <Typography.Text style={{ marginBottom: 5, display: 'block' }}>
                请您选择当前版本需要包含的组件（包括版本和架构），您可以在
                <Typography.Link href='#'>组件管理</Typography.Link>
                模块管理应用组件和构建：
            </Typography.Text>
            <Table columns={columns} dataSource={data} pagination={false} />
        </>
    )
};

