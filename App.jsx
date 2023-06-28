import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Textarea from './components/Textarea'
import ProcessSection from './components/ProcessSection'


function App() {
    const [theme, setTheme] = useState('light')
    const [textareaValue, setTextareaValue] = useState('')
    const [numCharacters, setNumCharacters] = useState(0)
    const [numWords, setNumWords] = useState(0)
    const [enableCopy, setEnableCopy] = useState(false)
    const [copy, setCopy] = useState(false)
    const [textareaDisabled, setTextareaDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(false)
    
    useEffect(() => {
        const allWordsArr = textareaValue.split(' ')
        const charCount = allWordsArr.join('').length
        const wordCount = allWordsArr.filter(char => char !== '').length
        
        setNumCharacters(charCount)
        setNumWords(wordCount)
        
    }, [textareaValue])

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    function handleTextareaChange(e) {
        setTextareaValue(e.target.value)
    }
    
    async function editText() {
        const url = 'https://gorgeous-macaron-b2dbfc.netlify.app/.netlify/functions/callApi'

        if (textareaValue) {
            setLoading(true)
            setTextareaDisabled(true)
            const response = await fetch(url, {
                method: 'POST',
                header: {
                    'content-type': 'text/plain'
                },
                body: textareaValue
            }).catch(err => {
                console.log(err.response)
                setLoading(false)
                setApiError(true)
                setTextareaDisabled(true)
            })
            const data = await response.json()

            if (data) {
                const returnedText = data.reply.choices[0].text
                setTextareaValue(returnedText)
                setLoading(false)
                setTextareaDisabled(false)
                setEnableCopy(true)
            }

        }
    }
        
//--- In the function below, I've commented out the copy method since it doesn't work here on Scrimba. But it should work in a real world browser – at least I hope so! ---//
    function copyText() {
        // navigator.clipboard.writeText(textareaValue)
        setTextareaDisabled(true)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
            setTextareaDisabled(false)
            setEnableCopy(false)
        }, 3000)
    }  
        
    return (
        <div className={`container ${theme}`}>
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <Textarea 
                value={textareaValue} 
                handleTextareaChange={handleTextareaChange}
                loading={loading}
                copy={copy}
                textareaDisabled={textareaDisabled}
                apiError={apiError}
            />
            <ProcessSection 
                characters={numCharacters} 
                words={numWords} 
                editText={editText}
                enableCopy={enableCopy}
                copyText={copyText}
                loading={loading}
                apiError={apiError}
            />
        </div>
    )
}

export default App