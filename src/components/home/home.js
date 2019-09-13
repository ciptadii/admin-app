import React, { Component } from 'react';
import { Avatar, Menu, Icon, PageHeader, Input, Collapse, Select } from 'antd';
import './home.css';

const { SubMenu } = Menu;
const { Search } = Input;

// studio collapse
const { Panel } = Collapse;
const { Option } = Select;

// studio collapse
function callback(key) {
    console.log(key);
}

// studio collapse
const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

// studio collapse
const genExtra = () => (
    <Icon
      type="setting"
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
);

class Home extends Component {
    state = {
        current: 'mail',
        expandIconPosition: 'left',
    };

    // menu
    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };

    // studio collapse
    onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
    };
    
    render() {
        const { expandIconPosition } = this.state;
        return (
            <React.Fragment>
                <div>
                    {/* Menu */}
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                            <Avatar size="large" icon="user" className="avatar" />

                            <Menu.Item key="mail" className="items">
                                Overview
                            </Menu.Item>
                        
                            <SubMenu
                                className="submenu"
                                style={{ position: 'absolute', right: 0 }}
                                title={
                                    <span className="submenu-title-wrapper" >
                                        User <Icon type="caret-down" />
                                    </span> 
                                }
                            >
                                <Menu.Item key="setting:1"><Icon type="profile" /> Documentation </Menu.Item>
                                <Menu.Item key="setting:2"><Icon type="info-circle" /> Guides </Menu.Item>
                                <Menu.Item key="setting:3"><Icon type="bars" /> Terms of Service </Menu.Item>
                                <Menu.Item key="setting:4"><Icon type="solution" /> Personal Settings </Menu.Item>
                                <Menu.Item key="setting:5"><Icon type="logout" /> Logout </Menu.Item>
                            </SubMenu>
                    </Menu>
                </div>
                
                <div className="home">
                    {/* header */}
                    <div className="header">
                        <div className="pageheader">
                            <PageHeader 
                            title="Games"
                            subTitle="Yesterday (September 11 - change %)" 
                            style={{ width: 710, paddingLeft: 0, paddingRight: 0, float: "left" }} 
                            />
                            <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            style={{ width: 330, float: 'right', padding: 0 }}
                            onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                    
                    {/* studio collapse */}
                    <div className="studio">
                        <Collapse
                            defaultActiveKey={['1']}
                            onChange={callback}
                            expandIconPosition={expandIconPosition}
                        >
                            <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                                <div>{text}</div>
                            </Panel>
                            <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                                <div>{text}</div>
                            </Panel>
                            <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                                <div>{text}</div>
                            </Panel>
                        </Collapse> <br/>
                    </div>

                    <div className="hidden-games">
                        <Collapse
                            defaultActiveKey={['1']}
                            onChange={callback}
                            expandIconPosition={expandIconPosition}
                        >
                            <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                                <div>{text}</div>
                            </Panel>
                        </Collapse> <br/>
                    </div>

                    <div className="archived-studios">
                        <Collapse
                            defaultActiveKey={['1']}
                            onChange={callback}
                            expandIconPosition={expandIconPosition}
                        >
                            <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                                <div>{text}</div>
                            </Panel>
                        </Collapse> <br/>
                        Expand Icon Position:{' '}
                        <Select value={expandIconPosition} onChange={this.onPositionChange}>
                            <Option value="left">left</Option>
                            <Option value="right">right</Option>
                        </Select>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
