import {  Link } from 'react-router-dom';
import "../App.css";

const CreatePages = ({addNovel}:{addNovel:(id:string,title:string,contents:string)=>void}) => {
    return (
         <div className="main-page">
            <button onClick={() => addNovel("id", "title", "contents")}>新規作成</button>
        
    
    
   
   <Link to="/" className='config-area'>
    ＋
    </Link>
    
    </div>
    
        )
}

export default CreatePages;