import React from 'react'
import { Carousel, Col } from 'antd';
import { Row } from 'antd';
import '../Hero/Hero.css'
function Hero() {
    const contentStyle = {
        height: '250px',
        color: '#fff',
        lineHeight: '100px',
        // textAlign: 'center',
        // background: '#364d79',
        margin: "20px 0"
    };
    return (
        <Row justify="center">
            <Col >
                <Carousel autoplay>
                    <div>
                        <img style={contentStyle} src="https://picsum.photos/800/300?random=1" />
                    </div>
                    <div>
                        <img style={contentStyle} src="https://picsum.photos/800/300?random=2" />
                    </div>
                    <div>
                        <img style={contentStyle} src="https://picsum.photos/800/300?random=3" />
                    </div>
                    <div>
                        <img style={contentStyle} src="https://picsum.photos/800/300?random=4" />
                    </div>
                    {/* <div>
            <img style={contentStyle} src="https://picsum.photos/200/300?random=1"/>
            </div>
            <div>
            <img style={contentStyle} src="https://picsum.photos/200/300?random=1"/>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div> */}
                </Carousel>
            </Col>
        </Row>

    )
}

export default Hero
