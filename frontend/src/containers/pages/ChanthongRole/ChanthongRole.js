import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import ResturantCard2 from '../../../components/ResturantCard/ResturantCard2/ResturantCard2';
import UserContext from '../../../context/UserContext';

function ChanthongRole() {
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
        setCard(res.data.partners);
    }

    useEffect(() => {
        fetchPartners();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <h1 style={{ textAlign: "start", fontSize: "24px", fontStyle: "italic" }}>Recommend by 5555</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {card.map((item) => <ResturantCard2 item={item} />)}
                    {/* {card.map((item) => <ResturantCard item={item} />)} */}
                </div>
            </div>
        </div>
    )
}

export default ChanthongRole
