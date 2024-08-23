
const Displaydropdown = ({ arrSugestions = [], callBack = (event) => null }) => {
    
    return <div>
        {arrSugestions &&
            arrSugestions.length ?
            <ul className="flex flex-col items-start gap-1 bg-gray-500 text-white rounded p-2">
                {
                    arrSugestions.map((item) =>
                        <li
                            key={item}
                            onClick={callBack}
                            className="border-b cursor-pointer"
                        >{item}</li>
                    )
                }
            </ul> :
            null
        }
    </div>
};

export default Displaydropdown;
