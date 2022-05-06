import React, {FC} from "react";
import { useForm, SubmitHandler } from 'react-hook-form'; 
import { FieldFiller } from '../typings';
import { Post } from '../typings';

interface Props {
    post: Post;
  };

const CommentForm: FC<Props> =( {post} ) => {

    const { 
        register, 
        handleSubmit, 
        formState: {errors}
     } = useForm();

    const onSubmit: SubmitHandler<FieldFiller> = async(data) => {
        try{
            const postComment = await fetch('/api/createComment', {
                method: 'POST', 
                body: JSON.stringify(data)
            });

            console.log(postComment);
        }
        catch(err){
            console.log(err);
        };
    }; 

    return (
    <>
        <hr className='max-w-lg my-5 mx-auto border border-yellow-500 '/>

        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
        <h3 className='text-sm text-yellow-500 mb-5'>Enjoyed this article?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-3 mt-2" /> 

        <input 
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id} /> 


        <label className='block mb-5'>
            <span className='text-gray-700'>Name</span>
            <input 
                {...register("name", {required: true })}
                className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500'
                type="text" 
                placeholder="enter name..."
                />
        </label>

        <label className='block mb-5'>
            <span className='text-gray-700'>Email</span>
            <input 
                {...register("email", {required: true })}
                className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500'
                type="email" 
                placeholder="example@mail.com"
                />
        </label>

        <label className='block mb-5'>
            <span className='text-gray-700'>Comment</span>
            <textarea 
                {...register("comment", {required: true })}
                className='shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring'
                placeholder="write a comment..."
                rows={8}
                />
        </label>

        <div className="flex flex-col p-5">
            {errors.name  && (
                <span className="text-red-500">- The name field is required</span>
            )}
            {errors.email  && (
                <span className="text-red-500">- The email field is required</span>
            )}
            {errors.comment  && (
                <span className="text-red-500">- The comment field is required</span>
            )}

        </div>

        <input 
            className="shadow bg-yellow-500 hover:bg-yellow-400
            focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            type="submit" 
            value="Submit"
            />
        </form> 

    </>
    );
};


export default CommentForm;
