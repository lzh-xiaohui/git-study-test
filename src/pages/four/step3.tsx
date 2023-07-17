import React, { useCallback, useState } from 'react';
import { Typography, Table, Modal, Descriptions, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType1 {
    key:React.Key;
    id: string;
    name: string;
    type: string;
};

interface DataType2 {
    key: React.Key;
    id: string;
    name: string;
    type: string;
    decription: string;
    count: number;
};

interface DataType3 {
    key: React.Key;
    name: string;
    decription: string;
    type: string;
    connection: string;
}

const columns1: ColumnsType<DataType1> = [
    {
        title: '权益ID',
        dataIndex: 'id',
        width: 200
    },
    {
        title: '权益名称',
        dataIndex: 'name',
        width: 200
    },
    {
        title: '权益类型',
        dataIndex: 'type',
        align: 'left'
    },
];

const columns3: ColumnsType<DataType3> = [
    {
        title: 'API名称',
        dataIndex: 'name',
        width: '50%',
    },
    {
        title: 'API描述',
        dataIndex: 'decription',
    },
    {
        title: '网关类型',
        dataIndex: 'type',
    },
    {
        title: '归属组件',
        dataIndex: 'connection',
    },
];

const data1: DataType1[] = [
    {
        key:'1-1',
        id: 'time_expired',
        name: '过期时间',
        type: '数值型'
    },
    {
        key: '1-2',
        id: 'time_grace',
        name: '宽限时间',
        type: '数值型'
    },
    {
        key: '1-3',
        id: 'cup_count',
        name: 'CPU核心数',
        type: '数值型'
    },
    {
        key: '1-4',
        id: 'app_integrate.count',
        name: '集成应用数量',
        type: '数值型'
    },
]

const data2: DataType2[] = [
    {
        key: '2-1',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
    {
        key: '2-2',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
    {
        key: '2-3',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
    {
        key: '2-4',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
    {
        key: '2-5',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
    {
        key: '2-6',
        id: 'func_id',
        name: '开发能力1',
        type: '企业授权',
        decription: '描述描述描述',
        count: 10
    },
];

const data3: DataType3[] = [
    {
        key: '3-1',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-2',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-3',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-4',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-5',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-6',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-7',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-8',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-9',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-10',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    },
    {
        key: '3-11',
        name: 'kntp://docs-openapi/POST/api/cps/async/v1/decompression',
        decription: '',
        type: '',
        connection: '组件归属1'
    }
];

interface Title {
    title: string;
    msg: string;
    api?: string;
}
const TableHeader: React.FC<Title> = (props) => {
    const { title, msg, api = '去修改' } = props;
    return (
        <div style={{ textAlign: 'left', marginBottom: 5, marginTop: -17 }}>
            <Typography.Title level={5} style={{ borderBottom: '1px solid gray' }}>{title}</Typography.Title>
            <Typography.Text style={{ color: 'gray', marginBottom: 5, fontSize: 2 }}>
                {msg}
                <Typography.Link href='#'>{api}</Typography.Link>
            </Typography.Text>
        </div>
    );
};

export const Step3: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [apiNum, setApiNum] = useState(0);

    const handleOpen = useCallback((index: any) => {
        setApiNum(Number(index));
        console.log(index);
        setOpen(true)
    }, []);

    const columns2: ColumnsType<DataType2> = [
        {
            title: '开发能力ID',
            dataIndex: 'id',
            width: 200
        },
        {
            title: '开发能力名称',
            dataIndex: 'name',
            width: 200
        },
        {
            title: '授权类型',
            dataIndex: 'type',
            width: 150
        },
        {
            title: '描述',
            dataIndex: 'decription',
            width: 300
        },
        {
            title: 'API数量',
            dataIndex: 'count',
            align: 'left',
            render: (text, _, index) => <Typography.Link href='#' onClick={() => handleOpen(index)}>{text}</Typography.Link>
        },
    ]
    return (
        <>
            <Typography.Text>请您检查，确认应用的相关配置信息是否符合预期，若不符合预期可进行调整。</Typography.Text>
            <Table dataSource={data1} columns={columns1} bordered={false} pagination={false} size="small"
                caption={
                    <TableHeader title='应用权限确认' msg='请您确认当前版本的权益配置是否符合预期；可在[应用权益]菜单管理应用配置，'></TableHeader>
                }
            ></Table>
            <Table dataSource={data2} columns={columns2} bordered={false} pagination={false} size="small"
                caption={
                    <TableHeader title='应用开发能力确认' msg='请您确认当前版本的开发能力是否符合预期；可在[开发能力]菜单管理应用配置，'></TableHeader>
                }
            ></Table>
            <TableHeader title='应用配置确认' msg='当前应用声明了接入平台[配置中心]能力，请您确认配置文件是否符合预期；可在[应用配置]菜单管理应用配置，'></TableHeader>

            <Descriptions style={{ marginRight: '40%' }}>
                <Descriptions.Item label='应用配置' labelStyle={{ alignSelf: 'center', color: 'black' }}><Button>预览</Button></Descriptions.Item>
                <Descriptions.Item label='关联配置' labelStyle={{ alignSelf: 'center', color: 'black' }}><Button>预览</Button></Descriptions.Item>
            </Descriptions>

            <Modal
                title={<TableHeader title='开发能力对应的API清单' msg='[开发能力名称] (ID: func_id) 包含的API清单：' api=''></TableHeader>}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                footer={null}
                width={1000}
            >
                <Table dataSource={data3} columns={columns3} bordered pagination={false} size='small'></Table>
            </Modal>
        </>
    )
}