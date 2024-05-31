import React, { useEffect, useState } from 'react';
import {  UserOutlined, LogoutOutlined, CarOutlined, ReadOutlined } from '@ant-design/icons';
import { Layout, Menu, ConfigProvider } from 'antd';
import "../App.css";
import MoveComponent from './MoveComponent';
const { Sider, Content } = Layout;
const items = [
  {
    key: '1',
    icon: React.createElement(CarOutlined),
    label: 'My Moves',
  },
  {
    key: '2',
    icon: React.createElement(UserOutlined),
    label: 'My Profile',
  },
  {
    key: '3',
    icon: React.createElement(ReadOutlined),
    label: 'Get Quote',
  },
  {
    key: '4',
    icon: React.createElement(LogoutOutlined),
    label: 'Logout',
  },
];

const CardComponent = () => {
  const [estimateData, setEstimateData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://test.api.boxigo.in/sample-data/');
        const data = await response.json();
        setEstimateData(data.Customer_Estimate_Flow);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!estimateData) {
    return <div>Loading...</div>;
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgContainer: 'white',
          },
          Menu: {
            colorPrimary: '', 
          },
        },
      }}
    >
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ backgroundColor: 'white' }} // Remove grey background color
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
              borderRight: 'none', // Remove default border
            }}
            inlineCollapsed={false}
          />
        </Sider>
        
        <Layout>
        
          <Content style={{ padding: '24px', minHeight: '280px', background: 'white' }}>
          <h1>My Moves</h1>
           { estimateData.map((temp)=><MoveComponent moving_from={temp.moving_from} moving_to={temp.moving_to} estimate_id={temp.estimate_id} property_size={temp.property_size} boxes={temp.items.inventory.length} distance={temp.distance} moving_on={temp.moving_on} temp={temp}/>)}
            {/* <CollapseComp/>  <CollapseComp/> */}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default CardComponent;
