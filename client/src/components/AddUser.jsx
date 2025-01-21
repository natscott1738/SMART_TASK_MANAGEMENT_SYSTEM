import { Dialog } from '@headlessui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Textbox from './Textbox';
import Loading from './Loader';
import Button from './Button';
import ModalWrapper from "./ModalWrapper";
import { useRegisterMutation } from '../redux/slices/api/authApiSlice.js';
import { toast } from "sonner";
import { useUpdateUserMutation } from '../redux/slices/api/userApiSlice.js';

const AddUser = ({open, setOpen, userData}) => {

    let defaultValues = userData ?? {};

    const { user } = useSelector((state) => state.auth);
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ defaultValues });

      const [addNewUser, {isLoading}] = useRegisterMutation();
      const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation()
      const handleOnSubmit = async (data)=> {
        try {
          if(userData){

          }else {
            const result = await addNewUser({...data, password: data.email}).unwrap();

            toast.success("New user has been added successfully");
          }

          setTimeout(() => {
            setOpen(false)
          }, 2000);
        } catch (error) {
          toast.error("Something went wrong!");
        }
      };
    
  return (
    <>
    <ModalWrapper open={open} setOpen={setOpen}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
        <Dialog.Title
          as='h2'
          className='text-base font-bold leading-6 text-gray-900 mb-4'
        >
          {userData ? "UPDATE PROFILE" : "ADD NEW USER"}
        </Dialog.Title>
        <div className='mt-2 flex flex-col gap-6'>
          <Textbox
            placeholder='Full name'
            type='text'
            name='name'
            label='Full Name'
            className='w-full rounded'
            register={register("name", {
              required: "Full name is required!",
            })}
            error={errors.name ? errors.name.message : ""}
          />
          <Textbox
            placeholder='Title'
            type='text'
            name='title'
            label='Title'
            className='w-full rounded'
            register={register("title", {
              required: "Title is required!",
            })}
            error={errors.title ? errors.title.message : ""}
          />
          <Textbox
            placeholder='Email Address'
            type='email'
            name='email'
            label='Email Address'
            className='w-full rounded'
            register={register("email", {
              required: "Email Address is required!",
            })}
            error={errors.email ? errors.email.message : ""}
          />

          <Textbox
            placeholder='Role'
            type='text'
            name='role'
            label='Role'
            className='w-full rounded'
            register={register("role", {
              required: "User role is required!",
            })}
            error={errors.role ? errors.role.message : ""}
          />
        </div>

        {isLoading || isUpdating ? (
          <div className='py-5'>
            <Loading />
          </div>
        ) : (
          <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
            <Button
              type='submit'
              className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
              label='Submit'
            />

            <Button
              type='button'
              className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
              onClick={() => setOpen(false)}
              label='Cancel'
            />
          </div>
        )}
      </form>
    </ModalWrapper>
  </>
  )
}

export default AddUser