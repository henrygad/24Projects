import useChangeMode from "./useChangeMode";

//create a light and dark mode theme

const Index = () => {
    const { mode, handleToggleTheme } = useChangeMode('themeMode', 'light');
    
    return <div
        className={`min-h-screen w-full flex justify-center items-center ${mode === 'light' ?
            "bg-white text-stone-900" :
            "bg-black text-white"
            }`}>
        <div className="space-y-3">
            <h1>Hello World 1</h1>
            <div>
                <button
                    onClick={handleToggleTheme}
                    className={`p-3 text-stone-800 rounded-sm ${mode === 'light' ?
                        "bg-black text-white" :
                        "bg-white text-stone-900"
                        }`}>
                    {mode === 'light' ? "switch to dark mode" : "switch to light mode"}
                </button>
            </div>
        </div>

    </div>
};

export default Index;
