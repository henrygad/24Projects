import data from './data'
import Listtree from './Listtree';

// create a tree view or recursive tree lists

const Index = ({ getData = [] }) => {
    return <div className='min-h-screen w-full py-5 border-t'>
        <div className='pr-5 py-4 bg-blue-900 max-w-[280px] '>
            <Listtree getData={data} />
        </div>
    </div>
};

export default Index;
