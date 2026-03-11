
import "../App.css";
import {  Link } from 'react-router-dom';




const MainPages = () => {
    return (
           <div className="main-page">
   
   <Link to="settingpages" className='config-area'>
    ⚙
    </Link>
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

   <Link to="/createpages" className='Create-area'>
    ＋
    </Link>
    
    
  </div>          
        
    )
}

export default MainPages;