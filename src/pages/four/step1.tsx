import {
    EditableFormInstance,
    ProColumns,
    EditableProTable,
    ProForm,
    ProFormInstance,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import { Typography } from 'antd';
import { useRef, useState } from 'react';

type DataSourceType = {
    id: React.Key;
    title?: string;
    state?: string;
    name?: string;
    type?: string;
};

const defaultData: DataSourceType[] = [
    {
        id: '624748504',
        title: '云文档',
        name: 'com.kingsoft.wpsyun',
        state: '等于',
        type: 'v7.0.2306'
    },
    {
        id: '624748503',
        title: '文档中台',
        name: 'com.kingsoft.opendoc',
        state: '大于等于',
        type: 'v7.0.2306'
    },
];

export const Step1: React.FC = () => {
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
    const formRef = useRef<ProFormInstance<any>>();
    const editorFormRef = useRef<EditableFormInstance<DataSourceType>>();

    const columns: ProColumns<DataSourceType>[] = [
        {
            title: '应用名称',
            dataIndex: 'title',
            valueType: 'select',
            valueEnum: {
                0: { text: '云文档' },
                1: { text: '文档中台' },
                2: { text: '金山协作' },
                3: { text: '金山wps' },
            },
            width: '20%',
        },
        {
            title: '应用包名',
            dataIndex: 'name',
            width: '30%'
        },
        {
            title: '逻辑条件',
            dataIndex: 'state',
            valueType: 'select',
            valueEnum: {
                0: { text: '等于' },
                1: { text: '大于等于' }
            },
            width: '20%',
        },
        {
            title: '应用版本',
            dataIndex: 'type',
            valueType: 'select',
            valueEnum: {
                0: { text: 'v7.0.2305' },
                1: { text: 'v7.02605' }
            },
            width: '20%',
        },
        {
            title: '操作',
            valueType: 'option',
            width: '10%',
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </a>,
                <a
                    key="delete"
                    onClick={() => {
                        const tableDataSource = formRef.current?.getFieldValue(
                            'table',
                        ) as DataSourceType[];
                        formRef.current?.setFieldsValue({
                            table: tableDataSource.filter((item) => item.id !== record.id),
                        });
                    }}
                >
                    删除
                </a>,
            ],
        },
    ];

    return (
        <>
            <ProForm<{
                name: string;
                table: DataSourceType[];
            }>
                // submitter={false}
                layout='horizontal'
                onFinish={async (values) => {
                    // console.log(values);
                    console.log(formRef.current?.getFieldFormatValue?.());
                }}
                grid
                formRef={formRef}
                initialValues={{
                    table: defaultData,
                    bagType: '全量包'

                }}
            >
                <ProForm.Group
                    title={
                        <div style={{ textAlign: 'left', marginBottom: 5, marginTop: -17 }}>
                            <Typography.Title level={5} style={{ borderBottom: '1px solid gray' }}>基础配置</Typography.Title>
                            <Typography.Text style={{ color: 'gray', marginBottom: 5, fontSize: 2, fontWeight: 'normal' }}>
                                请您维护版本基本信息：
                            </Typography.Text>
                        </div>
                    }
                >
                    <ProFormText
                        name='baseID'
                        label="版本编号"
                        colProps={{
                            span: 8
                        }}
                    />
                    <ProFormSelect
                        name='baseType'
                        colProps={{
                            span: 5
                        }}
                        label="发布架构"
                        valueEnum={{
                            1: 'X86',
                            2: 'arm',
                        }}
                    />
                    <ProFormSelect
                        name='bagType'
                        colProps={{
                            span: 5,
                        }}
                        disabled
                        label="安装包类型"
                        valueEnum={{
                            1: { text: '全量包', status: 'default' },
                            2: { text: '增量包', status: 'add' },
                        }}
                    />
                    <ProFormText
                        name='baseDescrition'
                        label="版本描述"
                        placeholder="请填写版本描述信息"
                        colProps={{
                            span: 18
                        }}
                    />
                    <ProFormText
                        name='baseOut'
                        label="兼容声明"
                        width={'md'}
                        placeholder="请填写版本权益兼容声明"
                        addonAfter={<Typography.Link href='#'>权益兼容配置声明</Typography.Link>}
                    />
                </ProForm.Group>
                <ProForm.Group
                    title={
                        <div>
                            <Typography.Title level={5}>
                                高级配置
                            </Typography.Title>
                            <Typography.Text style={{ fontSize: 2, fontWeight: 'normal' }}>部署环境关联应用的版本限制（不满足条件的环境，部署安装包会报异常）：</Typography.Text>
                        </div>
                    }
                    colProps={{
                        span: 18
                    }}
                >
                    <EditableProTable<DataSourceType>
                        rowKey="id"
                        // scroll={{
                        //     x: 960,
                        // }}
                        editableFormRef={editorFormRef}
                        maxLength={5}
                        name="table"
                        recordCreatorProps={
                            {
                                creatorButtonText: '添加声明',
                                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
                            }}
                        columns={columns}
                        editable={{
                            type: 'multiple',
                            editableKeys,
                            onChange: setEditableRowKeys,
                            actionRender: (row, _, defaultDom) => {
                                return [
                                    defaultDom.save,
                                    defaultDom.delete || defaultDom.cancel,

                                ];
                            },
                        }}
                    />
                </ProForm.Group>
            </ProForm>
        </>
    );
};