import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Avatar, Button, PaginationItem, Paper } from '@mui/material';
import './home.css'

export function ProtfolioIndex(){

    return(
        
        <div className=''>

            <Paper className='bg-con' elevation={0} sx={{backgroundImage:'url("")',backgroundSize:'cover'}}>
                <nav className='d-flex justify-content-between p-2'>
                    <div>
                        <span className='d-flex'>
                            <span className='mx-2 fw-bold text-danger' style={{fontFamily:'',fontStyle:'italic',textShadow: '3px 3px #fbfbfb'}}>alekhya.</span></span>
                    </div>
                    <div>
                        <a href='#sectionSkills' className='text-decoration-none btn btn-light'>Skills</a>
                        <a href='#sectionProjects' className='text-decoration-none btn btn-light'>Projects</a>
                        <a href=''></a>
                        <a href='Alekhya_J.pdf' className='text-decoration-none btn btn-light '>Resume<a className='' href="Alekhya_J.pdf" download>⬇️</a></a>
                    </div>
                </nav>
                <div id="sectionHome" className='container-fluid' style={{height:'100vh'}}>
                    <div className='row p-4 align-items-center d-flex justify-content-center'>
                        <div className='col-12 col-md-6 p-2' >
                           
                          <span style={{fontFamily:'Apple Color Emoji'}} className='fw-bold'>I am Alekhya.</span>
                           <h2 style={{fontFamily:'Apple Color Emoji'}}>
                            A Web Developer who creates UI rich perfomant websites and web applications.  
                            </h2>
                           <a className='button' href='#sectionAbout'> <button className='btn btn-primary'>About Me</button></a>
                          
                        </div>
                        <div className='col-12 col-md-6'>
                           <div className='d-flex align-items-center justify-content-center py-2'>
                           <img className='rounded' src="profile2.jpg" style={{width:'20%'}}/>
                           </div>
                        </div>
                    </div>
                </div>
                
            </Paper>
            <div id='sectionAbout' className='bg-secondary' style={{height:'100vh'}}>
                <h5>About Me</h5>
                <h6>
                Detail-oriented Web Developer with hands-on experience in building dynamic and responsive web applications using React JS, JavaScript, and modern development tools. Certified in Git, Web Development, and AI Fundamentals. Strong background in developing user-friendly interfaces and delivering projects on time. A self-motivated individual with excellent time management and discipline, eager to contribute technical expertise to a forward-thinking team
                </h6>
            </div>
            <div id="sectionSkills" className='bg-warning container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                    <div className='p-4 align-items-center'>
                            <h3>Skills</h3>
                            <ul className='list-unstyled'>
                                <li>- Good Knowledge on HTML, CSS and JavaScript</li>
                                <li>- Creating Dynamic and Responsive designs</li>
                                <li>- React Js and React Materia UI </li>
                                <li>- Libraries: Bootstrap, Formik, Moment</li>
                                <li>- Python and SQL</li>
                                <li>- GitHub Pages</li>
                                </ul>
  
                    </div>
                </div>
               <div id="sectionProjects" className='bg-info' style={{height:'100vh'}}>
                <h2 className=''>Projects</h2>
               <div className='d-flex flex-row justify-content-center align-content-center flex-wrap' style={{height:'100vh'}}>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2`}>
                                <div className='card-header'>
                                    <h4>Todo Application</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://todo-application-task.netlify.app'>open</a>
                                </div>
                                
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 `}>
                                <div className='card-header'>
                                    <h4>FakeStore API</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://github.com/ALEKHYAJUJJURI/API-router'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2`}>
                                <div className='card-header'>
                                    <h4>Random Joke Generator</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/Random-Joke/'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 `}>
                                <div className='card-header'>
                                    <h4>Contact Form</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://loginform-daifuku-258ed7.netlify.app'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2`}>
                                <div className='card-header'>
                                    <h4>Movie-Search</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/movie-search-react/'>open</a>
                                </div>
                                
                            </div>
                            
                             <div className={`card bg-dark text-white p-2 mx-2 my-2`}>
                                <div className='card-header'>
                                    <h4>Addition of Random Numbers</h4>
                                </div>
                                <div className='card-body'>
                                    <a href=' https://alekhyajujjuri.github.io/Addition-of-Random-Numbers/'>open</a>
                                </div>
                                
                            </div>
                        </div>
               </div>
          
            
        </div>
    )
}