import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image  from "../../Assets/download.jpg";
import ButtonCmp from './button';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/Slices/cartSlice';

export default function CardCmp({product}) {

console.log(product ,"cardcmp");

  const dispatch = useDispatch()
  const addToCart = () =>{
    dispatch(add())
    console.log("addd")
  }
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonCmp text="Add to Cart" onClick={addToCart} />
      </CardActions>
    </Card>
  );
}