import { Action } from 'redux';
import { Product, NotificationType } from '../reducers/notification';

export type NotificationActionTypes = 'NEWNOTIF' | 'BUY' | 'DONTBUY';
export interface NotificationPayload {
    notificationType?: NotificationType,
    product?: Product,
};

export type NotificationActions = Action<NotificationActionTypes, NotificationPayload>

export function newNotif(payload: NotificationPayload) {
    return ({
        type: 'NEWNOTIF',
        payload: payload
    })
}

export function buy(payload: NotificationPayload) {
    return ({
        type: 'BUY',
        payload: payload
    })
}

export function dontBuy(payload: NotificationPayload) {
    return ({
        type: 'DONTBUY',
        payload: payload
    })
}
