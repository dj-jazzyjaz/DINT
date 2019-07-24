import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { buy, dontBuy} from '../../background/store/actions/notificationActions';
import { INotification } from '../../background/store/reducers/notification';
import { ProductDisplay } from '../product/ProductDisplay';
import { Display, Controls, Button, ButtonGreen } from '../styles/sharedElements';
import { countProductTowardsGoal } from '../../background/store/actions/goalActions';
import { addToPurchaseHistory } from '../../background/store/actions/productActions';
import { Equalizer } from '../../../assets/SVGIcons';
import { filterProduct } from '../../background/store/actions';
import { IFilter } from '../../background/store/reducers';

interface INotificationProps {
    notification: INotification,
    filter: IFilter,
    dispatch: Dispatch,
    addToCartAction: () => void
}

class Notification extends React.Component<INotificationProps> {
    constructor(props: INotificationProps) {
        super(props);

        this.buy = this.buy.bind(this);
        this.dontBuy = this.dontBuy.bind(this);
    }

    buy = () => {
        alert('buy');
        this.props.addToCartAction();
        this.props.dispatch(buy({}));
        if (this.props.notification.product) {
            this.props.dispatch(addToPurchaseHistory(this.props.notification.product))
        }
    };

    dontBuy = () => {
        this.props.dispatch(dontBuy({}));
        if (this.props.notification.product) {
            this.props.dispatch(countProductTowardsGoal(this.props.notification.product))
        }
    };

    addToFilter = () => {
        if (this.props.notification.product) {
            this.props.dispatch(filterProduct(this.props.notification.product))
        }
    };

    render() {
        return (
            <NotificationContainer>
                <Display>
                    Duplicate item detected
                </Display>
                {
                    (this.props.notification.notificationType === 'SIMILAR') && this.props.notification.product && 
                    <ProductDisplay product={this.props.notification.product}/>
                }
                <Controls>
                    <ButtonGreen onClick={this.dontBuy}>Remove and Save</ButtonGreen>
                    <Button onClick={this.buy}>Buy</Button>
                    <Button onClick={this.addToFilter} style={{padding: '10px 12px'}}>{Equalizer}</Button>
                </Controls>
            </NotificationContainer>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        notification: state.notification,
        filter: state.filter,
    };
};

export default connect(mapStateToProps)(Notification);

const NotificationContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    padding: 5px;
    margin: 5px;
    z-index: 20;
    background-color: ${p => p.theme.backgroundColor};
`;

