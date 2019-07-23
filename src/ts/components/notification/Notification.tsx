import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { buy, dontBuy, testNotif } from '../../background/store/actions/notificationActions';
import { INotification } from '../../background/store/reducers/notification';
import { ProductDisplay } from '../product/ProductDisplay';
import { Display, Controls, Button, ButtonGreen } from '../styles/sharedElements';

interface INotificationProps {
    notification: INotification,
    dispatch: Dispatch;
}

class Notification extends React.Component<INotificationProps> {
    componentWillMount (){
        this.props.dispatch(testNotif());
    }
    
    buy = () => {
        this.props.dispatch(buy({}));
    };

    dontBuy = () => {
        this.props.dispatch(dontBuy({}));
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
                </Controls>
            </NotificationContainer>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        notification: state.notification,
    } ;
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
    background-color: ${p => p.theme.backgroundColor};
`;
