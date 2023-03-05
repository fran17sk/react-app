import { OrdenItem } from "../OrdenItem"
const OrdensList = ({ordenesList}) => {
    console.log(ordenesList)
    return (
        <>
            <div id='ordenes' className='ordenesFlex'>
                {ordenesList.map(orden=><OrdenItem key={orden.cod} orden={orden}></OrdenItem>)}
            </div>
        </>
    )
}
export {OrdensList}