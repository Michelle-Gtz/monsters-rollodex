import {Component} from 'react';
import './card-list.container.css';
import CardContainer from '../card-container/card-container.component';

class CardList extends Component {
    
    render() {

        const { monsters } = this.props;
       

        return (
            <div className='card-list'>
                { monsters.map((monster) => {
                    return <CardContainer monster = {monster}/>
                })}
            </div>
        );
    }
}

export default CardList;