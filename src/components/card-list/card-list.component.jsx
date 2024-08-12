
import './card-list.container.css';
import CardContainer from '../card-container/card-container.component';

const CardList = ({monsters}) => (
   
        <div className='card-list'>
            { monsters.map((monster) => {
                 return <CardContainer monster = {monster}/>
            })}
        </div>
)
    


export default CardList;