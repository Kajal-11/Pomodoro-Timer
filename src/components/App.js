import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength'
import Timer from './Timer'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isRunning: false,
      isSession: true
    }

    this.onIncreaseBreakLength    = this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength    = this.onDecreaseBreakLength.bind(this)
    this.onIncreaseSessionLength  = this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength  = this.onDecreaseSessionLength.bind(this)
    this.onRefreshSession         = this.onRefreshSession.bind(this)
    this.timerUpdate              = this.timerUpdate.bind(this)
    // this.updateTimer              = this.updateTimer.bind(this)
    this.isRunningToggle          = this.isRunningToggle.bind(this)
    this.toggleSession            = this.toggleSession.bind(this)
  }

  onIncreaseBreakLength(){
    if(this.state.isRunning)
      return
    let breaklength = this.state.breakLength + 1
    this.setState({
        breakLength: breaklength,
    })
  }

  onDecreaseBreakLength(){
    if(this.state.isRunning)
      return
    let breaklength = this.state.breakLength - 1
    this.setState({
        breakLength: breaklength,
    })
  }

  onIncreaseSessionLength(){
    if(this.state.isRunning)
      return
    let sessionlength = this.state.sessionLength + 1
    this.setState({
        sessionLength: sessionlength,
        timerMinute: sessionlength
    })
  }

  onDecreaseSessionLength(){
    if(this.state.isRunning)
      return
    let sessionlength = this.state.sessionLength - 1
    this.setState({
        sessionLength: sessionlength,
        timerMinute: sessionlength
    })
  }

  onRefreshSession(){
    this.setState({
      timerMinute: this.state.sessionLength,  
      isSession: true
    })
  }

  timerUpdate(){
    this.setState(prev =>{
      return{
        timerMinute: prev.timerMinute - 1
      }
    })
  }

  // updateTimer(length){
  //   if(this.state.isSession)
  //     this.setState({
  //         timerMinute: length
  //     })

  //   else if(!this.state.isSession)
  //   this.setState({
  //       timerMinute: this.state.breakLength
  //   })
  // }
  
  isRunningToggle(){
    this.setState(prev =>({
      isRunning: !prev.isRunning
    })
    )
  }

  toggleSession(){
    if(!this.state.isSession)
      this.setState({
        timerMinute: this.state.sessionLength,  
        isSession: true
      })
    else
      this.setState({
        timerMinute: this.state.breakLength,  
        isSession: false,
      })
  }

  render(){
    return (
      <main>
        <h1 className="title">Pomodoro Clock</h1>
        <div className="interval">
          <BreakInterval 
            breakInterval = {this.state.breakLength}
            onIncrease = {this.onIncreaseBreakLength}
            onDecrease = {this.onDecreaseBreakLength} />
          <SessionLength 
            sessionInterval = {this.state.sessionLength}
            onIncrease = {this.onIncreaseSessionLength}
            onDecrease = {this.onDecreaseSessionLength} />
        </div>
        <Timer 
          timerMinute = {this.state.timerMinute}
          onRefreshSession = {this.onRefreshSession}
          timerUpdate = {this.timerUpdate}
          isRunning = {this.state.isRunning}
          isRunningToggle = {this.isRunningToggle}
          isSession = {this.state.isSession}
          toggleSession = {this.toggleSession} />
      </main>
    );
  }
}

export default App;
