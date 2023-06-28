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
        </header>
    )
}

export default Header