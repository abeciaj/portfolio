import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setdone] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_vifaw7u', 
                'template_2na7v4y', 
                formRef.current, 
                'user_3j5HthlrNp4SRybNtcbQk')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
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
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" 
                            placeholder="Name" 
                            name="user_name" 
                        />
                        <input type="text" 
                            placeholder="Subject" 
                            name="user_subject" 
                        />
                        <input type="text" 
                            placeholder="Email" 
                            name="user_email" 
                        />
                        <textarea rows="5" 
                            placeholder="Message" 
                            name="message">
                        </textarea>
                        <button>
                            Submit
                        </button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
