import type {Novel} from "../sbmain";
import "../App.css";
import {  Link } from 'react-router-dom';
import { Areaoder,Areacontext } from '../Chang.css';
import { useContext } from 'react';



const MainPages = ({novels,deleteNovel}:{novels:Novel[],deleteNovel:(idtoDelete:string)=>void}) => {

   const context=useContext(Areacontext);
    const currentclass=context?.areaClass||'main-page';
    
  

  return (
           <div className={currentclass}>
   
   <Link to="settingpages" className='config-area'>
    ⚙
    </Link>
    <div>
      <input type="text" />
    </div>

    
    <div className='scroll-area'>
      <ul >
      {novels.map((Novel)=>(

        <li key={Novel.id} className="li"><Link to={`/novel-editor/book/${Novel.id}`} >{Novel.title}</Link>
        <button onClick={() => deleteNovel(Novel.id)}>🗑️</button></li>
        
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