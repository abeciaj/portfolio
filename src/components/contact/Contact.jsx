import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">
                        <h1>
                            Lest's Discuss your project
                        </h1>   
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" 
                                src={Phone} 
                                alt="" 
                            />
                            +1 234
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" 
                                src={Email} 
                                alt="" 
                            />
                            test@test.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" 
                                src={Address} 
                                alt="" 
                            />
                            <p>philippines</p>
                        </div>
                    </div>
                    
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem ipsum dolor sit amet</b>, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna 
                        aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
