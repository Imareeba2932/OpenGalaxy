import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function USidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h6 className='icon_header'/> Buiseness Incubator
            </div>
            <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
                <Link to="/admin/base">
                    <BsFillArchiveFill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/Pmanage">
                    <BsFillGrid3X3GapFill className='icon'/> Planning Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/Lmanage">
                    <BsPeopleFill className='icon'/> Launching Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/Mmanage">
                    <BsPeopleFill className='icon'/> Managing Services
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/Umanage">
                    <BsPeopleFill className='icon'/> User Database
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <Link to="/Admin/UserProfile">
                    <BsPeopleFill className='icon'/> User Profile
                </Link>
            </li> */}
            
        </ul>
    </aside>
  )
}

export default USidebar