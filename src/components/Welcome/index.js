import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  changeButtonText = () => {
    this.setState(prevState => {
      if (prevState.buttonText === 'Subscribe') {
        return {buttonText: 'Subscribed'}
      }
      return {buttonText: 'Subscribe'}
    })
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.changeButtonText}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
