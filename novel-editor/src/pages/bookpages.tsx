import { useParams } from 'react-router-dom';
import type {Novel} from '../sbmain';
import { useState ,useEffect,useRef} from 'react'
import {  Link } from 'react-router-dom';
import { Areacontext } from '../Chang.css';
import { useContext } from 'react';
import { Snippmanager } from './commandchange';

const BookPages=({novels,updateNovel}:{novels:Novel[],updateNovel:(id:string,title:string,contents:string)=>void})=>{
    
    const context=useContext(Areacontext);
    const currentclass=context?.areaClass||'book-page';
   
   
   const {id}=useParams();
   
       const FoundId=novels.find((Novel)=>Novel.id===id);
        if(!FoundId)return(<div>データがありません</div>)

             const inputref=useRef<HTMLDivElement>(null);
              useEffect(()=>{
               if(inputref.current){
                  inputref.current.innerText=FoundId.contents;
               }

             },[])

             const {snippets,updateSnippets,F_keys}=Snippmanager(inputref);



        return(
            <div className={currentclass}>

               <div style={{padding:'20px',maxWidth:'800px',margin:'0 auto'}}>
                  <h2>コマンド設定</h2>
                  <div className='command-area'>
                     {F_keys.map(key=>(
                        <div key={key}style={{display:'flex',flexDirection:'column'}}>
                           <span style={{fontSize:'12px',fontWeight:'bold'}}>{key}</span>
                           <input
                           type="text"
                           value={snippets[key]||''}
                           onChange={(e)=>updateSnippets(key,e.target.value)}
                           />
                           </div>
                     ))}
                  </div>
                  

               <div className='title-area'>{FoundId.title}</div>
              <div  className="contents-area" style={{ fontSize: `${context?.fontSize}px` }} ref={inputref} contentEditable
              onInput={()=>{
               
               updateNovel(FoundId.id,FoundId.title,inputref.current?.innerText||"");
               
            }
              }
              
              
                />

               <Link to="/" className='config-area'>
               戻る
               </Link>
               </div>



            </div>
        )



}
 






export default BookPages;