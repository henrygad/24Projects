import { Link } from 'react-router-dom';
const Index = () => {
    return <div className=' fixed bottom-0 left-0 right-0 w-screen h-[40px] bg-gray-700 '>
        <ul className='flex justify-center items-center gap-4 '>
            <li className=' text-white'> <Link to='/' >Components</Link></li>
            <li className=' text-white'><Link to='/weather' >Weather App</Link></li>
            <li className=' text-white'> <Link to='/products' >Products</Link></li>
            <li className=' text-white'> <Link to='/cart' >Cart</Link></li>
            <li className=' text-white'> <Link to='/editor' >Editor</Link></li>
        </ul>
    </div>
};

export default Index;
