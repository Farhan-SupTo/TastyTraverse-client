import Food_Cart from '../../../components/Food_Cart/Food_Cart';

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-3'>
 {
        item.map(item=> <Food_Cart
        key={item._id} item={item}>

        </Food_Cart>)
    }
 </div>
    );
};

export default OrderTab;