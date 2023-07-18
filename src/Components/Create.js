import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Create({ fetchContacts }) {
  const { register, handleSubmit, reset } = useForm();
  



  const onSubmit = async (register) => {
    try {
      const res = await fetch('http://localhost:8000/api/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(register),
      });


      if (res.ok) {
        // const newTask = await res.json();
        // setData([...task, res]);
        reset();
        fetchContacts();
      } else {
        alert('Task creation failed');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-content-center my-5">
          <div className="col-6">
            <div className="m-3">
              <h2>Create</h2>
            </div>
            <div className="m-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                {...register('name')}
              />
            </div>
            <div className="m-3">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                {...register('description')}
              />
            </div>
            <div className="m-3">
          
              <button className="form-control btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
