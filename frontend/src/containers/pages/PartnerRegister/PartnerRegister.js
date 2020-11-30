import React, { useState } from 'react';
import '../PartnerRegister/PartnerRegister.css';
import axios from "../../../config/axios";
import { withRouter } from "react-router-dom";
import { Button, Upload, message, notification } from 'antd';
import PlateImg from '../../uploadfile/dishelement.png';
import RegisterImg from '../../uploadfile/register.png';
import jwtDecode from 'jwt-decode';
import LocalStorageService from '../../../services/localStorage';
import { BASE_BACKEND_URL } from '../../../config/constants';
import { UploadOutlined } from '@ant-design/icons';

function PartnerRegister(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [restaurant_name, setRestaurant_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [email_address, setEmail_address] = useState("");
    const [price_range, setPrice_range] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [category, setCategory] = useState("");
    const [theme, setTheme] = useState("");
    const [description, setDescription] = useState("");
    const [partners_picture, setFileName] = useState("")

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const restaurant_nameHandler = (e) => {
        setRestaurant_name(e.target.value);
    };
    const phone_numberHandler = (e) => {
        setPhone_number(e.target.value);
    };
    const email_addressHandler = (e) => {
        setEmail_address(e.target.value);
    };
    const price_rangeHandler = (e) => {
        setPrice_range(e.target.value);
    };
    const addressHandler = (e) => {
        setAddress(e.target.value);
    };
    const districtHandler = (e) => {
        setDistrict(e.target.value);
    };
    const provinceHandler = (e) => {
        setProvince(e.target.value);
    };
    const categoryHandler = (e) => {
        setCategory(e.target.value);
    };
    const themeHandler = (e) => {
        setTheme(e.target.value);
    };
    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const onFinish = async () => {
        console.log("Comein");
        await axios.post("/partners/register", { username, password, restaurant_name, email_address, phone_number, price_range, address, district, province, partners_picture })
            .then(res => {
                notification.success({
                    description: "Signup successfully!!"
                });
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Something went wrong."
                });
            });

        await axios.post("/partners/login", {
            username,
            password
        })
            .then(res => {
                notification.success({
                    description: "Login success."
                });
                LocalStorageService.setToken(res.data.token);
                LocalStorageService.setARole(res.data.role);
                // console.log(res.data);
                // console.log(jwtDecode(res.data.token));
                props.setRole("PARTNER");
                props.setPartner(jwtDecode(res.data.token));
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Login failed."
                });
            });

        await axios.post(`/partner_category/${category}`)
            .then(res => {
                notification.success({
                    description: "Category successfully!!"
                });
            })
            .catch(err => {
                notification.error({
                    description: "Failed Partner_category."
                });
            })
        await axios.post(`/partner_category/${theme}`)
            .then(res => {
                notification.success({
                    description: "Category successfully!!"
                });
            })
            .catch(err => {
                notification.error({
                    description: "Failed Partner_category."
                });
            })
        props.history.push("/partner_profile");
    };

    const propsUpload = {
        name: 'img',
        multiple: false,
        action: `${BASE_BACKEND_URL}/uploads/`,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setFileName(info.file.response.url);
                message.success(`${info.file.name} file upload successfully.`);
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    };

    return (
        <div className="outerFramePartner">
            <div className="outerRedPartner"></div>
            <div className="outerPlatePartner">
                <div className="innerPlatePartner"></div>
            </div>

            <div className="welcome font-lobster" style={{ fontSize: "180%", top: "40px" }}>Welcome to</div>
            <div className="chanthong font-lobster" style={{ fontSize: "280%", top: "80px", left: "200px" }}>Chanthong Community</div>

            {/* 1st column */}
            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "200px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "75px", top: "180px" }}>Username:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "60px", top: "200px" }} value={username} onChange={usernameHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "270px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "75px", top: "250px" }}>Password:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "60px", top: "270px" }} value={password} onChange={passwordHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "340px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "75px", top: "320px" }}>Re-enter Password:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "60px", top: "340px" }} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "410px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "75px", top: "390px" }}>Email Address:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "60px", top: "410px" }} value={email_address} onChange={email_addressHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "480px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "75px", top: "460px" }}>Name of Restaurant:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "60px", top: "480px" }} value={restaurant_name} onChange={restaurant_nameHandler} />

            {/* 2nd column */}
            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "327px", top: "200px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "340px", top: "180px" }}>Phone Number:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "330px", top: "200px" }} value={phone_number} onChange={phone_numberHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "327px", top: "270px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "340px", top: "250px" }}>Address:</div>
            <input className="usernameTabPartner font-mitr" style={{ left: "330px", top: "270px" }} value={address} onChange={addressHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "327px", top: "340px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "340px", top: "320px" }}>District:</div>
            <input className="usernameTabPartner3 font-mitr" style={{ left: "330px", top: "340px" }} value={district} onChange={districtHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "552px", top: "340px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "570px", top: "320px" }}>Province:</div>
            <input className="usernameTabPartner3 font-mitr" style={{ left: "555px", top: "340px" }} value={province} onChange={provinceHandler} />

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "327px", top: "410px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "340px", top: "390px" }}>Category:</div>
            <div className="usernameTabPartner3 font-mitr" style={{ left: "330px", top: "410px" }}>
                <select onChange={categoryHandler} style={{ background: "none", outline: "none", border: "none" }}>
                    <option value="">Select</option>
                    <option value="1">thai</option>
                    <option value="2">Chinese</option>
                    <option value="3">Japanese</option>
                </select>
            </div>

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "552px", top: "410px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "570px", top: "390px" }}>Theme:</div>
            <div className="usernameTabPartner3 font-mitr" style={{ left: "555px", top: "410px" }}>
                <select onChange={themeHandler} style={{ background: "none", outline: "none", border: "none" }}>
                    <option value="">Select</option>
                    <option value="4">Fine Dining</option>
                    <option value="5">Hot Cuisine</option>
                    <option value="6">At Twilight</option>
                </select>
            </div>

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "327px", top: "480px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "340px", top: "460px" }}>Price per Person:</div>
            <div className="usernameTabPartner3 font-mitr" style={{ left: "330px", top: "480px" }}>
                <select onChange={price_rangeHandler} style={{ background: "none", outline: "none", border: "none" }}>
                    <option value="">Select</option>
                    <option value="300 - 500">300 - 500</option>
                    <option value="600 - 1500">600 - 1500</option>
                    <option value="3000++">3000++</option>
                </select>
            </div>

            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "552px", top: "480px" }}></img>
            </div>
            <Upload {...propsUpload} >
                <div className="usernamePartner font-mitr" style={{ left: "570px", top: "460px" }}>Upload your best photos:</div>
                <div className="usernameTabPartner2 font-mitr" style={{ left: "555px", top: "480px" }}>
                    <Button style={{ backgroundColor: "green", position: "absolute", top: "400px" }} icon={<UploadOutlined />}>Click to Upload</Button>
                </div>
                <div className="usernameTabPartner4 font-mitr" style={{ left: "780px", top: "480px", color: "#D85B55", fontWeight: "bold" }}>Browse</div>
            </Upload>

            {/* Column 3 */}
            <div>
                <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "790px", top: "270px" }}></img>
            </div>
            <div className="usernamePartner font-mitr" style={{ left: "810px", top: "250px" }}>Description:</div>
            <input className="usernameTabPartner5 font-mitr" style={{ left: "795px", top: "270px" }} value={description} onChange={descriptionHandler} />

            <div>
                <img className="registerImage" src={RegisterImg} alt="plate" style={{ left: "960px", top: "470px" }} onClick={onFinish}></img>
            </div>

        </div>
    )
}

export default withRouter(PartnerRegister);