import { useEffect, useRef, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
// create an image slider


const Index = ({ url }) => {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0)
    const [transition, setTransition] = useState(true)
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoaidng] = useState(false);
    const ref = useRef()

    useEffect(() => {

        const fetchImages = async (getUrl) => {
            try {

                setLoaidng(true);
                const response = await fetch(getUrl);
                const data = await response.json();

                if (data) {
                    setImages(data);
                    setLoaidng(false);
                };

            } catch (error) {

                console.error(error);
                setErrorMsg(error.response);
                setLoaidng(false);
            };

        };

        if(url){
            fetchImages(url);
           // handleAutoSlide('');
        };

    }, [url]);

    const handlePreviousSlide = () => {
        if (currentImage === 0) {
            setTransition(false);
            setCurrentImage(images.length);

            setTimeout(() => {
                setTransition(true)
                setCurrentImage(images.length -1);
            }, 100);
        } else {
            setTransition(true);
            setCurrentImage(currentImage - 1);
        };
    };

    const handleNextSlide = () => {
        if (currentImage === (images.length)) {
            setTransition(false);
            setCurrentImage(0);

            setTimeout(() => {
                setTransition(true)
                setCurrentImage(1);
            }, 100);
        } else {
            setTransition(true);
            setCurrentImage(currentImage + 1);
        };
    };

    const handleDotsSlide = (index) => {
        setCurrentImage(index);
    };

    function handleAutoSlide(slideTo = 'left'){
        clearInterval(ref.current)
       ref.current= setInterval(() => {
            if(slideTo === 'left'){
                handlePreviousSlide();
            }else {
               handleNextSlide();
            }
        }, 2000);
    }
    
    useEffect(()=>{
        handleAutoSlide()
        return ()=>{
            clearInterval(ref.current)
        }
    }, [handleAutoSlide])

    const handleDotsColor = ()=>{
        if(currentImage === images.length){
            return 0;
        }else return currentImage;
    };


    return <div className="h-screen w-100 flex justify-center pt-20 border-t-2">
        {
            !loading ?
                <div className=" relative w-[460px] h-[360px] overflow-hidden">
                    <span
                        onClick={handlePreviousSlide}
                        className=" absolute top-1/2 -translate-y-1/2 left-1 z-20 cursor-pointer"
                    >
                        <BsArrowLeftCircleFill size={30}/>
                    </span>
                    <div className={`flex relative ${transition ? 'transition-[left] duration-700' : ''}`}
                        style={{
                            width: images.length > 0 && (images.length * 100) + (100) + "%",
                            height: '100%',
                            left: -(currentImage * 100) + "%"
                        }}>
                        {
                            !errorMsg &&
                                images.length > 0 ?
                                <>
                                    {images.map((value, index) =>
                                        <div key={index} className="w-full h-full">
                                            <img
                                                alt={'image' + index}
                                                src={value.download_url}
                                                className="w-full h-full border object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="w-full h-full">
                                        <img
                                            alt={'image' + 0}
                                            src={images[0].download_url}
                                            className="w-full h-full border object-cover"
                                        />
                                    </div>
                                </> :
                                <div>no image found {errorMsg}</div>
                        }
                    </div>
                    <span
                        onClick={handleNextSlide}
                        className=" absolute top-1/2 -translate-y-1/2 right-1 z-20 cursor-pointer"
                    >
                        <BsArrowRightCircleFill size={30}/>
                    </span>
                    <div className=" flex gap-1 absolute bottom-2 left-1/2 -translate-x-1/2">
                        {
                            images.length > 0 ?
                                images.map((_, index) =>
                                    <button
                                        key={index}
                                        onClick={() => handleDotsSlide(index)}
                                        className={`h-4 w-4 border rounded-full cursor-pointer transition-colors ${handleDotsColor(index) === index?
                                            " bg-gray-600 " :
                                            "bg-gray-200  "
                                            }`}
                                    ></button>
                                ) :
                                null
                        }
                    </div>
                </div> :
                <div>loading...</div>
        }
    </div>
};

export default Index;
