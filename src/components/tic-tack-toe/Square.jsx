
const Square = ({value, onClick}) => {

  return <button 
    className="min-w-20 min-h-20 flex justify-center items-center text-2xl font-bold border"
    onClick={onClick}
    >
        {value}
  </button>
};

export default Square;
