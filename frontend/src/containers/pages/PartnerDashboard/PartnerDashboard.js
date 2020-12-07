import { Table } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from '../../../config/axios';
import { Select } from 'antd';
import LocalStorageService from '../../../services/localStorage';
function PartnerDashboard(props) {

    const { Option } = Select;
    const [data, setData] = useState([]);
    const fetchReserves = () => {
        axios.get("/reserves/partner")
            .then(res => {
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

    const handleChange = (id,value) => {
        console.log(`id = ${id}`);
        const path ="/reserves/" + id;
        console.log(path); 
        axios.put(path,{ reserve_status: value })
            .then(res => {
                fetchReserves();
            })
            .catch(err => {
                console.log(err);
            });
    };
    const columns = [
        {
            title: 'Reserve_ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'id',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'id',
        },
        {
            title: 'Persons',
            dataIndex: 'number_guest',
            key: 'id',
        },
        {
            title: 'User_ID',
            dataIndex: 'user_id',
            key: 'id',
        },
        {
            title: 'Code',
            dataIndex: 'reserve_code',
            key: 'id',
        },
        {
            title: 'Comment',
            dataIndex: 'note_comment',
            key: 'id',
        },
        {
            title: 'Action',
            dataIndex: 'reserve_status',
            render: (text, record) => {
                return (
                    <Select defaultValue={text} style={{ width: 120 }} onChange={value => handleChange(record.id, value)}>
                        <Option key="1" value="confirmed" >confirmed</Option>
                        <Option key="2" value="pending" >pending</Option>
                        <Option key="3" value="cancel" >cancel</Option>
                    </Select>
                )
            }
        }
    ];
    
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Partner Dashboard</h1>
                <Button onClick={onLogout}>Logout</Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default withRouter(PartnerDashboard)

