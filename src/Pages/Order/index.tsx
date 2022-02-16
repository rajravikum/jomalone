import React from 'react'
import DefaultOrder from './DefaultOrder';
import ProcessOrder from './ProcessOrder';

type Props = {}

const Order = (props: Props) => {
    return (
        <ProcessOrder />
        //<DefaultOrder />
    )
}

export default Order;