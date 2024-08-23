import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div className="p-3" style={{height:'100vh'}}>
      <span className="fs-6 fw-bold">Personal Projects</span>
      <div
        className="d-flex flex-row justify-content-center align-content-center flex-wrap"
        
      >
        
        <div className={`rounded bg-dark text-white p-2 mx-2 my-2`}>
          <span>Todo Application</span>
          <br />

          <a href="https://todo-application-task.netlify.app">open</a>
        </div>
        <div className={`rounded bg-dark text-white p-2 mx-2 my-2 `}>
          <span>FakeStore API</span>
          <br />

          <a href="https://github.com/ALEKHYAJUJJURI/API-router">open</a>
        </div>
        <div className={`rounded bg-dark text-white p-2 mx-2 my-2`}>
          <span>Random Joke Generator</span>
          <br />

          <a href="https://alekhyajujjuri.github.io/Random-Joke/">open</a>
        </div>
        <div className={`rounded bg-dark text-white p-2 mx-2 my-2 `}>
          <span>Contact Form</span>
          <br />

          <a href="https://loginform-daifuku-258ed7.netlify.app">open</a>
        </div>
        <div className={`rounded bg-dark text-white p-2 mx-2 my-2`}>
          <span>Movie-Search</span>
          <br />

          <a href="https://alekhyajujjuri.github.io/movie-search-react/">
            open
          </a>
        </div>
        <div className={`rounded  bg-dark text-white p-2 mx-2 my-2`}>
          <span>Addition of Random Numbers</span>
          <br />
          <a href=" https://alekhyajujjuri.github.io/Addition-of-Random-Numbers/">
            open
          </a>
        </div>
      </div>
      <Link to="/" className="text-decoration-none"> <span className="bi bi-arrow-left"></span>Bact to Home</Link>
    </div>
  );
}
