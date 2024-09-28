import { Button, Stack } from '@mui/material';
import React from 'react'

const OrdersCard = ({navigate}) => {
    return (
        <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
            <Button
                onClick={() => {
                    navigate('/orders/1');
                }}
            >
                Order 1
            </Button>
            <Button
                onClick={() => {
                    navigate('/orders/2');
                }}
            >
                Order 2
            </Button>
            <Button
                onClick={() => {
                    navigate('/orders/3');
                }}
            >
                Order 3
            </Button>
        </Stack>
    )
}

export default OrdersCard