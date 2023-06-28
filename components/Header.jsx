import React from 'react'

function Header(props) {    
    const iconClass = props.theme === 'light' ? 'toggle-light' : 'toggle-dark fa-rotate-180'
    
    return (
        <header>
            <i 
                className={`fa-solid fa-toggle-on ${iconClass}`} 
                onClick={props.toggleTheme}
            >
            </i>
            <h1>Texterly</h1>
            <h2 className='subheading'>Let an AI do the proofreading</h2>
        </header>
    )
}

export default Header