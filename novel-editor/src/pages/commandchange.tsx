import { useState, useEffect, useRef } from 'react';

const F_keys=Array.from({length:12},(_, i)=> `F${i + 1}`);
export const Snippmanager=(externalRef:React.RefObject<HTMLDivElement|null>)=>{
    const [snippets,setSnippets]=useState<{[key:string]:string}>(()=>{
        const savedsnippet=localStorage.getItem('site-snippets');
        return savedsnippet?JSON.parse(savedsnippet):{};
    })

    
   

    useEffect(()=>{
        localStorage.setItem('site-snippets',JSON.stringify(snippets))
    },[snippets]);
//キー入力時
    useEffect(()=>{
    const  Pickkeydown=(e:KeyboardEvent)=>{
        if(F_keys.includes(e.key)&&document.activeElement===externalRef.current){
            const text=snippets[e.key];
            if(!text)return;
            e.preventDefault();
//command入れ
            const selection=window.getSelection();
            if(!selection||!selection.rangeCount)return;
            const range=selection.getRangeAt(0);
            range.deleteContents();

            const catchCursor=text.includes("$0"); //＄０ー＞ return true or falus 
            const parts=text.split("$0"); //文字列を＄０で分割。
            const firstNode=document.createTextNode(parts[0]);
            const secondNode=parts[1]?document.createTextNode(parts[1]):null;

            range.insertNode(firstNode);
            if(secondNode) firstNode.after(secondNode);
//カーソル位置制御
            const newRange=document.createRange();
            if(catchCursor){
                newRange.setStartAfter(firstNode);
                newRange.setEndAfter(firstNode);
            }else{
                const lastNode=secondNode||firstNode;
                newRange.setStartAfter(lastNode);
                newRange.setEndAfter(lastNode);
            }
            selection.removeAllRanges();
            selection.addRange(newRange);
           externalRef.current?.dispatchEvent(new Event('input', { bubbles: true }));
        }
    };
    window.addEventListener('keydown',Pickkeydown);
    return()=>window.removeEventListener('keydown',Pickkeydown);
    },[snippets,externalRef]);

    const updateSnippets=(key:string,value:string)=>{
        setSnippets(prev=>({...prev,[key]:value}));
    };
    return{snippets,updateSnippets,F_keys};

};
