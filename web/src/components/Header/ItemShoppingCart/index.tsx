import React from 'react';

import * as St from './styles';

import ItemCart from './ItemCart';
import CountItems from './CountingItems';

import Counter from './Counter';
const ItemShoppingCart: React.FC = () => {
    return (
        <St.Container>
            <St.Content>
                <ItemCart />
                <CountItems />
                <Counter />
            </St.Content>
        </St.Container>
    )
}

export default ItemShoppingCart;