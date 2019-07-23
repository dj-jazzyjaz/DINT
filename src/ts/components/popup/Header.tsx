import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { ThemeTypes } from '../styles/themes';
import { Trophy } from '../../../assets/SVGIcons';

interface IPopupApp {
	theme: ThemeTypes;
	dispatch: Dispatch;
}

class PopupApp extends React.Component<IPopupApp> {

	render() {
		return (
			<HeaderContainer>
				<Display>DINT</Display>
				<Buttons>
					<div>{Trophy}</div>
					<button>N</button>
					<button>...</button>
				</Buttons>
			</HeaderContainer>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

export default connect(mapStateToProps)(PopupApp);

const HeaderContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: space-between;
    align-items: start;  
    height: 40px;
    width: 300px;
    margin-bottom: 5px;
	background-color: ${p => p.theme.backgroundColor};
	border-bottom: solid rgb(200, 200, 200) 1px;
`;

const Buttons = styled('div')`
	display: flex;
	flex-direction: row;
`;

const Display = styled('div')`
    font-size: 16px;
    justify-self: left;
`;
