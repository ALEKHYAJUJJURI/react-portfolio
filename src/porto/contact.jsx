import { Link } from "react-router-dom";

export function ContactMe(){
    return(
        <div className="p-3" style={{height:"100vh"}}>
            <label className="fs-6 fw-bold py-2">Contacts</label><br/>
            
            <footer style={{height:'200px'}}>
                <div className="">
                    
                    <span className="bi bi-globe text-dark fw-bold fs-6">Social</span>
                    <div>
                    <a href="https://www.linkedin.com/in/alekhya-jujjuri-4298ba235/" className="bi bi-linkedin"></a>
                    <a href="https://github.com/ALEKHYAJUJJURI" className="bi bi-github mx-2"></a>
                    <a href="https://www.frontendmentor.io/profile/ALEKHYAJUJJURI" className="">FM</a>
                    </div>
                    </div>

                <div>
                    <span className="bi bi-telephone text-dark fw-bold fs-6">Contacts</span>
               <div className="d-flex flex-column">
               <a className="text-decoration-none" href="tel:+917075685295">📞7075685295</a>
               <a className="text-decoration-none" href="mailto:jujjurialekhya123@gmail.com">✉️jujjurialekhya123@gmail.com</a>
               </div>
                </div>
                <address>
                        <span className="text-dark fw-bold fs-6">Current Address</span>
                        <div>
                        <span>Kukatpally, Hyderabad</span><br/>
                        <span>500072</span>
                        </div>
                    </address>
            </footer>

        <Link to="/" className="bi bi-arrow-left text-decoration-none">Bact to Home</Link>
        </div>
    )
}