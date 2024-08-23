import Treeitems from './Treeitems'

const Listtree = ({ getData = [] }) => {

  return <ul className='pl-10 space-y-2'>
    {
      getData && getData.length ?
        getData.map((item) =>
          <Treeitems key={item.label} item={item} />
        ) :
        null
    }
  </ul>
};

export default Listtree;
