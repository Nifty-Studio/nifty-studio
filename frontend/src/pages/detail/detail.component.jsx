import React from 'react';

import './detail.styles.scss';
import SHOP_DATA from '../../redux/shop/shop.data';

const Detail = props => {
    let detailId = parseInt(props.match.params.id);
    let foundItemRaw = SHOP_DATA.find(itemObj => itemObj.id === 1);
    let foundItem = [...foundItemRaw.items];
    console.log(foundItem);
    let foundDetail = foundItem.find(detailObj => detailObj.id === detailId);

    return (
        foundDetail &&
        <React.Fragment>
            <p>{`This is ${foundDetail.name}.`}</p>
            <img src={foundDetail.imageUrl} alt='' />
        </React.Fragment>
    ); 
}

/*
const Detail = props => (
    <div className='detail'>
        <h1>this is a detail page</h1>
    </div>
); 
*/

export default Detail;