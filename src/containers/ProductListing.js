import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponents from './ProductComponents';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios
    //     .get("https://fakestoreapi.com/products")
    //     .catch((err) => {
    //         console.log("Err", err);
    //     });
    //     dispatch(setProducts(response.data));
    //  };

     useEffect(() => {
        dispatch(fetchProducts());
     }, []);
    console.log("Produts: ",products);

    return (
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    );
};

export default ProductListing;
