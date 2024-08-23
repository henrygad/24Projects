import { useState } from 'react';
import Profile from './Profile';

// create fetch and display github searched profile

const Index = () => {
    const [profile, setProfile] = useState({});
    const [input, setInput] = useState('');
    const [loading, setLaoding] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    const fetchProfileData = async (getUlr) => {

        try {

            setLaoding(true);

            const response = await fetch(getUlr);
            if (!response.ok) throw new Error('not found');
            const data = await response.json();

            setProfile(data);
            setInput('');
            setLaoding(false);

        } catch (error) {

            console.error(error);
            setErrorMsg(error.response);
            setInput('');
            setProfile({});
            setLaoding(false);
        };
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetchProfileData('https://api.github.com/users/' + `${input}`);
    }

    return <div className='min-h-screen flex justify-center pt-10 border-t'>
        <div className='space-y-4'>
            <div>
                <form
                    action=""
                    onSubmit={handleFormSubmit}
                    className='flex gap-4'
                >
                    <input
                        type="text"
                        name='search'
                        value={input}
                        placeholder='Search github user...'
                        onChange={(e) => setInput(e.target.value)}
                        className='border rounded-md outline-none h-10 p-1'
                    />
                    <button
                        disabled={!input.trim() ? true : false}
                        className='h-10 text-white text-base capitalize  bg-blue-600 rounded-md px-2 '>
                        search
                    </button>
                </form>
            </div>
            <div>
                <Profile profile={profile} loading={loading} />
            </div>
        </div>
    </div>
};

export default Index;
