import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { buy, dontBuy, testNotif } from '../../background/store/actions/notificationActions';
import { INotification } from '../../background/store/reducers/notification';
import { green } from '../styles/themes';
import { ProductDisplay } from '../product/ProductDisplay';

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

const Display = styled('div')`
    font-size: 16px;
    justify-self: left;
`;

const Controls = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 300px;
`;

const ButtonGreen = styled('button')` 
	display: inline-block;
	position: relative;
    padding: 10px 30px;
	border: 1px solid ${green};
    background: ${green}
    
    color: white;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    
    font-color: white
    &:active {
        background: #169499;
    }
`;

const Button = styled('button')` 
display: inline-block;
position: relative;
padding: 10px 30px;
border: 1px solid ${green};
background-color: white

font-size: 14px;
color: ${green};
cursor: pointer;
user-select: none;

&:active {
    background: #169499;
}
`;