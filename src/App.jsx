import { useState } from "react"

function App() {
    const [screen, setScreen] = useState('')

    const handleBtns = (num) => {
        if (screen == 'I MISS YOU HAZEL <3') {
            setScreen(num)
        } else {
            setScreen(prev =>prev + num)
        }
    }

    const handleC = () => {
        if (screen !== '') {
            setScreen('I MISS YOU HAZEL <3')
        }
    }

    return (
        <div className="app">
            <div className="calc-cont">
                <div className="screen">{screen}</div>
                <div className="btns">
                    <button onClick={() => handleBtns('+')}>+</button>
                    <button onClick={() => handleBtns('7')}>7</button>
                    <button onClick={() => handleBtns('8')}>8</button>
                    <button onClick={() => handleBtns('9')}>9</button>
                    <button onClick={() => handleBtns('-')}>-</button>
                    <button onClick={() => handleBtns('4')}>4</button>
                    <button onClick={() => handleBtns('5')}>5</button>
                    <button onClick={() => handleBtns('6')}>6</button>
                    <button onClick={() => handleBtns('*')}>*</button>
                    <button onClick={() => handleBtns('1')}>1</button>
                    <button onClick={() => handleBtns('2')}>2</button>
                    <button onClick={() => handleBtns('3')}>3</button>
                    <button onClick={() => handleBtns('/')}>/</button>
                    <button onClick={() => handleBtns('0')}>0</button>
                    <button onClick={() => handleBtns('.')}>.</button>
                    <button onClick={() => handleC()}>=</button>
                    <button onClick={() => setScreen('')}>C</button>
                </div>
            </div>
        </div>
    )
}

export default App
