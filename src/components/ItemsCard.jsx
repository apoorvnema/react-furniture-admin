import { Fab, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import TransitionsModal from './UI/Modal';
import ProductForm from './UI/Form/ProductForm';
import ApiManager from '../services/ApiManager';
import CustomCard from './UI/Card';
import Loader from './UI/Loader';

const ItemsCard = ({ pathname }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    const actions = [
        { label: 'Update Product', onClick: () => console.log('Add to Cart clicked') },
        { label: 'Delete Product', onClick: (id) => handleDeleteItem(id) },
    ];
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        message: 'Something went wrong!',
        type: 'error',
        visible: false
    });

    useEffect(() => {
        fetchItems();
    }, []);

    async function handleDeleteItem(id) {
        try {
            const response = await ApiManager.deleteProduct(id);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            fetchItems();
        }
    }

    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await ApiManager.getProducts();
            const productsArray = Object.entries(response);
            setItems(productsArray);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleAddItem = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddProduct = async (product) => {
        try {
            const response = await ApiManager.addProduct(product);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            handleCloseModal();
            fetchItems();
        }
    };

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'flex-start',
                paddingLeft: 10,
                paddingRight: 10
            }}>
                {items.map(([id, item]) => (
                    <div key={id} style={{
                        flex: '1 1 30%',
                        minWidth: '250px',
                        maxWidth: '300px',
                        marginBottom: '1.5rem'
                    }}>
                        <CustomCard 
                            title={item.name}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            actions={actions}
                            quantity={item.quantity}
                            category={item.category}
                            id={id}
                        />
                    </div>
                ))}
            </div>
            <Loader loading={loading} />
            <Fab
                variant={!isSmallScreen ? 'extended' : 'circular'}
                color="primary"
                aria-label="add"
                style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
                onClick={handleAddItem}
            >
                <AddIcon />
                {!isSmallScreen && <Typography sx={{ ml: 1, color: '#FFFFFF' }}>Add Item</Typography>}
            </Fab>
            <TransitionsModal show={showModal} onClose={handleCloseModal} title={"Add Item"}>
                <ProductForm mode={"Add"} onSubmit={handleAddProduct} />
            </TransitionsModal>
        </>
    )
}

export default ItemsCard