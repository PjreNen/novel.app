import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className="main-page">
   <div className='config-area'>
    <button>⚙</button>
    </div>

    
    <div>
      <input type="text" />
    </div>

    
    <div className='scroll-area'>
      <ul >
        <li className='li' >小説のタイトル1</li>
        <li>小説のタイトル2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
        <li>3</li>
      </ul>
    </div>

   <div className='Create-area'>
    <button>＋</button>
    </div>
  </div>
);
    
  
}

export default App
