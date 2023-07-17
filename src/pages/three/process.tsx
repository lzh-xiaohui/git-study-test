import React from 'react';
import { Space, Card, Typography, Row } from 'antd';

import './style.css';

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
      <Card style={{ width: 320, marginTop: 5, marginRight: '4%' }}>
        <Space size={8}>
          <CodeIcon />
          <Space direction="vertical">
            <div style={{ fontSize: '400' }}>{title}</div>
            <div>
              {info} <a href="#">详见</a>
            </div>
          </Space>
        </Space>
      </Card>
    </>
  );
};

const data = [
  { info: '"静态资源型"组件主要用于web前端能力开发;也可用于应用文档的开发。', title: '静态资源型' },
  { info: '“模块类型”组件主要用于服务端能力开发，适用于硬件资源需求较少的服务。', title: '模块类型' },
  { info: '“独立服务"组件主要用于服务端能力开发，适用于硬件资源需求较多的服务。', title: '独立服务' },
  { info: '“端应用”组件主要用于桌面客户端能力开发。', title: '端应用' },
];

export const App4: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <Row>
        <Typography.Text>帮助</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>平台提供了不同类型的组件，开发者可根据需要使用不同类型的组件</Typography.Text>
      </Row>
      <Row>
        {data.map(item => (
          <CodeCard info={item.info} title={item.title}></CodeCard>
        ))}
      </Row>
    </div>
  );
};
