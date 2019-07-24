import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../background/store';
import Notification from '../../components/notification/Notification';
import { themes, ThemeTypes } from '../../components/styles/themes';
import { INotification } from '../../background/store/reducers/notification';
import { testNotif, newNotif } from '../../background/store/actions/notificationActions';
import { Extractor } from '../extraction/Extractor';
import { Product } from '../../background/store/reducers';


interface INotificationScript {
    theme: ThemeTypes,
    dispatch: Dispatch;
    notification: INotification;
}

class NotificationScript extends React.Component<INotificationScript> {
    private extractor: Extractor;
    constructor (props: INotificationScript) {
        super(props);
        this.onMessageRecieve = this.onMessageRecieve.bind(this);
        chrome.runtime.onMessage.addListener(this.onMessageRecieve);
        debugger;
        this.extractor = new Extractor();
    }
    onMessageRecieve(_message: any, _sender: any, _response: any) {
        //debugger;
        //alert("message recieved " + message);
    }

    componentWillMount (){
        this.props.dispatch(testNotif());
        let extractorProduct = this.extractor.getProduct();
        if (extractorProduct === null) {
            return;
        } else {
            let name = extractorProduct.getName();
            let site = extractorProduct.getSite();
            let description = extractorProduct.getDescription();
            let product: Product = {
                name: name ? name : "",
                site: site ? site: "",
                cost: 0,
                description: description ? description : "",
            }
            alert('Similar product ' + JSON.stringify(product));
            this.props.dispatch(newNotif({notificationType: 'SIMILAR', product: product}))
        }     
        debugger;
    }

    componentDidMount () {
        
    }
    
    render() {
        return (
            <ThemeProvider theme={themes[this.props.theme]}>
                <React.Fragment>
                    <Container >
                        {this.props.notification.notificationType != 'NONE' && 
                        <Notification /> }
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        theme: state.settings.theme,
        notification: state.notification
    };
};

export default connect(mapStateToProps)(NotificationScript);

const Container = styled('div')`
    position: fixed;
    z-index: 9;
    bottom: 0;
    right: 0;
    background-color: ${p => p.theme.backgroundColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
