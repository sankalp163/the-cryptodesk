import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

//Destructuring Title from Typography
const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className='heading'>
                Global Crypto Statistics
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="5"></Statistic></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5"></Statistic></Col>
                <Col span={12}><Statistic title="Total MArket Cap" value="5"></Statistic></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="5"></Statistic></Col>
                <Col span={12}><Statistic title="Total Markets" value="5"></Statistic></Col>
            </Row>
        </>
    )
}

export default Homepage;
