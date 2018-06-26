import React, { Component } from 'react';
import './ThreeDemo.css';

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
            <div>1234</div>
        )
    }
}

export default Collision;