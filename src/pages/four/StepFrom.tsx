import React, { useState } from 'react';
import { Button, Steps, Typography, Row, Space, message } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';

export const App4: React.FC = () => {
    //分布表单的当前界面
    const [current, setCurrent] = useState(0);
    // 发布须知勾选框
    const [current1, setCurrent1] = useState(false);
    const handle = (value: boolean) => {
        setCurrent1(value)
    }
    const steps = [
        {
            title: '基本信息',
            content: <Step1></Step1>,
        },
        {
            title: '应用组件',
            content: <Step2></Step2>,
        },
        {
            title: '高级设置',
            content: <Step3></Step3>,
        },
        {
            title: '确认发布',
            content: <Step4 onHandle={handle}></Step4>,
        },
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <ProCard style={{ width: '100%', height: '100vh', minWidth: 1220 }}>
            <ProCard colSpan={3} style={{ minWidth: 210 }}>
                <Button icon={<LeftCircleOutlined />} style={{ marginBottom: 20 }}>退出编辑</Button>
                <Steps current={current} items={items} direction='vertical' style={{ height: '30vh' }} />
            </ProCard>
            <ProCard style={{ height: '100%', borderLeft: '1px solid gray', borderRadius: 0 }}>
                <div>{steps[current].content}</div>
                <div style={{ position: 'relative', width: '100%', bottom: '-7%' }}>
                    <Row justify='space-between'>
                        <Typography.Text style={{ color: 'rgb(184, 184, 184)' }}>说明：必填信息填写完成，可先保存为草稿，避免信息丢失。</Typography.Text>
                        <Space style={{ marginRight: 20 }}>
                            <Button type='primary'>保存草稿</Button>
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                    上一步
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button onClick={() => next()}>
                                    下一步
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button onClick={() =>
                                    current1 ? message.success('发布成功') : message.info('请勾选发布须知')
                                }>
                                    确认发布
                                </Button>
                            )}
                        </Space>
                    </Row>
                </div>
            </ProCard>
        </ProCard>
    );
};
