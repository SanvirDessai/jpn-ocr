import './App.css';
import { Canvas } from './Components/canvas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h>
          Japanese OCR
        </h>
        <p style={{ fontSize: "18px", marginBottom: "50px"}}>
            I've been spending some time learning Japanese and I wanted an easy way to test whether I could write the characters properly.
            So here's a small Optical Character Recognition (OCR) web app which does just that (kind of &#128517;), hacked together with&nbsp;
            <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">CRA</a>, <a href="https://www.npmjs.com/package/react-sketch-canvas" target="_blank" rel="noopener noreferrer">react-sketch-canvas</a>
            &nbsp;and <a href="https://github.com/naptha/tesseract.js" target="_blank" rel="noopener noreferrer">Tesseract.js</a>
        </p>
        <Canvas />
      </header>
    </div>
  );
}

export default App;
