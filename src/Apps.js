import App from "./App"
function Apps() {
    let name = "Alekhya" , name1 = "Begam" , name2 = "Sailu"
    let age = 21 ,age1 = 22, age2 = 23
    let movie = "Leo" , movie1= "beast" , movie2 = "master"
    
    return(
        
        <div>
            <App na = {name} age={age} movie={movie}/>
            <App na = {name1} age={age1} movie={movie1}/>
            <App na = {name2} age={age2} movie={movie2}/>
            
        </div>
    )
}
export default Apps