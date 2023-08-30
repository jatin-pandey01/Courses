import React from 'react'

const Filter = ({category,setCategory,filterData}) => {
  const filterHandler = (e)=>{
    setCategory(e.target.textContent);
    // console.log(e.target.textContent);
  }
  return (
    <div className='my-4 w-11/12 max-w-max justify-center items-center gap-4 flex flex-wrap mx-auto '>
      {
        filterData.map((data)=>{
          if(`${data.title}` === `${category}`){
            return <button key={data.id} onClick={filterHandler} className='bg-[#22223B] transition-all text-white px-3 
            outline outline-2 py-1 font-medium rounded-md text-lg '>
            {data.title}
          </button>
          }
          else{
            return <button key={data.id} onClick={filterHandler} className='bg-[#22223B] transition-all text-white px-3 
            hover:bg-opacity-50] add  py-1 font-medium rounded-md text-lg '>
            {data.title}
          </button>
          }
        })
      }
    </div>
  )
}

export default Filter;