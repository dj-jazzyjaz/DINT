import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../background/store';
import GlobalStyle from '../../components/styles/GlobalStyle';
import { themes, ThemeTypes } from '../../components/styles/themes';
import GoalProgress from '../goal/GoalProgress';
import Header from './Header';
import SetGoal from '../goal/SetGoal';
import { popUpViewType } from '../../background/store/reducers/views';

interface IPopupApp {
	theme: ThemeTypes;
	dispatch: Dispatch;
	view: popUpViewType;
}

class PopupApp extends React.Component<IPopupApp> {

	render() {
		return (
			<ThemeProvider theme={themes[this.props.theme]}>
				<React.Fragment>
					<GlobalStyle />
					<PopupAppContainer>
						<Header />
						{(this.props.view === "GOALPROGRESS") && <GoalProgress />}
						{(this.props.view === "SETGOAL") && <SetGoal/>}
					</PopupAppContainer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme,
		view: state.views.popUpView
	};
};

export default connect(mapStateToProps)(PopupApp);

const PopupAppContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: start;
    justify-items: start;
    align-items: start;  
    height: 250px;
    width: 300px;
    margin: 10px;
    background-color: ${p => p.theme.backgroundColor};
`;