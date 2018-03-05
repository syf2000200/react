import React, { Component } from 'react';
import './Examples.css';

/**
 * @name 一个简单的列表点击实现
 * @desc setState方法可以改变this.state内的状态值
 */
class Examples extends Component {
    constructor (props) {   //constructor为react组件的构造方法，类似传统的构造函数，对象原型
        super(props);
        this.state = {  //设置组件自身的状态初始化数据,
            list: [1, 2, 3],
            activeIndex: -1
        }
    }

    activate (index) {  //组件内的方法
        this.setState({ activeIndex: index });  //setState用于修改设置this.state的初始化数据
    }

    render () { //用于页面渲染
        const { list, activeIndex } = this.state;
        const lis = list.map(
            (item, index) => {
                const cls = (index === activeIndex) ? 'active' : '';
                return (
                    <li
                        key={ index }
                        className={ cls }
                        onClick={ () => this.activate(index) }>
                        { item }
                    </li>
                )
            }
        );
        return (
            <ul>{ lis }</ul>
        )
    }
}

export default Examples;