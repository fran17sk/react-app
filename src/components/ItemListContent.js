import { ItemCount } from './ItemCount';

const ItemListContent = (props) => {
    return (<>
        <p>{props.greeting}</p>
        <ItemCount initial={1} stock={100} onAdd={()=>{}}/>
    </>)
}

export default ItemListContent;