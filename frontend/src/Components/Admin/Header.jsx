import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

function Header({ OpenSidebar, children }) {
    return (
        <div className='admin-header'>

            <header className='header1'>
                <div className='menu-icon'>
                    <BsJustify className='icon' onClick={OpenSidebar} />
                </div>
                <div className='header-left'>
                    <BsSearch className='icon' />
                </div>
                <div className='header-right'>
                    <BsPersonCircle className='icon' />
                </div>
            </header>
            {children}
        </div>
    )
}

export default Header
