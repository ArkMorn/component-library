import React from 'react';
import './style/index.scss'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'


const App=()=>{
  return (
    <div className="App">
      <Menu defaultIndex={0}  onSelect={(index)=>{console.log(index)}} mode='horizontal'>
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1}>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
