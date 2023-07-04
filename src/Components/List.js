import React from 'react'

function List({data}) {
  
  const deleteContact = async (id) => {

    const res = await fetch(`http://localhost:3005/contacts/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
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
            <td>{item.id}</td>
            <td><button type='button' onClick={()=>{deleteContact(id)}}>Delete</button>{item.id}</td>
          </tr>
        ))}

      </table>
    </div>
  ) 
}

export default List
