import './App.css';
import myImage from './5.png';

function App() {
  return (
    <div style={{backgroundImage:`url(${myImage})`,
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"1080px",
    backgroundSize: "fit"}}>
      Hello WOrld
      
    </div>
  );
}

export default App;