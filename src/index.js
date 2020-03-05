import React from 'react'
import ReactDOM from 'react-dom'
import Kakao from 'kakaojs'

import Routes from './Routes'
import './styles/index.scss'
import './fonts/Spoqa Han Sans Regular.ttf'
import './fonts/Spoqa Han Sans Bold.ttf'
import './fonts/Spoqa Han Sans Light.ttf'
import './fonts/Spoqa Han Sans Thin.ttf'

ReactDOM.render(<Routes />, document.getElementById('root'))

Kakao.init('e3e82dffc2b3f62d521ecdb7a1954e17')
