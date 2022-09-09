import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    fetchProduct,
     removeSelectedProduct,
 } from "../redux/actions/productActions";
import { useSelector, useDispatch } from 'react-redux';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const {image, title, price, categeory, description} = product;
    const dispatch = useDispatch();
    console.log(product);

    // const fetchProductDetail = async () => {
    //      const response = await axios
    //      .get(`https://fakestoreapi.com/products/${productId}`)
    //      .catch((err) => {
    //          console.log("Err: ", err);
    //      });
    //      dispatch(selectedProduct(response.data));
    // };

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, []);

    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
            <div className="ui placeholer segment">
            <div className="ui two column stackable center aligend grid">
            <div className="ui vertical divider">ADD</div>
            <div className="middle aligned row">
                <div className="column lp">
                    <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                    <h1>{title}</h1>
                    <h2>
                        <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{categeory}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add To Cart</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    
        )}    
            </div>
    );
};

export default ProductDetail;
