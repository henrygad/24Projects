import { useState } from "react";

// create a dynamic tabs to display each tab at a given time


const Tabs = ({ arrTab = [], style = {
    parentMenuContainerStyle,
    parentListsMenuStyle,
    listMenusStyle,
    parentDisplayTabContainerStyle,
}, callBack = (getCurrentTabIndex) => null }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleToggleTabs = (getCurrentTabIndex) => {
        setCurrentTabIndex(getCurrentTabIndex);
        callBack(getCurrentTabIndex);
    };

    return <div>
        <div className={style.parentMenuContainerStyle}>
            {arrTab &&
                arrTab.length ?
                <ul className={style.parentListsMenuStyle}>
                    {arrTab.map((item, index) =>
                        <li key={item.label} className={`${style.listMenusStyle}
                        border-b ${index === currentTabIndex ? 'border-blue-800' : ''}  cursor-pointer`} onClick={() => handleToggleTabs(index)} >{item.label}</li>
                    )}
                </ul> :
                <div>no tab menu </div>
            }
        </div>

        <div className={style.parentDisplayTabContainerStyle}>
            {arrTab &&
                arrTab[currentTabIndex] ?
                arrTab[currentTabIndex].content :
                <div>no tab found</div>
            }
        </div>
    </div>
};

export default Tabs;
