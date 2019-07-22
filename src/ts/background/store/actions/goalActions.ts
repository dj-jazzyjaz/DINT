import { Action } from 'redux';
import { Goal } from '../reducers/goal';
import { Product } from '../reducers/product';

export type GoalActionTypes = 'NEWGOAL' | 'ADDTOHISTORY' | 'INCREMENTGOAL';
export interface GoalPayload {
    goal?: Goal,
    product?: Product
}

export type GoalActions = Action<GoalActionTypes, GoalPayload>


export function newGoal(payload: Goal) {
    return ({
        type: 'NEWGOAL',
        payload: payload 
    })
}

export function addToGoalHistory(payload: Goal) {
    return ({
        type: 'ADDTOHISTORY',
        payload: payload 
    })
}

export function countProductTowardsGoal(payload: Product) {
    return ({
        type: 'INCREMENTGOAL',
        payload: payload 
    })
}

