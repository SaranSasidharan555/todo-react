import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Create({ setData }) {
  const { register, handleSubmit, reset } = useForm();
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await fetch('http://localhost:8000/csrf-cookie');
        if (response.ok) {
          setCsrfToken(response.headers.get('X-CSRF-TOKEN'));
        } else {
          console.log('CSRF token fetch failed');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (task) => {
    try {
      const res = await fetch('http://localhost:8000/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(task),
      });

      if (res.ok) {
        const newTask = await res.json();
        setData([...task, newTask]);
        reset();
      } else {
        console.log('Task creation failed');
      }
    } catch (error) {
      console.log(error);
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
              <input type="hidden" name="_token" value={csrfToken} />
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
