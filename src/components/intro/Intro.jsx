import "./intro.css";
import Beels from "../../img/beels.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2>
                    <h2 className="i-name">Jayllan Abecia</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Devops SysAdmin</div>
                            <div className="i-title-item">IT Support</div>
                            <div className="i-title-item">IT Support</div>
                            <div className="i-title-item">Freelancer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua.
                    </div>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Beels} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
