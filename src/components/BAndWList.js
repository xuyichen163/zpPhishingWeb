import React, { useState } from 'react'
import '../styles/BAndWList.css'
import blackList from '../Data/blacks.json'
import whiteList from '../Data/whites.json'

const random = () => Math.floor(Math.random() * 611) // 名单长度最低是611

const createRandomArr = () => Array(50).fill().map(() => random())

const BAndWList = () => {
  const [randomArr, setArr] = useState(createRandomArr())
  const refresh = () => setArr(createRandomArr())
  return (
    <div>
      <button id="refresh-data" onClick={() => refresh()}>
        刷新数据
      </button>
      <div className="list-wrapper">
        <ul id="blacks">
          <div className="list-header">黑名单</div>
          {randomArr.map((randomNum) => (
            <li>{blackList[randomNum].domain}</li>
          ))}
        </ul>
        <ul id="whites">
          <div className="list-header">白名单</div>
          {randomArr.map((randomNum) => (
            <li>{whiteList[randomNum].domain}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BAndWList
