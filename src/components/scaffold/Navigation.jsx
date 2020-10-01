import React, { Component } from "react"

export default class Navigation extends Component {
    constructor(){
        super()
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav(e){
        const checkbox = document.getElementById('navi-toggle')

        if(checkbox.checked === true){
            checkbox.checked = false
        } else {
            checkbox.checked = true
        }
    }

    render(){
        return(
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button"> 
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ol className="navigation__list">
                        <li className="navigation__items">
                            <a href="#footer" onClick={e => this.toggleNav(e)} className="navigation__link navigation__link--small">Contact</a>
                        </li>
                    </ol>
                </nav>
            </div>
        )
    }
}