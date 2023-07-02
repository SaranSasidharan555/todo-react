import React from 'react';
import { useForm } from 'react-hook-form';

function Create({setData}) {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // e.preventDefault(); // Prevents the default form submission behavior
    
        // Perform form validation or data processing here
    
        // Submit the form
        console.log('Form submitted:', data);
        setData((prevData) => [...prevData, data]);
reset();
      };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row justify-content-center my-5'>
            <div className='col-6'>
                <div className='m-3'>
                    <h2>Create</h2>
                </div>
                <div className='m-3'>
                    <input type='text' className='form-control' placeholder='Title' {...register('name')}/>
                </div>
                <div className='m-3'>
                    <input type='text' className='form-control' placeholder='Description' {...register('description')}/>
                </div>
                <div className='m-3'>
                    <button className='form-control btn btn-success' type='submit'>Submit</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Create
