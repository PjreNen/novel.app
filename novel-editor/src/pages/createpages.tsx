import {  Link } from 'react-router-dom';
import "../App.css";
import{useState} from 'react';
import { Areaoder,Areacontext } from '../Chang.css';
import { useContext } from 'react';


const CreatePages = ({addNovel}:{addNovel:(id:string,title:string,contents:string)=>void}) => {
    
 const context=useContext(Areacontext);
    const currentclass=context?.areaClass||'create-page';

      const [titlename,settitle]=useState("")
       
      const addtitle=()=>{
        if(!titlename)return
        addNovel(Date.now().toString(),titlename,"contents");
        settitle("")
      };
    return(
        <div className={currentclass}>
           <input
           type="text"
           value={titlename}
           onChange={(e)=>settitle(e.target.value)}
           onKeyDown={(e)=>{
            if(e.key==='Enter')addtitle();
           }}
           />
            <button onClick={() => addtitle()}>新規作成</button>
        
    
    
   
   <Link to="/" className='config-area'>
    戻る
    </Link>
    
    </div>
    
        
      )}

export default CreatePages;