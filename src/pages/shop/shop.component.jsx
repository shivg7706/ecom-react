import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            collections: SHOP_DATA
        }


    }

    render() {
    const { collections } = this.state;

        return(
            <div className='shopPage'>
                {
                    collections.map(({ id, ...otherCollectionProps }) =>  (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }


}

export default ShopPage;