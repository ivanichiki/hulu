import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import styled from 'styled-components/macro';
import './style.css'
function App() {

const [nightTheme, setnightTheme] = useState(false)


useEffect(()=> {
  
  let raw = localStorage.getItem('nightTheme')
  setnightTheme(JSON.parse(raw))
    
},[])

useEffect(()=> {
  localStorage.setItem('nightTheme',JSON.stringify(nightTheme))

},[nightTheme])




  return (
    <div className={`Body${nightTheme?' Night':''}`}>
      <Header setnightTheme={setnightTheme} nightTheme={nightTheme}/>
      <ContentWrapper>

     
      
      </ContentWrapper>
    </div>
  );
}

export default App;


const ContentWrapper = styled.div`
padding-top:72px;
`