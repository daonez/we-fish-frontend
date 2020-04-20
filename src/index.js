import React from 'react'
import ReactDOM from 'react-dom'
import Kakao from 'kakaojs'
import Routes from './Routes'
import './fonts.scss'

ReactDOM.render(<Routes />, document.getElementById('root'))

Kakao.init('e3e82dffc2b3f62d521ecdb7a1954e17')
