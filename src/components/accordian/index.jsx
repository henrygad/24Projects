import { useState } from "react";
import data from "./data";

// create a single and multitude accordian selection

const Index = () => {
    const [enableMultitudeSelections, setEnableMultitudeSelections] = useState(false);
    const [multitudeSelections, setMultitudeSelections] = useState([]);
    const [selections, setSelections] = useState(null);

    const handleEnableMultitudeSelections = () => {

        if (!enableMultitudeSelections) {
            setMultitudeSelections([selections]);
            setSelections(null);
        } else {
            setMultitudeSelections([]);
            setSelections(multitudeSelections[multitudeSelections.length - 1]);
        }

        setEnableMultitudeSelections(!enableMultitudeSelections)
    };

    const handleMultitudeSelections = (_id) => {
        const cypSelectionArr = [...multitudeSelections]
        const getIndexOfLastSelection = cypSelectionArr.indexOf(_id)

        if (getIndexOfLastSelection !== -1) {
            // this _id selection alread exist, remove it fron the arr
            cypSelectionArr.splice(getIndexOfLastSelection, 1);
        } else {
            // else if this _id doesn't exist, add it
            cypSelectionArr.push(_id)
        };

        setMultitudeSelections(cypSelectionArr);
    };

    const handleSingleSelection = (_id) => {
        setSelections(_id === selections ? null : _id);
    };

    const handleOnClickEachItems = (_id) => {
        if (enableMultitudeSelections) {
            handleMultitudeSelections(_id);
        } else {
            handleSingleSelection(_id);
        };
    };

    return <div className=" flex flex-col gap-4 items-center mb-6">
        <div className="flex justify-center mb-3">
            <button className={`p-2 text-white rounded  cursor-pointer ${!enableMultitudeSelections ? ' bg-green-900' : 'bg-green-500'}`} onClick={handleEnableMultitudeSelections}>
                {!enableMultitudeSelections ? 'Multitude selections' : 'Single selection'}
            </button>
        </div>
        {data && data.length > 0 ?
            data.map((value, index) =>
                <div className=" bg-gray-400 p-4 text-center cursor-pointer" key={value._id} onClick={() => handleOnClickEachItems(value._id)}>
                    <div className=" flex gap-4 items-center">
                        <h3 className="first-letter:capitalize text-2xl font-bold  text-white">{value.question}</h3>
                        <span className="block text-blue-900 text-base font-bold">+</span>
                    </div>
                    {/* {enableMultitudeSelections ?
                        multitudeSelections.indexOf(value._id) !== -1 ? <p>{value.answer}</p> : null
                        : selections === value._id ?  <div className="bg-gray-200 max-w-[420px]"><p className="first-letter:capitalize text-wrap">{value.answer}</p></div> : null} */}
                    {multitudeSelections.indexOf(value._id) !== -1 ||
                        selections === value._id ?
                        <div className="bg-gray-200 max-w-[420px]"><p className="first-letter:capitalize text-wrap">{value.answer}</p></div> :
                        null
                    }
                </div>
            ) :
            <div>No data found</div>};
    </div>
};

export default Index;
