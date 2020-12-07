import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import ResturantCard2 from '../../../components/ResturantCard/ResturantCard2/ResturantCard2';
import UserContext from '../../../context/UserContext';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ChanthongRole(props) {
    const { card, setCard } = useContext(UserContext);

    //     const [user, setUser] = useState([]);

    //    const fetchData = () => {
    //       axios.get(`/users/getAllUsers`)
    //       .then(res => setUser(res.data));
    //    };

    //    useEffect(() => {
    //       fetchData();
    //    }, []);

    const fetchPartners = async () => {
        const res = await axios.get("http://localhost:5555/partners/");
        console.log("fetchpartner")
        setCard(res.data.partners);
    }

    useEffect(() => {
        fetchPartners();
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
        < >
            <Slider {...settings}>
                {card.map((item) => <div> <ResturantCard2 item={item} /> </div>)}
            </Slider>
        </ >
    )
}

export default ChanthongRole
