import React, { useState } from 'react'
import Listtree from './Listtree';

const Treeitems = ({ item = {} }) => {
  const [displayListChildren, setDisplayListChildren] = useState({});

  const handleToggleParentChildren = (getParentLabel) => {
    setDisplayListChildren(
      {
        ...displayListChildren,
        [getParentLabel]: !displayListChildren[getParentLabel]
      }
    );
  };

  return <li>
    <div className='flex gap-4 items-center'>
      <p className='text-base text-white capitalize '>{item.label}</p>
      {item.children &&
        item.children.length
        && <span
          onClick={() => handleToggleParentChildren(item.label)}
          className='text-xl text-white font-bold cursor-pointer'>
          {!displayListChildren[item.label] ? "+" : "-"}
        </span>
      }
    </div>
    {item.children &&
      item.children.length &&
      displayListChildren[item.label] ?
      <Listtree getData={item.children} /> :
      null
    }
  </li>
};

export default Treeitems;
