import List from './Componants/List';
import './App.css';
import {dates} from "./Componants/Constane" 
import { useState } from "react";


function App() {
  const [list , setList] = useState([]);

 function Handeladd(){
  setList(dates)
 }
function Handelremove(){
  setList([])
}
  return (
    <div className="App h-screen color-body " >
     <div className='container relative m-auto'>
     <div className='relative flex flex-col pt-24 gap-7 widthcus m-auto' >
     <h2 className='mt-5 self-start  text-4xl font-bold'>لديك اليوم مواعيد </h2>
     <List person={list} />
     <div className='flex items-center justify-between  '> 
     <button  className=" rounded text-white shadowcus text-2xl bg-lime-900 p-5 px-14 " onClick={Handeladd}>عرض المواعيد </button>
     <button className=" rounded text-white shadowcus text-2xl bg-lime-900 p-5 px-14 " onClick={Handelremove} >مسح الكل</button>
     </div>
     </div>
     </div>
    </div>
  );
}

export default App;
