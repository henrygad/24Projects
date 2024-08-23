
const Card = ({ products, style, buttonComponent }) => {

  return <div className={`font-sans min-w-[240px] max-w-[320px] space-y-4 p-4 rounded-md border-2 border-pink-100 shadow-lg ${style}`} >
    <div className="w-full h-[120px]">
      <img
        src={products.image}
        alt={products.title}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="h-[90px]">
      <h3 className="font-semibold text-base text-stone-800 text-wrap first-letter:capitalize">{products.title}</h3>
    </div>
    <div className="flex justify-between items-center text-sm w-full">
      <span className="text-slate-600 text-base">${products.price}</span>
      <span className="text-pink-800 capitalize">{products.category}</span>
    </div>
    {buttonComponent}
  </div>
};

export default Card;
