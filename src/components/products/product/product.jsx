import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import userStyles from '../styles';

const Product = ({ product, onAddToCart }) => {
    const classes = userStyles();

    const handleAddToCart = () => onAddToCart(product.id, 1)


    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = {product.image.url} title = {product.name}/>
            <CardContent>
                <div className = {classes.CardContent}>
                    <Typography variant = 'h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant = 'h5'>
                        ${product.price.formatted}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant = 'body2' color = 'textSecondary' />
            </CardContent>
            <CardActions disableSpacing className = {classes.CardActions}>
                <IconButton aria-label = "Add to Cart" onClick = {handleAddToCart}>
                   <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
};
export default Product;



