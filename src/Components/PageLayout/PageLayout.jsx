import Dropdown from '../NavigationDropdown/Dropdown'
import Announcements from '../Annoucements/Announcements'

function PageLayout({navItems, content, title}) {
  return (
      <div className='flex flex-col lg:p-20 lg:pt-10 lg:gap-10 md:p-10 p-5 gap-5 md:gap-5 border-2 border-black rounded shadow-md shadow-amber-400'>
        <div className='flex justify-between'>
            <div>
                <Dropdown navItems={navItems}/>
            </div>
            <div>
                <Announcements />
            </div>
        </div>
        <div className='border-2 border-black lg:p-10 md:p-5 p-5 gap-2 rounded flex flex-col lg:gap-10 md:gap-5 text-white shadow-lg shadow-blue-950'>
            <h1 className='md:text-6xl text-4xl text-center'>{title}</h1>
            <main>{content}</main>
            
        </div>
      </div>
  )
}

export default PageLayout
