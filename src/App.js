import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const [gradient, setGradient] = useState([{color: '#fff76b'}, {color: '#ff4013'}, {color: '#0042aa'}, {rotation: -120}]);
  const [pourcent, setPourcent] = useState([{pourcent: -1}, {pourcent: 47}, {pourcent: 116}]);
  const [color, setColor] = useState('');

  const handleChangeGradient = (event, index) => {
    setGradient(gradient.map((item, i) => i === index ? event : item));
  }

  const handleChangePourcent = (event, index) => {
    setPourcent(pourcent.map((item, i) => i === index ? event : item));
  }

  useEffect(() => {
    setColor(`linear-gradient(${gradient[3].rotation}deg, ${gradient[0].color} ${pourcent[0].pourcent}%, ${gradient[1].color} ${pourcent[1].pourcent}%, ${gradient[2].color} ${pourcent[2].pourcent}%)`);
  }, [gradient, pourcent]);



    return (
      <div className="App">
          <h1>Css Gradient</h1>


        <div className='c-config'>
          <div className="card container">
            <div className="row">
              <div className="col">
                <p>Breakpoint 1</p>
                <input type="number" name="rbg" value={pourcent[0].pourcent} className="form-control" onChange={(e) => handleChangePourcent({pourcent: e.target.value}, 0)}/>
                <p>Color 1</p>
                <input type="color" id="head" name="head" value={gradient[0].color} className="form-control" onChange={(e) => handleChangeGradient({color: e.target.value}, 0)}/>
              </div>


              <div className="col">
                <p>Breakpoint 2</p>
                <input type="number" name="rbg" value={pourcent[1].pourcent} className="form-control" onChange={(e) => handleChangePourcent({pourcent: e.target.value}, 1)}/>
                <p>Color 2</p>
                <input type="color" id="head" name="head" value={gradient[1].color} className="form-control" onChange={(e) => handleChangeGradient({color: e.target.value}, 1)}/>
              </div>

            </div>

            <div className="row">
              <div className="col">
                <p>Breakpoint 3</p>
                <input type="number" name="rbg" value={pourcent[2].pourcent} className="form-control" onChange={(e) => handleChangePourcent({pourcent: e.target.value}, 2)}/>
                <p>Color 3</p>
                <input type="color" id="head" name="head" value={gradient[2].color} className="form-control" onChange={(e) => handleChangeGradient({color: e.target.value}, 2)}/>
              </div>


              <div className="col">
                <p>Rotation</p>
                <input type="range" min="0" max="360" value={gradient[3].rotation} className="form-control" id="myRange" onChange={(e) => handleChangeGradient({rotation: e.target.value}, 3)}/>
              </div>
            </div>


          </div>
        </div>

        <br/>

        <div className="c-gradient container" style={{ background: color, width: '100%', height: '200px'}} >
        </div>
        <br/>
        <div className='code-css'>
        <p>Code css :</p>
        <span>background-image: {color}</span>
        </div>
      </div>
    );

}

export default App;
