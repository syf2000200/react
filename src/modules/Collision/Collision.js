import React, { Component } from 'react';
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

/**
 * @name 一个简单的列表点击实现
 * @desc setState方法可以改变this.state内的状态值
 */
class Collision extends Component {
    constructor (props) {   //constructor为react组件的构造方法，类似传统的构造函数，对象原型
        super(props);
        this.state = {  //设置组件自身的状态初始化数据,
        }
    }

    render () { //用于页面渲染
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

export default Collision;