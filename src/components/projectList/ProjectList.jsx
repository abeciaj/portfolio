import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
    return (
        <div>
            <div>
            <div className="pl">
                <div className="pl-text">
                    <h1 className="pl-title">Lorem Ipsum</h1>
                    <p className="pl-desc">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna 
                        aliqua.
                    </p>
                </div>
                <div className="pl-list">
                    {projects.map((item) => (
                        <Project key={item.id} 
                            img={item.img} 
                            link={item.link}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectList
