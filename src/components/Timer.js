import React from 'react'

class Timer extends React.Component{
    constructor(){
        super()

        this.state = {
            timerSecond: 0,
            timer: 0
        }
        this.onRefresh = this.onRefresh.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.timer = this.timer.bind(this)
    }

    onRefresh(){
        this.stopTimer()
        this.props.onRefreshSession()
        this.setState({
            timerSecond: 0
        })
    }

    startTimer(){
        if(this.props.isRunning)
            return                       //If the timer is already running, no action

        this.props.isRunningToggle()

        this.setState({
            timer: setInterval(this.timer, 1000)
        }) 
    }

    stopTimer(){
        if(this.props.isRunning){
            this.setState(prev =>({
            timer: clearInterval(prev.timer),
            }))
            this.props.isRunningToggle()
        }    
    }

    timer(){
        this.setState(prev => {
            if(prev.timerSecond)
              return{
                  timerSecond: prev.timerSecond - 1
              }  
            else if(this.props.timerMinute){
              this.props.timerUpdate()
              this.setState({
                  timerSecond: 59,
              })
            }
            else if (true){
              this.props.toggleSession()
            }
        }
        )
    }

    render(){
        return(
            <section className='timer'>
                <section className='clock'>
                    <h2>{this.props.isSession ? "Session" : "Break"} Timer</h2>
                    <div>
                        <span>{this.props.timerMinute === 0 ? "00" : this.props.timerMinute < 10 ? "0" + this.props.timerMinute : this.props.timerMinute}</span>
                        <span> : </span>
                        <span>{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
                    </div>
                </section>
                <section className='funcButtons'>
                    <button onClick={this.startTimer}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.onRefresh}>Refresh</button>
                </section>
            </section>
        )
    }
}

export default Timer