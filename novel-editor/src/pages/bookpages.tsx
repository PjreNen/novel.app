import { useParams } from 'react-router-dom';
import type {Novel} from '../sbmain';
import { useState ,useEffect} from 'react'
import {  Link } from 'react-router-dom';
const BookPages=({novels,updateNovel}:{novels:Novel[],updateNovel:(id:string,title:string,contents:string)=>void})=>{
    const {id}=useParams();
   
       const FoundId=novels.find((Novel)=>Novel.id===id);
        if(!FoundId)return(<div>データがありません</div>)

             const [newcontents,setnewContents]=useState(FoundId.contents);

             useEffect(()=>{
                updateNovel(FoundId.id,FoundId.title,newcontents)
             },[newcontents])



        return(
            <div className='main-page'>
               <div className='title-area'>{FoundId.title}</div>

              
                <textarea  className='contents-area'
                value={newcontents}
                onChange={(e)=>setnewContents(e.target.value)}
              
              
              />
                

               <Link to="/" className='config-area'>
               戻る
               </Link>



            </div>
        )



}
 






export default BookPages;