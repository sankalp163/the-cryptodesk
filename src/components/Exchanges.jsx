import React from "react";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import { Col, Row, Typography, Spin, Collapse, Avatar } from "antd";

const { Text, Title } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();

  console.log(data);
  if (isFetching) return <Spin size="large" />;

  const exchangeList = data?.data?.exchanges;
  return (
    <>
      <Row className="exchange-menu-container">
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Market Share</Col>
      </Row>
      <Row>
        {exchangeList.map((exchange) => (
          <Col span={24}>
            <Collapse accordion={true} bordered={false}>
              <Collapse.Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row className="exchange-header-container">
                    <Col span={6}>
                      <img
                        className="exchange-icon"
                        src={exchange.iconUrl}
                      ></img>
                      {exchange.name}
                    </Col>
                    <Col span={6}>{millify(exchange.volume)}</Col>
                    <Col span={6}>{exchange.numberOfMarkets}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}</Col>
                  </Row>
                }
              >
                {exchange.description && HTMLReactParser(exchange.description)}
              </Collapse.Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
