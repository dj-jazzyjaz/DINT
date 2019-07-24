import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import { IAppState } from '../../background/store';
import { Goal } from '../../background/store/reducers/Goal';
import { countProductTowardsGoal } from '../../background/store/actions/goalActions';
import { BoldDisplay, Display, Button } from '../styles/sharedElements';
import { devMode } from '../../background/AppConfig';
import { changeView } from '../../background/store/actions/viewsActions';
import { green } from '../styles/themes';

interface IGoalProps {
    goal: Goal,
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
        if(this.props.goal.goalAmount <= this.props.goal.goalProgress + 10) {
            this.props.dispatch(countProductTowardsGoal({name: 'mug', cost: 10,}))
            this.props.dispatch(changeView("SETGOAL"));
        } else {
            this.props.dispatch(countProductTowardsGoal({name: 'mug', cost: 10,}))
        }
        
    }

    render() {
        const progressPercent = (this.props.goal.goalProgress / this.props.goal.goalAmount) * 100;

        return (
            <GoalContainer>
                <CatContainer>
                    <BoldDisplay>
                        My savings
                    </BoldDisplay>
                    <ProgressBarContainer>
                        <CircularProgressbar
                            value={progressPercent}
                            text={`$${this.props.goal.goalProgress}`}
                            styles={{
                                path: {
                                    stroke: green,
                                },
                                text: {
                                    fill: green,
                                },
                                background: {
                                    fill: green,
                                }
                            }}
                        />
                    </ProgressBarContainer>
                    <Display>
                        Current goal: {  this.props.goal.name ? this.props.goal.name : "Untitled"}
                    </Display>
                    <Display>
                        Goal amount: { this.props.goal.goalAmount }
                    </Display>
                    <Display>Goal Progress: {this.props.goal.goalProgress}</Display>
                    
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
        goal: state.goal.current ? state.goal.current : {goalAmount: -1, goalProgress: 0},
    } ;
};

export default connect(mapStateToProps)(GoalProgress);

const ProgressBarContainer = styled('div')`
    display: flex;
    padding: 50px;
`;

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