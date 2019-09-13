import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";

import './realtime.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Realtime extends Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    };

    render() {
        const data = [
            {
            year: "1991",
            value: 3
            },
            {
            year: "1992",
            value: 4
            },
            {
            year: "1993",
            value: 3.5
            },
            {
            year: "1994",
            value: 5
            },
            {
            year: "1995",
            value: 4.9
            },
            {
            year: "1996",
            value: 6
            },
            {
            year: "1997",
            value: 7
            },
            {
            year: "1998",
            value: 9
            },
            {
            year: "1999",
            value: 13
            }
        ];
        const cols = {
            value: {
            min: 0
            },
            year: {
            range: [0, 1]
            }
        };

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
                    <div className="logo">
                    <Avatar src="https://png2.cleanpng.com/sh/3a39e875422bf8335ab9682905ac449b/L0KzQYm3U8MxN5ZsiZH0aYP2gLBuTfpwgaR5gdV0LXfkfba0gB9vfKN0hN5ucoOwhrrrhf8ub5JyfZ9sb372f73sk71kd551Rdx4eYP3ebTyTcViapY6SqRvMnS6c4OCTsQ6OGk1TqcDMUW1QoW5UsMyQWI9TqU3cH7q/kisspng-joystick-game-controllers-video-game-consoles-comp-joystick-5abe522f2d7c29.4908065815224223191863.png" 
                    shape="square" style={{ width: 40, height: 40, marginLeft: 15 }} />
                        <div className="content-container">
                            <div className="game-tittle">Demo game</div>
                            <div className="studio-name">GameAnalytics</div>
                        </div>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="swap" />
                            <span>Realtime</span>
                        </Menu.Item>
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="layout" />
                            <span>Dashboards</span>
                            </span>
                        }
                        >
                            <Menu.Item key="2"><Icon type="dashboard" />Overview</Menu.Item>
                            <Menu.Item key="3"><Icon type="deployment-unit" />Engagement</Menu.Item>
                            <Menu.Item key="4"><Icon type="deployment-unit" />Benchmarks</Menu.Item>
                            <Menu.Item key="5"><Icon type="deployment-unit" />Monetization</Menu.Item>
                            <Menu.Item key="6"><Icon type="deployment-unit" />Resources</Menu.Item>
                            <Menu.Item key="7"><Icon type="deployment-unit" />Progression</Menu.Item>
                            <Menu.Item key="8"><Icon type="deployment-unit" />Quality</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="search" />
                            <span>Explore</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="funnel-plot" />
                            <span>Funnels</span>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Icon type="share-alt" />
                            <span>Cohorts</span>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Icon type="tool" />
                            <span>Configs</span>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: "white" , padding: 0 }} > 
                    <div className="page-dashboard">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                            <Menu.Item key="real-time">
                                Real-time
                            </Menu.Item>
                            <Menu.Item key="live-feed">
                                Live feed
                            </Menu.Item>
                            <Menu.Item key="help" style={{ width: 46, position: "absolute", right: 20, textAlign: "center" }}>
                                <Icon type="question-circle" />
                            </Menu.Item>
                        </Menu>
                    </div>

                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Chart height={400} data={data} scale={cols} forceFit>
                            <Axis name="year" />
                            <Axis name="value" />
                            <Tooltip
                                crosshairs={{
                                type: "y"
                                }}
                            />
                            <Geom type="line" position="year*value" size={2} />
                            <Geom
                                type="point"
                                position="year*value"
                                size={4}
                                shape={"circle"}
                                style={{
                                stroke: "#fff",
                                lineWidth: 1
                                }}
                            />
                        </Chart>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Realtime;