import React from 'react';
import Button from '../../components/custom-button/custom-button.component';

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
        <div>
            <div className="detail">
                <img src={foundDetail.imageUrl} alt='' />
                <pre className="wrapped">
                    <h3>{`Production Title: ${foundDetail.name}`}</h3>
                    <div className="detail">
                        <p>{`Director: ${foundDetail.director}    `}</p>
                        <p>{`Wallet: ${foundDetail.directorAddress}`}</p>
                    </div>
                    <div className="detail">
                        <p>{`Writer: ${foundDetail.writer}    `}</p>
                        <p>{`Wallet: ${foundDetail.writerAddress}`}</p>
                    </div>
                    <div className="detail">
                        <p>{`Pool Amount: ${foundDetail.price}`}</p>
                    </div>
                    <div className={`${1} script-item`} onClick={() => {}}>
                        <div className="background-image"
                            style={{
                            backgroundImage: ``
                            }}
                        />
                        <div className="content">
                            <h1 className="title">Script</h1>
                        </div>
                    </div>
                    <Button>Stake In Production</Button>
                </pre>
            </div>
            <div className="detail">
            </div>
        </div>
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