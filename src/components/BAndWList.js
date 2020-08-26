import React, { useState } from 'react'
import '../styles/BAndWList.css'
import blackList from '../Data/blacks.json'
import whiteList from '../Data/whites.json'

function random() {
  return Math.floor(Math.random() * 611) // 一个长度是 33884, 一个长度是 100000
}

const BAndWList = () => {
  const [arr50, setArr] = useState(() => {
    const array50 = new Array(50)
    for (let i = 0; i < 50; ++i) {
      array50[i] = random()
    }
    return array50
  })
  const refresh = () => {
    setArr(() => {
      const array50 = new Array(50)
      for (let i = 0; i < 50; ++i) {
        array50[i] = random()
      }
      return array50
    })
  }
  return (
    <div>
      <button id="refresh-data" onClick={() => refresh()}>
        刷新数据
      </button>
      <div className="list-wrapper">
        <ul id="blacks">
          <div className="list-header">黑名单</div>
          {arr50.map((randomNum) => {
            return <li>{blackList[randomNum].domain}</li>
          })}
        </ul>
        <ul id="whites">
          <div className="list-header">白名单</div>
          {arr50.map((randomNum) => (
            <li>{whiteList[randomNum].domain}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BAndWList
