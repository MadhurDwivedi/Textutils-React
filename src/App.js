import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'; 
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
}from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
      //document.title = "Textutils- Dark Mode";
      //setInterval(() => {
      //  document.title = 'Textutils is amazing';
      //}, 2000);
      //setInterval(() => {
      //  document.title = 'Install Textutils now';
      //}, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
      //document.title = "Textutils- Light Mode";
    }
  }
  return (
    <>
    <Router>
    {/*<Navbar title= "Textutils" aboutText= "About textutils"/>*/}
    {/*<Navbar/>*/}
    <Navbar title= "Textutils" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/*/users --> component 1
    /users/home --> component 2*/}
    {/*yahan per humne exact esliye use kiya hai because react partial matching karta hai and humein exact matching karane ke liye means ki home per jana hai ya users per ye dono
    alag alag hain then*/}
          <Route exact path="/about" element={<About/>}>
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert = {showAlert} heading="Textutils - Word counter, character counter, Remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  ); 
}
export default App;