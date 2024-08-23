import { Link } from "react-router-dom"

export function Skills(){
    return(
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='p-3 align-items-center'>
                <span className="fs-6 fw-bold">Skills</span>
                <ul className='list-unstyled'>
                    <li>- Good Knowledge on HTML, CSS and JavaScript</li>
                    <li>- Creating Dynamic and Responsive designs</li>
                    <li>- React Js and React Materia UI </li>
                    <li>- Libraries: Bootstrap, Formik, Moment</li>
                    <li>- Python and SQL</li>
                    <li>- GitHub Pages</li>
                </ul>
                <Link to="/" className="text-decoration-none"><span className="bi bi-arrow-left"></span>Back to home</Link>
         </div>
       
    </div>
    )
}