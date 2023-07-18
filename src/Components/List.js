import React from 'react'

function List({data,fetchContacts,UpdateContact}) {
  
  const deleteContact = async (id) => {

    const res = await fetch(`http://localhost:8000/api/delete/${id}`, {
      method: "POST",
    });

    if (res.ok) {
      fetchContacts();

      /*let newContact = data.filter((singleContact) => {
        return singleContact.id !== id;
      });*/
    
    }
  };

  
  return (
    <div>
      <h2>Listing</h2>
      <table className='table'>
        <tr>
          <th>title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
        
        {data.map((item, index) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td><button 
              onClick={()=>{deleteContact(item.id)}}
              type="button"
              className="btn btn-outline-danger">Delete</button></td>
            <td><button 
              onClick={()=>{UpdateContact(item.id)}}
              type="button"
              className="btn btn-outline-danger">Update</button></td>
          </tr>
        ))}

      </table>
    </div>
  ) 
}

export default List
