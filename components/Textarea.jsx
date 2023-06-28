import React from 'react'
import CopyMessage from './CopyMessage'
import ErrorMessage from './ErrorMessage'

function Textarea(props) {
    const { value, handleTextareaChange, textareaDisabled, loading, copy, apiError } = props
    
    return (
        <section className="text-area-container">
            <textarea 
                value={value} 
                placeholder="Paste your text here"
                onChange={handleTextareaChange}
                disabled={textareaDisabled}
            />
            {loading && <i className="fa-solid fa-spinner fa-spin"></i>}
            {copy && <CopyMessage />}
            {apiError && <ErrorMessage />}
        </section>
    )
}

export default Textarea