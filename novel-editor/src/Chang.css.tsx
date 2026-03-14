import { createContext, useState, type ReactNode,useEffect } from 'react';

interface AreaType {
  areaClass: string | null; 
  setPageoWhite: () => void;
  setPagetoBlack:()=>void;
  setPagetoDafult:()=>void;
  setPagetoLightGreen:()=>void;
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
    return(
        <Areacontext.Provider value={{areaClass,setPageoWhite,setPagetoBlack,setPagetoDafult,setPagetoLightGreen}}>
           { children }
        </Areacontext.Provider>
    );
};