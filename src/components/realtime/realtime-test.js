import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import './realtime.css';

const { SubMenu } = Menu;

class Realtime extends Component {
    state = {
        collapsed: false,
        current: 'real-time',
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
            <div className="container">
                <div className="menu-main">
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div> 
                <div className="page-wrapper">
                    <div className="page-dashboard">
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ height: 49 }}>
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
                </div>
            </div>
        )
    }
}

export default Realtime;



// .menu-main {
//     width: 240px;
//     position: "fixed";
//     float: left;
// }

// .page-wrapper {
//     margin-left: 240px;
// }