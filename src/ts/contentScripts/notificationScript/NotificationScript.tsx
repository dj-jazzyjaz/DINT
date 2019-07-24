import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../background/store';
import Notification from '../../components/notification/Notification';
import { themes, ThemeTypes } from '../../components/styles/themes';
import { INotification } from '../../background/store/reducers/notification';
import { newNotif, testNotif } from '../../background/store/actions/notificationActions';
import { Extractor } from '../extraction/Extractor';
import { Product } from '../../background/store/reducers';
import { SimilarityChecker } from '../similarity/SimilarityChecker';


interface INotificationScript {
    theme: ThemeTypes,
    dispatch: Dispatch;
    notification: INotification;
}

class NotificationScript extends React.Component<INotificationScript> {
    private extractor: Extractor;
    private similarityChecker: SimilarityChecker;

    constructor (props: INotificationScript) {
        super(props);
        debugger;
        this.extractor = new Extractor();
        this.addToCartCallback = this.addToCartCallback.bind(this);
        this.similarityChecker = new SimilarityChecker();
    }

    componentWillMount (){
        this.extractor.setAddToCartCallback(this.addToCartCallback)      
        
        this.props.dispatch(testNotif());
    }

    addToCartCallback () {
        let extractorProduct = this.extractor.getProduct();
        //alert('add to cart callback');
        if (extractorProduct === null || extractorProduct === undefined) {
            alert('not defined');
            return;
        } else {
            let name = extractorProduct.getName();
            let site = extractorProduct.getSite();
            let description = extractorProduct.getDescription();
            let product: Product = {
                name: name ? name : "",
                site: site ? site: "",
                cost: extractorProduct.getPrice() as number,
                description: description ? description : "",
            }
            //alert('Found product ' + JSON.stringify(product));
            if(true || this.similarityChecker.isSimilar(product)) {
                //alert('Similar product ' + JSON.stringify(product));
                this.props.dispatch(newNotif({notificationType: 'SIMILAR', product: product}))
            }
            else {
                alert("not doing similarity check");
            }
        }    
    }

    render() {
        return (
            <ThemeProvider theme={themes[this.props.theme]}>
                <React.Fragment>
                    <Container >
                        {this.props.notification.notificationType != 'NONE' && 
                        <Notification addToCartAction={this.extractor.addToCartAction}/> }
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
