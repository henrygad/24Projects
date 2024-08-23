import React, { useEffect, useState } from 'react';
import Searchform from './Searchform';

const App = () => {
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [search, setSearch] = useState('');

    const fetchWeatherData = async (queries) => {

        try {

            setLoading(true);

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queries}&appid=002f1663ded8b33a2c3ca7657afd0cf1`);
            if (!response.ok) throw new Error('This is a new custom error');
            const data = await response.json();

            if (data) {
                console.log(data);

                setWeatherData(data);
                setErrorMsg('');
                setLoading(false);
            }

        } catch (error) {

            console.error(error);
            setErrorMsg(error);
            setWeatherData({});
            setLoading(false);
        };

    };

    useEffect(() => {
        fetchWeatherData('lagos');
    }, []);

    const handleSearch = () => {
        if (!search) return;
        fetchWeatherData(search);
    };

    const handleCurrentDate = () => {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: "numeric",
            year: "numeric"
        })
    };


    return <div className='min-h-screen w-screen flex justify-center items-center font-sans'>
        <div className='min-w-[480px] min-h-[480px] bg-[#00ffff] space-y-4 rounded-md border shadow-sm'>
            <div className='flex justify-center items-center p-4'>
                <Searchform
                    placeholder='Search a city'
                    input={search}
                    setInput={setSearch}
                    callback={handleSearch}
                />
            </div>
            <div className=''>
                {!loading ?
                    <div>{
                        weatherData &&
                            Object.keys(weatherData).length ?
                            <div className='flex flex-col items-center gap-4 font-bold'>
                                <h1 className='text-2xl '>
                                    <span>{weatherData.name}, </span>
                                    <span>{weatherData.sys.country}</span>
                                </h1>
                                <p className='text-base'>{handleCurrentDate()}</p>
                                <h2 className=' text-6xl '>{weatherData.main.temp}</h2>
                                <p className='text-base'>{weatherData.weather[0].description}</p>
                                <div className='flex gap-20'>
                                    <div className='flex flex-col items-center gap-1'>
                                        <span>{weatherData.wind.speed}</span>
                                        <span>Wind Speed</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-1'>
                                        <span>{weatherData.main.humidity}%</span>
                                        <span>Humidity</span>
                                    </div>
                                </div>
                            </div> :
                            <div className='flex justify-center items-center w-full h-full'>No data found for this city! please check the city name.</div>
                    }</div> :
                    <div className='flex justify-center items-center w-full h-full'>loading...</div>}
            </div>
        </div>

    </div>
};

export default App;
