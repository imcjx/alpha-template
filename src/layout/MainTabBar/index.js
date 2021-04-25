import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import mtb from './index.module.css'

export default class MainTabBar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <ul>
                        <li><NavLink to="/main/post">1</NavLink></li>
                        <li><NavLink to="/main/task">2</NavLink></li>
                        <li><NavLink to="/main/notice">3</NavLink></li>
                        <li><NavLink to="/main/profile">4</NavLink></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
