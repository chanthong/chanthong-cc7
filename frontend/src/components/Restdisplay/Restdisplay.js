import React from 'react'
import { Card, Col, Row } from 'antd';

function Restdisplay({headerTilte}) {
    return (
        <>
            <h1>{headerTilte}</h1>
        <Row style={{marginTop:20}}>
            <Col span={6}>
                <Card title="Default size card">
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Default size card">
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Default size card">
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Default size card">
                </Card>
            </Col>

        </Row>
        </>
    )
}

export default Restdisplay
