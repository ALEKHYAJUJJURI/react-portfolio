import { Link } from "react-router-dom";


export function About(){
    return(
        <div style={{height:'100vh',}} className="p-3">
            <span className="fs-5 fw-bold ">ABOUT ME</span>
            <blockquote className="blockquote">
                <span>I am a recent graduate.Self-motivated, adaptable, and reliable front end web developer with strong foundations in HTML, CSS, JavaScript, Dynamic and Responsive websites. Detail-oriented and efficient React js developer skilled in building 
                    custom websites and templates. Supportive team player
                     with strong data analysis skills. 
                </span>
                <Link to="/">Back to Home</Link>
            </blockquote>
            
        </div>
    )
}