import axios from 'axios';
import { useState, useEffect } from 'react';
import ResturantCard2 from '../ResturantCard/ResturantCard2/ResturantCard2';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function District() {

    const [district, setDistrict] = useState([]);

    const fetchPartnersByDistrict = async () => {
        const res = await axios.get(`http://localhost:5555/partners/district?findDis=ratchatewi`);
        setDistrict(res.data.targetPartner);
    }

    useEffect(() => {
        fetchPartnersByDistrict();
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {district.map((item) => <ResturantCard2 item={item} />)}
        </Slider >
    )
}

export default District