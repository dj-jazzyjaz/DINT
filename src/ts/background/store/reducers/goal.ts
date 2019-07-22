import { Reducer} from 'redux';
import { GoalActions } from '../actions/goalActions';


export interface Goal {
	amount: number,
	name?: string,
	date?: Date,
	description?: string
}

export interface IGoal {
	current?: Goal,
	history: Goal[]
}

const initialState: IGoal = {
	current: {amount: 0},
	history: [],
};

const goal: Reducer<IGoal, GoalActions> = (state = initialState, action) => {
	const { payload } = action;
	if (!state || !payload) return initialState

	switch (action.type) {
		case 'NEWGOAL':
			return { ...state, 
				current:  payload.goal};
		case 'ADDTOHISTORY':
			return { ...state,
				history: payload.goal ? state.history.slice().concat(payload.goal) : state.history.slice() };
		case 'INCREMENTGOAL':
				return {
					...state, 
					current: {
						amount: payload.product && state.current ? 
						state.current.amount + payload.product.cost : NaN,
					}
				}
		default:
			return state;
	}
};

export default goal;