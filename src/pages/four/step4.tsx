import React, { useCallback, useState } from "react";
import { Checkbox, Col, Row, Typography } from 'antd';
import {
    ExclamationCircleOutlined
} from '@ant-design/icons';


const data = [
    "完成发布后，版本的配置信息将不可再进行调整，包括但不限于版本编号等基础信息，版本的权益，版本带出的组件，版本依赖的api, 版本的开放能力，版本的配置文件等; ",
    "完成创建后，若希望修改相关信息，只能创建新的版本。"
];
interface Type4 {
    onHandle:(values:boolean)=>void;
}
export const Step4: React.FC<Type4> = (props) => {
    const handle = (e:any)=>{
        props.onHandle(e.target.checked);
    };
    return (
        <>
            <Row>
                <Typography.Paragraph> <strong>提示：</strong> 我们检测到一些变化，请您确认是否要调整版本配置;若无须调整可继续执行版本发布。
                </Typography.Paragraph>
            </Row>

            <Row style={{ backgroundColor: 'rgb(255, 251, 230)', height: '5%', width: '60%', padding: 5 }} align='middle'>
                <Typography.Text style={{ color: "gray" }} >
                    <ExclamationCircleOutlined style={{ color: 'yellowgreen', margin: '0 6px 0 6px' }} />
                    与最近已发布版本(V1.0.0) 对比，您上传的版本(V1.1.0) 配置信息发生了变化，请您检查是否存在配置异常。
                    <Typography.Link> 查看版本兼容对比</Typography.Link>
                </Typography.Text>
            </Row>

            <Typography.Title level={5}>版本发布须知：</Typography.Title>
            <Typography.Paragraph>请您确认版本发布影响，并勾选已读声明</Typography.Paragraph>

            <Row style={{ backgroundColor: 'rgb(242, 242, 242)', width: '60%', padding: 5 }}  >
                <Row wrap={false}>
                    <Col>
                        <div style={{ backgroundColor: 'black', margin: '0 6px 0 6px', borderRadius: '50%', width: 7, height: 7, display: 'inline-block' }} />
                    </Col>
                    <Col>
                        <Typography.Text>{data[0]}</Typography.Text>
                    </Col>
                </Row>
                <Row wrap={false}>
                    <Col>
                        <div style={{ backgroundColor: 'black', margin: '0 6px 0 6px', borderRadius: '50%', width: 7, height: 7, display: 'inline-block' }} />
                    </Col>
                    <Col>
                        <Typography.Text>{data[1]}</Typography.Text>
                    </Col>
                </Row>
            </Row>
            <strong >
                <Checkbox onClick={e =>handle(e)}>
                    我已阅读并知晓版本发布影响
                </Checkbox>
            </strong>

        </>
    )
}