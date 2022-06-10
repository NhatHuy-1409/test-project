import { Redirect, Route } from "react-router-dom"
import { Fragment } from "react"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreAddOutlined,
    UserOutlined,
    LoginOutlined,
    BarsOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const HomeTemplate = (props) => {
    const { Header, Content, Sider } = Layout;
    // const { SubMenu } = Menu;

    const [collapsed, setCollapsed] = useState(false);

    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    {/* <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <LoginOutlined />,
                                label: 'Sign In',
                            },
                            {
                                key: '2',
                                icon: <UserOutlined />,
                                label: 'Sign Up',
                            },
                            {
                                key: '3',
                                icon: <AppstoreAddOutlined />,
                                label: 'Create Project',
                            },
                            {
                                key: '4',
                                icon: <BarsOutlined />,
                                label: 'Get All Projects',
                            },
                        ]}
                    /> */}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<LoginOutlined />}>
                            <NavLink to="/signin">Sign In</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                            <NavLink to="/createproject">Create Project</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BarsOutlined />}>
                            <NavLink to="/getallprojects">Get All Projects</NavLink>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <props.component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>



        </Fragment>
    }} />
}
