import React from 'react'
import Calculator from '../components/Calculator'
import Header from '../components/Header'

const Calculate = () => {
    return (
        <div>
            <Header />
        <div class='screen calcscreen'>
            <div className="left">
                <h1>Let's do some math!</h1>
            </div>
            <div className="right">
                <Calculator />
            </div>
        </div>
        </div>
    )
}

export default Calculate
