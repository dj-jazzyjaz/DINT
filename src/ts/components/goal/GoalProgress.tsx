import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { IGoal } from '../../background/store/reducers/Goal';
import { testGoal, countProductTowardsGoal } from '../../background/store/actions/goalActions';
import { BoldDisplay, Display, Button } from '../styles/sharedElements';
import { devMode } from '../../background/AppConfig';

interface IGoalProps {
    goal: IGoal,
    dispatch: Dispatch;
}

class GoalProgress extends React.Component<IGoalProps> {
    constructor(props: IGoalProps) {
        super(props);

        this.devSave = this.devSave.bind(this);
    }
    componentWillMount (){
        this.props.dispatch(testGoal());
    }

    devSave () {
        //this.props.dispatch(testGoal());
        console.log('hi');
        this.props.dispatch(countProductTowardsGoal({name: 'mug', cost: 10,}))
    }

    render() {
        return (
            <GoalContainer>
                <CatContainer>
                    <BoldDisplay>
                        My savings
                    </BoldDisplay>
                    <Display>
                        Current goal: { this.props.goal.current ? this.props.goal.current.name : "Untitled"}
                    </Display>
                    <Display>Goal Progress: {this.props.goal.current ? this.props.goal.current.goalProgress : "?"}</Display>
                    
                {
                    devMode && <Button onClick={this.devSave}>+</Button>
                }
                </CatContainer>
               <CatContainer>
                    <BoldDisplay>
                        My Environmental Impact
                    </BoldDisplay>
               </CatContainer>
            </GoalContainer>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        goal: state.goal,
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

const CatContainer = styled('div')`
    margin: 10px;
`;