import React from 'react'
import { SidebarData } from './SidebarData';

const Search = () => {

    const propertySearch = (e) => {
        let input = e.target.value;
        let item = document.getElementsByClassName('show')
        let info = SidebarData[1].subNav
        for (let i = 0; i < info.length; i++) {
            const element = info[i];
            if(element.title.toLowerCase().includes(input)){
                item[i].style.display='flex'
            }
            else{
                console.log('miss')
                item[i].style.display='none'
            }
        }
  }

  return (
    <div className='input-group' style={{width: '225px', padding: '10px 0px 0px 0px'}}>
        <input type={'search'} placeholder='Search For Property' onChange={(e) => propertySearch(e)}/>
    </div>
  )
}

export default Search