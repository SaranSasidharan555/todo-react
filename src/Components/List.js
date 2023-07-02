import React from 'react'

function List({data}) {
  console.log(data)
  return (
    <div>
      <h2>Listing</h2>
      <table className='table'>
        <tr>
          <th>title</th>
          <th>Description</th>
        </tr>
        
        {data.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}

      </table>
    </div>
  ) 
}

export default List
