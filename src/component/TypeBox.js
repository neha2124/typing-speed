import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import UpperMenu from './upperMenu'
import { TestContext } from './context/TestMode'
import Stats from './stats'
var randomWords = require('random-words')

const TypeBox = () => {

  const { updateTime } = TestContext()
  const inputRef = useRef('input-box')

  const [randomWord, setRandoWord] = useState(() => {
    return randomWords(50)
  })
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  // const [intervalId, setIntervalId] = useState(null)
  const [correctChar, setCorrectChar] = useState(0)
  const [wrongChar, setWrongChar] = useState(0)
  const [missedChar, setMissedChar] = useState(0)
  const [extraChar, setExtraChar] = useState(0)
  const [correctWord, setCorrectWord] = useState(0)
  const [time, setTime] = useState(updateTime)
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [graphData, setGraphData] = useState([])


  // wordsref contains the array of 50 words
  const wordsRef = useMemo(() => {
    return (
      Array(randomWord.length).fill(0).map(i =>
        createRef(null)
      )
    )
  }, [randomWord])

  const CalculateWpm = () => {
    return (
      Math.round((correctChar / 5) / (updateTime / 60))
    )
  }
  const calculteAcc = () => {
    return Math.round((correctWord/wordIndex)*100)
  }

  //this function run when test start and timer start run
  const setTimer = () => {
    let timerId = setInterval(timer, 1000)

    function timer() {
      setTime((curTime) => {
        setCorrectChar((correctChar)=>{
          setGraphData((graphData)=>{
            return(
              [...graphData,[updateTime-curTime+1,
              (correctChar/5)/((updateTime-curTime+1)/60)
              ]]
            )
          })
          return correctChar
        })

        if (curTime === 1) {
          setTestEnd(true)
          clearInterval(timerId)
          return ;
        }
        return curTime - 1
      })

    }
  }

  // this function run when user start typing
  const handleUserInput = (e) => {
    // check if game is not start then start the game and run timer
    if (!testStart) {
      setTimer()
      setTestStart(true)
    }
    // all char contains nodeList of characters in word
    const allchar = wordsRef[wordIndex].current.childNodes

    // logic for space-bar 
    if (e.keyCode === 32) {

      let correctCharInWord = wordsRef[wordIndex].current.querySelectorAll('.correct')
      // let a = Array.from(correctCharInWord)
      console.log(correctCharInWord)
      if(allchar.length === correctCharInWord.length){
      setCorrectWord(correctWord+1)
      }
      console.log(correctWord)
      
      if (allchar.length <= charIndex) {
        allchar[charIndex - 1].classList.remove('current-right')
      } else {
        allchar[charIndex].classList.remove('current')
        setMissedChar(missedChar + (allchar.length - charIndex))
      }

      wordsRef[wordIndex + 1].current.childNodes[0].classList = 'current'
      setWordIndex(wordIndex + 1)
      setCharIndex(0)
      return;
    }

    // logic for backspace
    if (e.keyCode === 8) {
      if (charIndex !== 0) {
        if (allchar.length === charIndex) {

          if (allchar[charIndex - 1].className.includes('extra')) {
            allchar[charIndex - 1].remove()
            allchar[charIndex - 2].className += ' current-right'
          } else {
            allchar[charIndex - 1].className = 'current';
          }

          setCharIndex(charIndex - 1)
          return;
        }

        allchar[charIndex].className = '';
        allchar[charIndex - 1].className = 'current';
        setCharIndex(charIndex - 1)
      }
      return
    }

    // logic to add extra incorrect words if user type 
    if (charIndex === allchar.length) {
      let newSpan = document.createElement('span')
      newSpan.innerText = e.key;
      newSpan.className = 'incorrect extra current-right '
      allchar[charIndex - 1].classList.remove('current-right')
      wordsRef[wordIndex].current.append(newSpan)
      setCharIndex(charIndex + 1)
      setExtraChar(extraChar + 1)
      return

    }

    //  check if user input is correct or not
    if (e.key === allchar[charIndex].innerText) {
      allchar[charIndex].className = 'correct'
      setCorrectChar(correctChar + 1)
    } else {
      allchar[charIndex].className = 'incorrect'
      setWrongChar(wrongChar + 1)
    }
    setCharIndex(charIndex + 1)

    if (charIndex + 1 === allchar.length) {
      allchar[charIndex].className += ' current-right'
    } else {
      allchar[charIndex + 1].className = 'current'
    }
  }


  const focusInput = () => {
    inputRef.current.focus()
  }
  const resetTest = () => {
    // clearInterval(intervalId)
    setCharIndex(0);
    setWordIndex(0)
    setTestEnd(false)
    setTestStart(false)
    setRandoWord(randomWords(50))
    setTime(updateTime)
    removeClassName()
    focusInput()
  }
  const removeClassName = () => {
    wordsRef.map(i => {
      Array.from(i.current.childNodes).map(j => {
        j.className = ''
      })
    })
    wordsRef[0].current.childNodes[0].className = 'current'
  }

  useEffect(() => {
    resetTest()
  }, [updateTime])

  useEffect(() => {
    wordsRef[0].current.childNodes[0].className = 'current'
    focusInput()
  }, [])

  // console.log(correctChar , missedChar , wrongChar , extraChar)

  return (
    <>
      <UpperMenu Timer={time} />
      {testEnd ? <Stats Wpm={CalculateWpm()} 
      Accuracy={calculteAcc()} 
      Correctchar={correctChar}
       WrongChar={wrongChar}
       Missedchar={missedChar}
       ExtraChar={extraChar}
       graphData={graphData}/> :
        <div className='type-box' onClick={focusInput}>
          <div className="words">
            {
              randomWord.map((word, index) => {
                return (
                  <span className='word' ref={wordsRef[index]}>

                    {word.split('').map(char => {
                      return (<span>{char}</span>)


                    })}

                  </span>
                )

              })}
          </div>
          <input
            className='input-box'
            ref={inputRef}
            onKeyDown={handleUserInput}
            placeholder='type'
            type="text" />
        </div>
      }
    </>
  )
}

export default TypeBox