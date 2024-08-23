import { useEffect, useState } from "react";
import Displaydropdown from "./Displaydropdown";

// create a auto complate search engine

const Index = ({ url }) => {
    const [users, setUsers] = useState([])
    const [input, setInput] = useState('');
    const [sugestions, setSugestions] = useState([]);
    const [loading, setLaoding] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const fetchProfileData = async (getUlr) => {

        try {

            setLaoding(true);

            const response = await fetch(getUlr);
            if (!response.ok) throw new Error('not found');
            const data = await response.json();

            if (data &&
                data.users &&
                data.users.length
            ) {
                setUsers(data.users.map(item => item.firstName));
                setLaoding(false);
            }

        } catch (error) {

            console.error(error);
            setErrorMsg(error.response);
            setLaoding(false);
        };
    };

    useEffect(() => {
        url && fetchProfileData(url);
    }, []);

    const handleSugestions = (e) => {
        const input = e.target.value.toLocaleLowerCase();
        setInput(input)

        if (input.length > 1 &&
            users.length
        ) {
            const filteredNames = users.filter(name => name.toLocaleLowerCase().includes(input));
            setSugestions(filteredNames);
        } else {
            setSugestions([]);
        };

    };

    const handleOnclickSugestions = (e) => {
        setInput(e.target.innerText);
        setSugestions([]);
    };


    return <div className="min-h-screen flex justify-center pt-10 border-t ">
        <div>
            <div className="flex justify-center mb-10" > <h1 className="text-2xl ">Auto complate search</h1></div>
            {!loading ?
                <div>
                    <form
                        action=""
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex gap-5">
                        <input
                            type="text"
                            name='search-users'
                            value={input}
                            placeholder='Search users...'
                            onChange={handleSugestions}
                            className='border rounded-md outline-none h-10 p-1'
                        />
                        <button
                            disabled={!input.trim() ? true : false}
                            className='h-10 text-white text-base capitalize  bg-blue-600 rounded-md px-2 '>
                            search
                        </button>
                    </form>

                    <div className="mt-4">
                        <Displaydropdown arrSugestions={sugestions} callBack={handleOnclickSugestions} />
                    </div>
                </div> :
                <div>loaidng...</div>
            }
        </div>
    </div>
};

export default Index;
