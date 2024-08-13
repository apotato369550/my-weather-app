import React from 'react'
import Weather from './components/Weather'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Weather />
      </div>
    </>
  );
}

export default App