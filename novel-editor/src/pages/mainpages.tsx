import type {Novel} from "../sbmain";
import "../App.css";
import {  Link } from 'react-router-dom';





const MainPages = ({novels}:{novels:Novel[]}) => {
    
 

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
      {novels.map((Novel)=>(

        <li key={Novel.id}className='li' >{Novel.title}</li>
        
      ))}
      </ul>
    </div>

   <Link to="/createpages" className='Create-area'>
    ＋
    </Link>
    
    
  </div>          
        
    )
}

export default MainPages;