import { current } from '@reduxjs/toolkit';
import React, { useEffect, useRef } from 'react';

const Testpage = () => {
  const currentSelectionRef = useRef(null);


  const handleSelectionChange = () => {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);

    if (range.commonAncestorContainer.closest &&
      range.commonAncestorContainer.closest('.editable')
    ) {
      currentSelectionRef.current = selection
    };

  };

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };

  }, []);

  const handleRange = () => {
    const selection = currentSelectionRef.current
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;

    return { selection, range, startContainer, endContainer };
  };


  const formatText = () => {
    const selection = currentSelectionRef.current;

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      if (!range.collapsed) {
        const startNode = range.startContainer;
        const endNode = range.endContainer;

        let commonAncestor = range.commonAncestorContainer;
        let nodes = [];

        // Get all text nodes within the selection
        const walker = document.createTreeWalker(
          commonAncestor,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: function () {
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        );

        let currentNode = walker.currentNode;

        while (currentNode) {
          if (
            (currentNode === startNode ||
              currentNode === endNode ||
              (walker.currentNode.nodeValue &&
                walker.currentNode.nodeValue.trim())) &&
            range.intersectsNode(currentNode)
          ) {
            nodes.push(currentNode);
          }
          currentNode = walker.nextNode();
        }

        // Wrap each node in a <b> tag
        nodes.forEach(node => {
          const boldWrapper = document.createElement('b');
          const range = document.createRange();
          range.selectNodeContents(node);
          range.surroundContents(boldWrapper);
        });

        // Reset the selection
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }





  return <div className='pl-10 pt-10'>
    <button onClick={formatText} className='border p-3 bg-blue-500 text-white'>Click me</button>
    <div className='mb-10'></div>
    <div className='min-w-20 min-h-20 border p-2 editable' contentEditable ></div>
    <div>

    </div>
  </div>
};

export default Testpage;
