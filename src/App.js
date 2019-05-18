import React, { Component } from 'react'
import './App.css'
import Websocket from 'react-websocket'

const shardCount = 4

class App extends Component {
  constructor (props) {
    super(props)

    let shards = []
    for (let i = 0; i < shardCount; i++) {
      const row = Math.floor(i / 2)
      if (i % 2 === 0) shards[row] = []
      shards[row].push(i)
    }

    this.state = { shards }
  }

  handleMessage (data) {
    console.log('Received message:', data)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>
            E2P2 Simulator
          </p>
          <Websocket url='ws://localhost:4567/' onMessage={this.handleMessage.bind(this)} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
              this.state.shards.map((arr, row) =>
                <div key={row}>{
                  arr.map(n => <Shard id={n} key={n} />)
                }</div>
              )
            }
          </div>
        </header>
      </div>
    )
  }
}

class Shard extends Component {
  render () {
    const { id } = this.props
    return (
      <div>
        <h3>Shard {id}</h3>
      </div>
    )
  }
}

export default App
