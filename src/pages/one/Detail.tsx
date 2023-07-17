import { FormOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import { Descriptions, Space, Button, Card } from 'antd';
import styles from './index.module.less';

console.log(styles.card);

const EditIcon = () => <FormOutlined style={{ color: 'blue' }} />;
const RigthIcon = () => <RightOutlined style={{ color: 'lightgray', fontSize: 50, margin: '0 40px 0 40px' }} />;

interface Info {
  title: string;
  msg: string;
}
const data: Info[] = [
  { title: '步骤一：组件源配置', msg: '确定组件代码管理方式' },
  { title: '步骤二：工程模板下载', msg: '下载组件的工程模板，开始进行开发' },
  { title: '步骤三：开发和调试', msg: '使用debug包进行开发和调试' },
  { title: '步骤四：构建和发布', msg: '构建组件正式镜像，并发布组件' },
];

const MyCard: React.FC<Info> = props => {
  const { title, msg } = props;
  return (
    <>
      <Card className={styles.card} bordered={false} style={{ width: 300, height: 200 }}>
        <p style={{ margin: 0, fontWeight: 600, fontSize: '16px' }}>{title}</p>
        <p style={{ margin: 0, fontSize: 'smaller', color: 'gray' }}> {msg}</p>
      </Card>
    </>
  );
};

export const App3: React.FC = () => {
  const labelStyle = {
    color: 'black',
    fonsize: '16px',
    fontweight: 'bold',
  };
  return (
    <>
      <Descriptions
        className={styles['base-descriptions']}
        title="基本信息"
        labelStyle={labelStyle}
        extra={
          <Space>
            <Button type="primary" danger>
              删除组件
            </Button>
            <Button type="primary">转移组件</Button>
          </Space>
        }
      >
        <Descriptions.Item label="组件名称">
          <Space>
            二开引擎
            <EditIcon />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="组件类型">
          <Space>
            静态资源组件
            <EditIcon />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="组件ID">aaa.bbbbb</Descriptions.Item>
        <Descriptions.Item label="组件描述" span={3}>
          <Space>
            这是组件描述，这是组件描述，这是组件描述，这是组件描述，这是组件描述。
            <EditIcon />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="创建人">张三</Descriptions.Item>
        <Descriptions.Item label="创建时间">2022-06-22 15：05：12</Descriptions.Item>
      </Descriptions>

      <Descriptions className={styles['guide-descriptions']} title="开发指引">
        <Descriptions.Item span={3} contentStyle={{ fontSize: 'smaller', color: 'gray' }}>
          您可以参考如下流程进行组件管理，完成组件的开发、调试、构建和发布：
        </Descriptions.Item>
        <Descriptions.Item span={3}>
          <Space>
            <MyCard title={data[0].title} msg={data[0].msg}></MyCard>
            <RigthIcon />
            <MyCard title={data[1].title} msg={data[1].msg}></MyCard>
            <RigthIcon />
            <MyCard title={data[2].title} msg={data[2].msg}></MyCard>
            <RigthIcon />
            <MyCard title={data[3].title} msg={data[3].msg}></MyCard>
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
