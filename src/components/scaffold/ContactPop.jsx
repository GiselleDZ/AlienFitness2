import React, { Component } from "react"

export default class ContactPop extends Component {

    render(){
        return(
            <section className="popup" id="contactpopup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="" className="popup__left--img" />
                        <img src="" alt="black on black mask, atop grey whethered wood" className=" popup__left--img" />
                    </div>
                    <div className="popup__right">
                        <a href="" className="popup__close">&times;</a>
                        <h2 className="heading-secondary heading-secondary--light u-margin-bottom-smallmedium">
                            Insert some text
                        </h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            more text
                        </h3>
                        <p className="popup__text u-margin-bottom-medium">
                            and some more text, also contact gisellezatonyl@gmail.com
                        </p>
                        <button className="btn btn--white">a good cta</button>
                    </div>
                </div>
            </ section>
        )
    }
}
