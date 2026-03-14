import { createContext, useState, type ReactNode,useEffect } from 'react';

interface AreaType {
  areaClass: string | null; 
  setPageoWhite: () => void;
  setPagetoBlack:()=>void;
  setPagetoDafult:()=>void;
  setPagetoLightGreen:()=>void;
  fontSize:number;
  updateFontSize:(newSize:number)=>void;
}

export const Areacontext = createContext<AreaType | undefined>(undefined);

export const Areaoder=({children}:{children:ReactNode})=>{
    const[areaClass,setAreaClass]=useState<string|null>(()=>{
         return localStorage.getItem('user-area-class');
    });

   useEffect(() => {
    if (areaClass !== null) {
      localStorage.setItem('user-area-class', areaClass);
    }
  }, [areaClass]);

    const setPagetoDafult=()=>setAreaClass('main-page');
    const setPageoWhite=()=>setAreaClass('white-page');
    const setPagetoBlack=()=>setAreaClass('black-page');
    const setPagetoLightGreen=()=>setAreaClass('lightgreen-page')

    const[fontSize,setFontSize]=useState<number>(()=>{
         const savedFontSize=localStorage.getItem('user-font-size');
        return savedFontSize?Number(savedFontSize):30;
    });
    useEffect(()=>{
        localStorage.setItem('user-font-size',String(fontSize))
    },[fontSize])
    const updateFontSize=(newSize:number)=>{
        setFontSize(newSize);
        
    }

    return(
        <Areacontext.Provider value={{areaClass,setPageoWhite,setPagetoBlack,setPagetoDafult,setPagetoLightGreen,fontSize,updateFontSize}}>
           { children }
        </Areacontext.Provider>
    );
};