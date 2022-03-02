import * as actionTypes from './shopping-types';
import Axios from "axios";


const INITIAL_STATE = {
    Order: [
        {
            id: 1,
            resturant_id: "aqua水相餐廳",
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category_id: "1",
        },
        {
            id: 2,
            resturant_id: "aqua水相餐廳",
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category_id: "1",
        }
        // {
        //     async componentDidMount() {
        //         var result = await Axios.get(`http://localhost:8000/orderpage/3`);
        //         // console.log(this.props.match.params.id)
        //         this.state.Order = result.data;
        //         // console.log(typeof result.data);
        //         // console.log(typeof result);
        //         this.setState({
        //             Order: result.data
        //         })
        //     }
        // }
    ],
    cart: [],
    currentItem: null,
}


const shopRudcer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //送資料去購物車
            const item = state.products.find((prods) => prods.id === action.payload.id);
            //確認商品已在購物車嗎
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart ? state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item.qty + 1 } : item
                )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty }
                    : item),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }

};

export default shopRudcer;