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
            <h2>テーマ設定</h2>
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
        <h2>フォントサイズ設定</h2>
        <input
        type="Number"
         value={context?.fontSize} 
      onChange={(e) => context?.updateFontSize(Number(e.target.value))} 
    />

        <Link to="/" className='Create-area'>
    戻る
    </Link>
</div>
    )
}

export default SettingPages;