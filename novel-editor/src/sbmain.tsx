import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePages from "./pages/createpages";
import SettingPages from "./pages/settingpages";
import MainPages from "./pages/mainpages";
import BookPages from "./pages/bookpages";


export interface Novel{
  id:string;
  title:string;
  contents:string;
}




function App() {

    const [novels, setnovel] = useState<Novel[]>(()=>{
      const savedNovels = localStorage.getItem("myNovels");
      return savedNovels ? JSON.parse(savedNovels) : [];
    })

   
    
    const addNovel=(newid:string,newtitle:string,newcontents:string)=>{
    if(!newid)return;

    setnovel([...novels,{id:newid,title:newtitle,contents:newcontents}]);
  }
   
  const updateNovel=(id:string,title:string,contents:string)=>{

    setnovel(novels.map((n)=>{
      if(n.id===id){
        return{...n,title:title,contents:contents}

      }else{return n;}

    }))
  }
  useEffect(() => {
  
  localStorage.setItem("myNovels", JSON.stringify(novels));
}, [novels]);


const deleteNovel=(idtoDelete:string)=>{
 
  if(window.confirm("本当に削除しますか？")){
   setnovel(novels.filter(novels=>novels.id!==idtoDelete)) ;
};}

return(



  
    <BrowserRouter>
    <Routes>
  
    
     <Route path="/" element={<MainPages novels={novels} deleteNovel={deleteNovel} />} />
     <Route path="/settingpages" element={<SettingPages/>}/>
     <Route path="/createpages" element={<CreatePages addNovel={addNovel}/>}/>
     <Route path="/novel-editor/book/:id"   element={<BookPages novels={novels} updateNovel={updateNovel} />}/>

    </Routes>
    </BrowserRouter>
  
);


}

export default App;
