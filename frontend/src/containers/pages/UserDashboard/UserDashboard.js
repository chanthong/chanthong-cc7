import { Table} from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from '../../../config/axios';
import { Select } from 'antd';
import LocalStorageService from '../../../services/localStorage';

function UserDashboard(props) {
    
    const { Option } = Select;
    const [data, setData] = useState([]);
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Persons',
            dataIndex: 'number_guest',
            key: 'number_guest',
        },
        {
            title: 'Code',
            dataIndex: 'reserve_code',
            key: 'reserve_code',
        },
        {
            title: 'Comment',
            dataIndex: 'note_comment',
            key: 'note_comment',
        },
        {
         title: 'Reserve status',
         dataIndex: 'reserve_status',
         key: 'reserve_status',
        },
        {
         title: 'Restaurant name',
         dataIndex: ["Partner","restaurant_name"],
         key: 'restaurant_name',
        },
        {
            title: 'Action',
            dataIndex: 'reserve_status',
            key: 'reserve_status',
            render: (text,record) => {return(
                <Select defaultValue={text} style={{ width: 120 }} onChange={handleChange}>
                <Option value="confirm">confirm</Option>
                <Option value="pending">pending</Option>
              </Select>)
            }
        }
    ];
    const fetchReserves = () => {
        axios.get("/reserves/getReserveByUser")
            .then(res => {
               console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchReserves();
    }, []);

    const onLogout = () => {
        LocalStorageService.clearToken();
        props.setRole("GUEST");
        props.history.push("/");
    };
    function handleChange(value,status) {
        // console.dir(`selected ${value}`);
        console.log(status)
        const st = status
        console.log(`status = ${st}`);
        console.log(value);
      }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>User Dashboard</h1>
                <Button onClick={onLogout}>Logout</Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default withRouter(UserDashboard)