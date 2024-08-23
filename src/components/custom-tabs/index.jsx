import Tabs from './Tabs'


const Index = () => {
    const tabs = [
        {
            label: 'home',
            content: <div className='p-4'>home</div>
        },
        {
            label: 'profile',
            content: <div className='p-4'>hey this is my profile</div>
        },
        {
            label: 'setting',
            content: <div className='p-4'>set up your account</div>
        },
    ];

    const handleTabs = (getCurrentTabIndex)=> {
       console.log(getCurrentTabIndex)
    };

    return <div className="min-h-screen flex justify-center items-center pt-10 border-t">
        <Tabs
            arrTab={tabs}
            style={{
                parentDisplayTabContainerStyle: 'flex justify-center bg-black text-white',
                parentMenuContainerStyle: 'mb-5',
                parentListsMenuStyle: ' flex  gap-4 capitalize',
                listMenusStyle: ''
            }}
            callBack={handleTabs}
        />
    </div>
};

export default Index;
