import Textarea from './text-area';
import Texteditor from './text-editor';
import React, { useEffect, useRef, useState } from 'react';

type Prop = {
    editorParentWrapperStyle: string,
    toolbarWrapperStyle: string,
    texAreaStyle: string,
    placeHolder: string
}

const index = ({ editorParentWrapperStyle, toolbarWrapperStyle, texAreaStyle,  placeHolder}: Prop) => {
    const [getContentHTML, setGetContentHTML] = useState<string>('');
    const [displayPlaceHolder, setDisplayPlaceHolder] = useState( placeHolder.trim()? true : false);
    const textAreaRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<string[]>([]);
    const mouseLeaveTextAreaRef = useRef<boolean>(false);
    const historyMomoryIndexRef = useRef(0);
    const caretPostionsRef = useRef<number[]>([]);
    const typingTimeOutRef = useRef<number>();


    useEffect(() => {
        if (textAreaRef.current === null) return;
        historyRef.current.push(textAreaRef.current?.innerHTML || '');
        historyMomoryIndexRef.current = historyRef.current.length - 1;
        caretPostionsRef.current.push(getCaretPosition(textAreaRef.current));
    }, []);

    const handlePlaceHolder = () => {
        const editables = textAreaRef?.current?.firstElementChild?.childNodes as NodeListOf<HTMLSpanElement> || [];
        for (const element of editables) {
            const hasContent = element?.innerHTML?.replace("<br>", "") !== ""; // There is a content available in the textarea at least in one of the children initialSpan
            setDisplayPlaceHolder(hasContent ? false : true);
            if (hasContent) {
                break;
            };
        };
    };

    const HandleOnTextAreaChange = (content: React.RefObject<HTMLElement | null>) => {
        clearTimeout(typingTimeOutRef.current);

        typingTimeOutRef.current = setTimeout(() => {
            if (textAreaRef.current === null) return;
            historyRef.current.push(textAreaRef.current?.innerHTML || '');
            historyMomoryIndexRef.current = historyRef.current.length - 1;
            caretPostionsRef.current.push(getCaretPosition(textAreaRef.current));
        }, 400);

        setGetContentHTML(textAreaRef.current?.innerText || '');
        handlePlaceHolder();
    };

    const getCaretPosition = (element: Node) => {
        const selection = document.getSelection();
        if (!selection) return 0;

        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            // Clone the range
            const preCaretRange = range.cloneRange();
            // Select the entire content of the element
            preCaretRange.selectNodeContents(element);
            // Set the end to the caret position
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            const caretOffset = preCaretRange.toString().length;

            return caretOffset;
        };

        return 0;
    };

    const filterText = (text: string) => {
        return text.split('').map((word) => word === '\n' ? ' ' : word).join('');
    };

    return <div
        className={editorParentWrapperStyle}
    >
        <Texteditor
            historyMomoryIndexRef={historyMomoryIndexRef}
            mouseLeaveTextAreaRef={mouseLeaveTextAreaRef}
            HandleOnTextAreaChange={HandleOnTextAreaChange}
            caretPostionsRef={caretPostionsRef}
            historyRef={historyRef}
            className={toolbarWrapperStyle}
            textAreaRef={textAreaRef}
        />
        <Textarea
            placeHolder={placeHolder}
            displayPlaceHolder={displayPlaceHolder}
            mouseLeaveTextAreaRef={mouseLeaveTextAreaRef}
            textAreaRef={textAreaRef}
            className={texAreaStyle}
            textAreaConfig={{ addNew: true, body: "" }}
            HandleOnTextAreaChange={HandleOnTextAreaChange}
        />
    </div>
};

export default index
