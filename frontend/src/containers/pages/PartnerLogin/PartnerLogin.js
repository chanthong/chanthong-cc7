import { Form, Input, Button, notification} from 'antd';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../config/axios';
import LocalStorageService from '../../../services/localStorage';
import jwtDecode from 'jwt-decode';
import UserContext from '../../../context/UserContext';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 4,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

function PartnerLogin(props) {
    const { change, setChange } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    };

    const onFinish = () => {
        axios.post("/partners/login", {
            username,
            password
        })
            .then(res => {
                notification.success({
                    description: "Login success."
                });
                LocalStorageService.setToken(res.data.token);
                LocalStorageService.setARole(res.data.role);
                setChange(!change);
                props.setRole("PARTNER");
                props.setPartner(jwtDecode(res.data.token));
                props.history.push("/partner_dashboard");
                // props.history.push("/partner_profile");
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Login failed."
                });
            });
    };

    return (

<Form
      {...layout}
      name="basic"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={usernameHandler}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={passwordHandler}/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={onFinish}>
          Submit
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="text" style={{color:'white'}}
        onClick={()=>{props.history.push("/partner_register")}}
        >or click to register ?</Button>
      </Form.Item>
    </Form>


        // <div className="wrapper">
        //     <div className="title">
        //         Partner
        //     </div>
        //     <div className="form">
        //         <div className="inputfield">
        //             <label>User Name</label>
        //             <input type="text" className="input" value={username} onChange={usernameHandler}></input>
        //         </div>
        //         <div className="inputfield">
        //             <label>Password</label>
        //             <input type="password" className="input" value={password} onChange={passwordHandler}></input>
        //         </div>
        //         <div className="inputfield">
        //             <input htmlType="submit" value="Login" className="btn" onClick={onFinish}></input>
        //         </div>
        //     </div>
        // </div>
    )
}

export default withRouter(PartnerLogin);