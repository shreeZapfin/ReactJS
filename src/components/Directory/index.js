import React from 'react';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';
import './style.scss';

const Directory = props => {
  return (
    <div className="directory">
        <div class="container">
            <div class="row">
              <div class="col-sm" className="item">
                <a style={{color:"blue"}}>Shop Womens</a>
              </div>
              <div class="col-sm" className="item">
                <a style={{color:"red"}}>
                Shop Mens
                </a>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Directory;