import { useState } from "react";
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import Cards from "../gallery components/Cards";

const TabGroup = ({artistInfo, purchaserCollection}) => {
    
    const [key, setKey] = useState('home');
    
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="home" title="Overview">
           <div>            
            {/* {artistInfo.collection.map(artInfo => {
                return(
                    <>
                        
                    </>
                )
            })} */}
           </div>
        </Tab>
        <Tab eventKey="profile" title="For Sale">
            <p>sold items</p>
        </Tab>
        </Tabs>
    );
};


export default TabGroup