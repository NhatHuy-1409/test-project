import React, { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/actions/ProjectsActions/ProjectActions';
import { TOKEN } from '../../util/setting';
import { history } from '../../App';


export default function GetAllProject() {
    let dispatch = useDispatch()
    useEffect(() => {
        callAPI()
    }, [])
    const callAPI = () => {
        const action = getAllProjects()
        dispatch(action)
    }
    const { allProjects } = useSelector(state => state.ProjectsReducer)
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
      
        },
        {
            title: 'ProjectName',
            dataIndex: 'projectName',
            key: 'projectName',
           
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
           
        },
        {
            title: 'Action',
            key: 'action',
            render:() => { 
                return <Space  size='middle'>
                    <a>...</a>
                </Space>
             }
        },

    ];
    return (
        <div className="flex justify-center items-center">
            <div className='container m-5 w-2/3'>
                <div className="flex justify-between items-start mb-3">
                    <h2 className='text-3xl'>Project</h2>
                    <Button className='mt-5 w-1/7' style={{ background: '#6b62ff', color: 'white' }} onClick={() => { 
                        history.push('/createproject')
                     }}>Create Project</Button>
                </div>
                <Space
                    style={{
                        marginBottom: 16,
                    }}
                >
                </Space>

                <Table  columns={columns} dataSource={allProjects} rowKey="id" />
            </div>
        </div>
    )
}
