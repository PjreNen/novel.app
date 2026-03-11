import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePages from "./pages/createpages";
import SettingPages from "./pages/settingpages";
import MainPages from "./pages/mainpages";

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
   
  useEffect(() => {
  
  localStorage.setItem("myNovels", JSON.stringify(novels));
}, [novels]);


    
    
  



return(



  
    <BrowserRouter>
    <Routes>
  
    
     <Route path="/" element={<MainPages novels={novels} />} />
     <Route path="/settingpages" element={<SettingPages/>}/>
     <Route path="/createpages" element={<CreatePages addNovel={addNovel}/>}/>
          
    </Routes>
    </BrowserRouter>
  
);


}

export default App;
