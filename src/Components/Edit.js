import React from 'react';
import { useForm } from 'react-hook-form';

function Edit({ create, fetchContacts }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => { // Changed parameter name from 'register' to 'formData'
    try {
      const res = await fetch(`http://localhost:8000/api/updateTask/${create.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        reset();
        fetchContacts();
      } else {
        alert('Task update failed');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <input
            type="text"
            value={create.title}
            className="form-control"
            placeholder="Title"
            {...register('name')}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            value={create.description}
            placeholder="Description"
            {...register('description')}
          />
        </div>
        <div className="m-3">
          <button className="form-control btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
