import React, {FC} from 'react'
import { Post } from '../typings'

interface Props {
    comments: Post
}
const Comment: FC<Props> = ({comments}) => {
  return (
    <div className='flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2'>
        <h3 className='text-4xl'>Comments</h3>
        <hr className='pb-2' />
        {comments.comments.map((comment) => (
            <div key={comment._id}>
                <p>
                    <span className='text-yellow-500'>{comment.name} said: </span> 
                     {comment.comment}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Comment