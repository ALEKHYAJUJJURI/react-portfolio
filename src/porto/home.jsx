import { Link } from "react-router-dom"

export function Home(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'250px'}}>

                <Link className="btn btn-secondary " to="/skills">Skils</Link>
<a href="projects.jsx" target="_blank"><Link className="btn btn-secondary mx-2" to="/projects">Projects</Link></a>
<Link className="btn btn-secondary" to="/ContactMe">Contacts</Link>
            </div>
    )
}