import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  if(localStorage.getItem('lang') === "sv-se"){
    return(
      <div>
      <h1>Välkommen till TTG´s hemsida</h1>
      <h2>Om TTG</h2>
      <h2>Vill du gå med i TTG</h2>
      <h2>Kontakta TTG</h2>
      </div>
    )
  }
  else if(localStorage.getItem('lang') === "en-us"){
    return(
      <>
     
      <p>Looks like this page isn't finished yet </p>
      <button onclick="chooseSv">Switch to swedish</button>
      
      </>
    )
  }
  else{
  return (
    
    <div id="centralize">
      <h2>Välj ditt språk / Select your language</h2>
        <button onclick="chooseSv">Svenska</button>
        <button>English (limited)</button>
        
        <script>
        function chooseSv(){
          
        localStorage.setItem('lang', "sv-se")
        
        }
        function chooseEn(){
          
        localStorage.setItem('lang', 'en-us')
        
        }
        </script>
      
    </div> 
  )
  }
  
  
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />); 


