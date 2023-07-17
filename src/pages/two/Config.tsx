import React from 'react';
import { Space, Card, Typography, Button, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const CodeIcon = () => {
  return (
    <>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>document-code</title>
        <path d="M19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5zM17 18l-2 8h1l2-8h-1zM13 25l-3-3 3-3 0.7 0.7-2.3 2.3 2.3 2.3-0.7 0.7zM20 25l3-3-3-3-0.7 0.7 2.3 2.3-2.3 2.3 0.7 0.7z"></path>
      </svg>
    </>
  );
};

interface Msg {
  info: string;
  title: string;
}
const CodeCard: React.FC<Msg> = props => {
  const { info, title } = props;
  return (
    <>
      <Card style={{ width: 300, height: 150, marginRight: 20, marginTop: 20 }}>
        <Space>
          <CodeIcon />
          <Space direction="vertical">
            <div>
              <Typography.Text>
                {info}
                <Typography.Link href="#">详见</Typography.Link>
              </Typography.Text>
            </div>
            <div style={{ position: 'absolute', bottom: 15, right: 15 }}>
              <Button type="primary">{title}</Button>
            </div>
          </Space>
        </Space>
      </Card>
    </>
  );
};

const data = [
  { msg: '将组件代码托管给平台，使用平台的构建和打包工具生成组件镜像。', tittle: '申请代码仓库' },
  { msg: '独立管理组件源代码，按平台开发规范完成组件开发和构建，并将组件镜像上传至平台。', tittle: '申请独立镜像' },
  { msg: '不通过平台执行组件镜像部署，仅在平台注册组件的配置信息。', tittle: '配置服务' },
];
export const App4: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <Row>
        <Typography.Title level={5} style={{ paddingBottom: 2, borderBottom: '1 solid lightgray' }}>
          开发指引
        </Typography.Title>
      </Row>
      <Row style={{ backgroundColor: 'rgb(230, 247, 255 )', height: 30 }} align="middle">
        <InfoCircleOutlined style={{ color: 'blue' }}></InfoCircleOutlined>
        <Typography.Text> 帮助提示：请您先确定组件的源配置方案,可在以下三种方式选择一种：</Typography.Text>
      </Row>
      <Row>
        {data.map(item => (
          <CodeCard info={item.msg} title={item.tittle}></CodeCard>
        ))}
      </Row>
    </div>
  );
};
