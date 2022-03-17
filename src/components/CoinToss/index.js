import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headCount: 0,
    tailCount: 0,
    totalCount: 0,
  }

  CoinTossing = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        headCount: prevState.headCount + 1,
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tailCount: prevState.tailCount + 1,
        totalCount: prevState.totalCount + 1,
      }))
    }
  }

  render() {
    const {imgUrl, headCount, tailCount, totalCount} = this.state
    return (
      <div className="totalBG">
        <div className="contentContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="coinImage" src={imgUrl} alt="toss result" />
          <button className="buttons" type="button" onClick={this.CoinTossing}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="paraM">Total:{totalCount}</p>
            <p className="paraM">Heads:{headCount}</p>
            <p className="paraM">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
