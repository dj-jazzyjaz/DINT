import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { BoldDisplay } from '../styles/sharedElements';


interface ISettingsProps {
    dispatch: Dispatch;
}

class GoalProgress extends React.Component<ISettingsProps> {
    constructor(props: ISettingsProps) {
        super(props);

    }


    render() {
        return (
            <GoalContainer>
                <BoldDisplay>Settings </BoldDisplay>
            </GoalContainer>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
       
    } ;
};

export default connect(mapStateToProps)(GoalProgress);

const GoalContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    min-width: 100px;
    padding: 5px;
    margin: 5px;
    background-color: ${p => p.theme.backgroundColor};
`;
