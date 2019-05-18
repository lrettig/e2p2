import React, { Component} from 'react'
import './App.css'

const shardCount = 4

function App() {
  let shards = []
  for (let i = 0; i < shardCount; i++) {
    const row = Math.floor(i/2)
    if (i % 2 === 0)
      shards[row] = []
    shards[row].push(i)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          E2P2 Simulator
        </p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          shards.map((arr, row) =>
            <div key={row}>{
              arr.map(n => <Shard id={n} key={n}/>)
            }</div>
          )
        }
        </div>
      </header>
    </div>
  )
}

class Shard extends Component {
  render() {
    const {id} = this.props
    return (
      <div>
        <h3>Shard {id}</h3>
      </div>
    )
  }
}

export default App
