import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { addItem }from '../../redux/cart/cart.actions.js';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl, id} = item;
    return (
      <div className="collection-item">
        <Link
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          to={`/detail/${id}`}
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);