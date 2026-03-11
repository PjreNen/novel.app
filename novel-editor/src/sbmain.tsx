
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePages from "./pages/createpages";
import SettingPages from "./pages/settingpages";
import MainPages from "./pages/mainpages";

function App() {
  

  return (
  
    <BrowserRouter>
    <Routes>
  
    
     <Route path="/" element={<MainPages/>} />
     <Route path="/settingpages" element={<SettingPages/>}/>
     <Route path="/createpages" element={<CreatePages/>}/>
          
    </Routes>
    </BrowserRouter>
  
);
    
  
}

export default App;
