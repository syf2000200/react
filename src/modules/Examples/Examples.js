import React, {
    Component
} from 'react';
import * as THREE from 'three';
import './Examples.css';

/**
 * @name 一个简单的列表点击实现
 * @desc setState方法可以改变this.state内的状态值
 */
class Examples extends Component {
    constructor(props) { //constructor为react组件的构造方法，类似传统的构造函数，对象原型
        super(props);
        this.state = { //设置组件自身的状态初始化数据,
        }
    }

    /**
     * 初始化方法
     */
    initThree() {
        //创建场景
        let scene = new THREE.Scene();
        //创建镜头
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        //渲染
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        //创建物体
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        //创建材质
        let material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        let cube = new THREE.Mesh(geometry, material);
        //添加物体到场景
        scene.add(cube);

        //调整摄像机z轴位置
        camera.position.z = 5;

        //创建动画
        let animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;

            renderer.render(scene, camera);
        }
        animate();
    }

    componentDidMount() {
        this.initThree();
    }

    render() { //用于页面渲染
        return (
            <div id = "WebGL-output" ></div>
        )
    }
}

export default Examples;