import {  Link } from 'react-router-dom';
import "../App.css";
import{useState} from 'react';
 



const CreatePages = ({addNovel}:{addNovel:(id:string,title:string,contents:string)=>void}) => {
    


      const [titlename,settitle]=useState("")
       
      const addtitle=()=>{
        if(!titlename)return
        addNovel(Date.now().toString(),titlename,"contents");
        settitle("")
      };
    return(
        <div className="main-page">
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
    ＋
    </Link>
    
    </div>
    
        
      )}

export default CreatePages;