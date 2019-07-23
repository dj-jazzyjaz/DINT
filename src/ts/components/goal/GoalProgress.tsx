import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAppState } from '../../background/store';
import { countProductTowardsGoal } from '../../background/store/actions/goalActions';
import { BoldDisplay, Display, Button } from '../styles/sharedElements';
import { devMode } from '../../background/AppConfig';
import { Goal } from '../../background/store/reducers/goal';
import { changeView } from '../../background/store/actions/viewsActions';

interface IGoalProps {
    currentGoal: Goal,
    dispatch: Dispatch;
}

class GoalProgress extends React.Component<IGoalProps> {
    constructor(props: IGoalProps) {
        super(props);

        this.devSave = this.devSave.bind(this);
    }
    componentWillMount (){
        //this.props.dispatch(testGoal());
    }

    devSave () {
        //this.props.dispatch(testGoal());
        console.log('hi');
        if(this.props.currentGoal.goalProgress + 10 >= this.props.currentGoal.goalAmount) {
            this.props.dispatch(countProductTowardsGoal({productName: 'mug', cost: 10,}));
            this.props.dispatch(changeView("SETGOAL"));
        } else {
            this.props.dispatch(countProductTowardsGoal({productName: 'mug', cost: 10,}))
        }  
    }

    render() {
        return (
            <GoalContainer>
                <CatContainer>
                    <BoldDisplay>
                        My savings
                    </BoldDisplay>
                    <Display>
                        Current goal: { this.props.currentGoal.name ? this.props.currentGoal.name : "Untitled"}
                    </Display>
                    <Display>Goal amount: {this.props.currentGoal.goalAmount}</Display>
                    <Display>Goal Progress: {this.props.currentGoal.goalProgress}</Display>
                    
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
        currentGoal: state.goal.current ? state.goal.current : {goalAmount: 1234, goalProgress: 0},
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
`;