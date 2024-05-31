import React from 'react';
import { Button, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../App.css'; // Make sure to create this CSS file

const { Panel } = Collapse;

const CollapseComp = ({ temp }) => {
  const panelHeaderStyle = {
    backgroundColor: 'lightgrey',
    color: 'orange',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const customExpandIcon = ({ isActive }) => (
    <DownOutlined rotate={isActive ? 180 : 0} style={{ fontSize: '16px', color: 'black' }} />
  );

  const circleStyle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    lineHeight: '30px',
    marginLeft: '10px',
  };

  return (
    <>
      {/* First Row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h3>Additional Information</h3>
          <h5>Test Data</h5>
        </div>
        <div>
          <Button type="primary" style={{ backgroundColor: "black", color: "white" }}>Edit Additional Info</Button>
        </div>
      </div>

      {/* Second Row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h3>House Details</h3>
        </div>
        <div>
          <Button type="primary" style={{ backgroundColor: "black", color: "white" }}>Edit House Details</Button>
        </div>
      </div>

      {/* Third Row */}
      <div>
        <h2 style={{ color: "orange" }}>Existing House Details</h2>
      </div>
      <div style={{ display: "flex", gap: "150px", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h3>Floor No.</h3>
          <h4>{temp.old_floor_no}</h4>
        </div>
        <div>
          <h3>Elevator Available</h3>
          <h4>{temp.old_elevator_availability}</h4>
        </div>
        <div>
          <h2>Distance from Elevator/Staircase to Truck</h2>
          <h4>{temp.old_parking_distance}</h4>
        </div>
      </div>

      {/* Fourth Row */}
      <div>
        <h2 style={{ color: "orange" }}>New House Details</h2>
      </div>
      <div style={{ display: "flex", gap: "150px", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h3>Floor No.</h3>
          <h4>{temp.new_floor_no}</h4>
        </div>
        <div>
          <h3>Elevator Available</h3>
          <h4>{temp.new_elevator_availability}</h4>
        </div>
        <div>
          <h2>Distance from Elevator/Staircase to Truck</h2>
          <h4>{temp.new_parking_distance}</h4>
        </div>
      </div>

      {/* Fifth Row */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div>
          <h3>Inventory Details</h3>
        </div>
        <div>
          <Button type="primary" style={{ backgroundColor: "black", color: "white" }}>Edit Inventory</Button>
        </div>
      </div>

      {/* Collapsible Sections */}
      <Collapse
        expandIcon={customExpandIcon}
        expandIconPosition="end"
        style={{ backgroundColor: 'lightgrey', marginBottom: '20px' }}
      >
        {temp.items.inventory.map((item, index) => (
          <Panel header={<div style={{color:"orange"}}>{item.displayName}<span style={circleStyle}>{item.category.length}</span></div>} key={index} style={panelHeaderStyle}>
            <div style={{display:"flex",gap:"55px"}}>
            {item.category.map((category, catIndex) => (
               
              <div key={catIndex} style={{ marginBottom: "10px" }}>
              
                <h2 style={{ marginBottom: "-20px" }}>{category.displayName}</h2>
                {category.items.map((catItem, catItemIndex) => (
                  <div key={catItemIndex} style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex", gap:"20px", marginBottom: "-15px" }}>
                      <h4>{catItem.displayName}</h4>
                      <h4>{catItem.qty}</h4>
                      {/* <h6>{catItem.type.option}</h6> */}
                    </div>
                    <div>
                    {catItem.type && catItem.type.length > 0 && (
                    <span style={{ marginRight: "10px" ,marginBottom:"-90px"}}>
                      {catItem.type.find(option => option.selected)?.option || catItem.type[0].option}
                    </span>
                  )}
                    </div>
                  </div>
                ))}
              </div>
             
            ))} </div>
          </Panel>
          
        ))}
       
      </Collapse>
    

    </>
  );
};

export default CollapseComp;
