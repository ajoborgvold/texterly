import React from 'react'

function ProcessSection(props) {
    const { loading, apiError, words, enableCopy, copyText, editText, characters } = props
    
    const btnClass = !loading && !apiError && words ? 'enabled' : 'disabled'
    
    return (
        <section className="process-section">
            {enableCopy && <button className="copy-btn" onClick={copyText}><i className="fa-regular fa-clipboard"></i>Copy text</button>}
            <div className="process-container">
                <button className={`process-btn ${btnClass}`} onClick={editText}>Process</button>
                <div className="counter-wrapper">
                    <h2>Characters</h2>
                    <p className="counter__number">{characters}</p>
                </div>
                <div className="counter-wrapper">
                    <h2>Words</h2>
                    <p className="counter__number">{words}</p>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection