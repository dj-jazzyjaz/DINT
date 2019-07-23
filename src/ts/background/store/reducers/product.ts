import { Reducer} from 'redux';
import { ProductActions } from '../actions/productActions';

export interface Product {
	productName: string,
	cost: number,
	site?: string,
	sustInfo?: string,
	desc?: string,
	imgSrc?: string,
	datePurchased?: Date,
}

export interface IProduct {
	current: Product | null,
	history: Product[]
}

const initialState: IProduct = {
	current: null,
	history: [],
};

const product: Reducer<IProduct, ProductActions> = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'ADDTOHISTORY':
			return { ...state, 
				history: payload ? state.history.slice().concat(payload) : state.history.slice() };

		case 'NEWPRODUCT':
			return { ...state, 
				current: payload ? payload : null};
		default:
			return state;
	}
};

export default product;