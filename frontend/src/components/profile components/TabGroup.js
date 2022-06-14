import { useState } from "react";
// import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const TabGroup = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
        <Tab eventKey="home" title="Overview">
            <p>add slide of current pieces</p>
        </Tab>
        <Tab eventKey="profile" title="For Sale">
            <p>make a image grid</p>
        </Tab>
        </Tabs>
    );
};


export default TabGroup