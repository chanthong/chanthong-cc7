import { Table} from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from '../../../config/axios';
import { Select } from 'antd';
import LocalStorageService from '../../../services/localStorage';
function PartnerDashboard(props) {
    
    const { Option } = Select;
    const [data, setData] = useState([]);
    const columns = [
        {
            title: 'Reserve_ID',
            dataIndex: 'id',
            key: 'id',
        },
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
            title: 'User_ID',
            dataIndex: 'user_id',
            key: 'user_id',
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
            title: 'Action',
            dataIndex: 'reserve_status',
            key: 'reserve_status',
            render: text => {return(
                <Select defaultValue={text} style={{ width: 120 }} onChange={handleChange}>
                <Option value="confirm">confirm</Option>
                <Option value="pending">pending</Option>
              </Select>)
            }
        }
    ];
    const fetchTodos = () => {
        axios.get("/reserves")
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const onLogout = () => {
        LocalStorageService.clearToken();
        props.setRole("GUEST");
        props.history.push("/");
    };
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
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