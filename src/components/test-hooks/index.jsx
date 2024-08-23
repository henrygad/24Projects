import { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import useResizeWindow from "../../hooks/useResizeWindow";

const Index = () => {
  //divref.current.scrolIntoView({top, buttom, behevoir})
  //let top = divref.current.getBoundingClientRect().top
  //window.scrollTo({top, behavoir})
  const [open, setOPen] = useState(false);
  const openRef = useRef(null);

  const sizes = useResizeWindow()

 useClickOutSide(openRef, ()=>{setOPen(false);});

  const handleOnclick =()=>{
    setOPen(true);
  };


  return <div className="min-h-screen flex justify-center border-t pt-10">
    <div className="space-y-4 ">
      <div className="flex justify-center"><button className="bg-blue-800 py-2 px-3 rounded text-white" onClick={handleOnclick}>Open Text</button></div>
      {open && <div className="p-3 bg-gray-600" ref={openRef}>
        <h1 className="text-center text-2xl font-bold">Hi this is the content i what to open and click outside to closse it!</h1>
      </div>}
      <div>
        <span>width: {sizes.width}</span>
        <span>height: {sizes.height}</span>
      </div>
    </div>

  </div>
};

export default Index;
