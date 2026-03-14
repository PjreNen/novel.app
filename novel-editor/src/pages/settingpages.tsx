import {  Link } from 'react-router-dom';
import "../App.css";
import { Areacontext, Areaoder } from '../Chang.css';
import { useContext } from 'react';

const SettingPages = () => {
   
   
    const context=useContext(Areacontext);
    const currentclass=context?.areaClass||'setting-page';
   
   
   
   
    return (
        
        <div className={currentclass}>
            <h1 className="config-area">設定</h1>


            <button onClick={context?.setPagetoDafult}>
                Dafult
            </button>
             <button onClick={context?.setPageoWhite}>
                White
            </button>
             <button onClick={context?.setPagetoBlack}>
                Black
            </button>
             <button onClick={context?.setPagetoLightGreen}>
                L.Green
            </button>
        

        <Link to="/" className='Create-area'>
    戻る
    </Link>
</div>
    )
}

export default SettingPages;