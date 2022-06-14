import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import Login from "./Login"
import axios from "axios";
import {useEffect} from "react";
import {get} from "../store/product/product.actions";
import styled from "./Home.module.css"
import {cart_update} from "../store/cart/cart.actions";
import {GET_CART_ITEMS_SUCCESS} from "../store/cart/cart.types";

const Home = () => {


    const {data} = useSelector((state) => state.products)
    const {data: auth} = useSelector((state) => state.auth)
    const {data: cartdata} = useSelector((state) => state.cart)
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get("http://localhost:8080/products").then((res) => {
            dispatch(get(res.data))

        })
        axios.get("http://localhost:8080/cartItems").then((res) => {
            dispatch({type: GET_CART_ITEMS_SUCCESS, payload: res.data})
        })

    }, [])
    const handleadd=({id,el})=>{
     dispatch(cart_update({
      el,id
     }))
    }
    console.log(cartdata)
    if (auth.isAuthenticated == false) {
        return <Login/>
    } else {
        return <div className={
            styled.home
        }>
            <div className={
                styled.products
            }>
                <h3>products</h3>
                <div className={
                    styled.product
                }>
                    {
                    data.map(e => {
                        return <div className={
                            styled.item
                        }>
                            <div> {
                                e.name
                            }</div>
                            <div className={
                                styled.description
                            }>
                                {
                                e.description
                            }</div>
                            <button className={
                                styled.addtocart
                            }>add to cart</button>

                        </div>
                })
                } </div>

            </div>
            <div>
                <h3>cart</h3>
                <div className={
                    styled.cart
                }>
                    {
                    cartdata.map(e => {
                        return <div className={
                            styled.cartitem
                        }>
                            <div>Product: {
                                e.productId
                            }</div>
                            <div>count : {
                                e.count
                            }
                                <button onClick={(e)=>handleadd(1,e) }>+</button>
                                <button>-</button>
                            </div>
                            <div>
                                <button>remove</button>
                            </div>

                        </div>
                })
                } </div>
            </div>
        </div>;

    }
};

export default Home;
