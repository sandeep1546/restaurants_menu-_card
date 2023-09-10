import React from 'react'

 const Navbar = ({filterItems,menuList}) => {
  return (
    <>
                          <h1 algen="center"> Resturant 24x7 </h1>
    <nav className='navbar'>
      <div className='btn-group'>
      {menuList.map((curElem)=>{
        return(
            <button className='btn-group__item' onClick={()=>filterItems(curElem)}>{curElem}</button>
        )

      })}

    </div>
    </nav>
    
    </>
  )
}
export default Navbar;