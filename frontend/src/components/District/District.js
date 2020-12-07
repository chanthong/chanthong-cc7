import axios from 'axios';
import { useState, useEffect } from 'react';
import ResturantCard2 from '../ResturantCard/ResturantCard2/ResturantCard2';

function District() {

    const [district, setDistrict] = useState([]);

    const fetchPartnersByDistrict = async () => {
        const res = await axios.get(`http://localhost:5555/partners/district?findDis=Ratchada`);
        setDistrict(res.data.targetPartner);
    }

    useEffect(() => {
        fetchPartnersByDistrict();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <h1 style={{ textAlign: "start", fontSize: "24px", fontStyle: "italic" }}>Recommend by ratchatewi</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {district.map((item) => <ResturantCard2 item={item} />)}
                    {/* {card.map((item) => <ResturantCard item={item} />)} */}
                </div>
            </div>
        </div>
    )
}

export default District