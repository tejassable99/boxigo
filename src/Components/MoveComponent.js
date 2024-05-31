import React, { useState } from 'react';
import { HomeOutlined, AppstoreOutlined, EnvironmentOutlined, CalendarOutlined, ExclamationCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import '../App.css'; 
import CollapseComp from './CollapseComp';

const MoveComponent = ({moving_from,moving_to,estimate_id,property_size,boxes,distance,moving_on,temp}) => {
  const iconStyle = { fontSize: '24px', marginRight: '8px', color: 'orange' };
  const buttonStyle = { backgroundColor: 'orange', borderColor: 'orange', color: 'white' };
  let [flag,setFlag]=useState(false)
  const handleFlag=()=>{
 setFlag(!flag)
  }

  return (
    <>
      {/* First row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h2>From</h2>
          <h4>{moving_from}</h4>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'white', 
          color: 'orange', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          marginRight:"3%"
        }}>
          <ArrowRightOutlined style={{ fontSize: '24px' }} />
        </div>
        <div>
          <h2>To</h2>
          <h4>{moving_to}</h4>
        </div>
        <div>
          <h2>Request#</h2>
          <h4>{estimate_id}</h4>
        </div>
      </div>
      
      {/* Second row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <HomeOutlined style={iconStyle} />
          <h4>{property_size}</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AppstoreOutlined style={iconStyle} />
          <h4>Boxes {boxes}</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <EnvironmentOutlined style={iconStyle} />
          <h4>{distance}</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarOutlined style={iconStyle} />
          <h4>{moving_on}</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type='checkbox' id="customCheckbox" className="custom-checkbox" />
          <h4>Flexible</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "20px" }}>
        <Button type="default" style={{ borderColor: 'orange', color: 'orange'}}onClick={handleFlag}>View Move Details</Button>
        <Button type="primary" style={buttonStyle}>Quote Waiting</Button>
      </div>
      </div>

      {/* Third row */}
  

      {/* Disclaimer */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <ExclamationCircleOutlined style={{ color: 'orange', fontSize: '24px', marginRight: '8px' }} />
        <h4>Disclaimer: update your move date before two days of shifting.</h4>
      </div>

      {/* Divider */}
      <Divider style={{ borderWidth: '3px' }} />
      { flag?  <CollapseComp temp={temp}/>:null}
   
    </>
  );
};

export default MoveComponent;
