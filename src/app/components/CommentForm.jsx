import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addComments} from '../redux/CommentSlice'
const CommentForm = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.newComments.comments);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const inputCommentValue = e.target.elements.comment.value;
        setComment(inputCommentValue);
        dispatch(addComments(inputCommentValue));
        e.target.reset();
        setComment('');
    }

    return (
        <form className="flex flex-col text-sm text-slate-800 mt-8" onSubmit={handleSubmit}>
             <h4 className="px-4">Comment</h4>
            <div className="max-w-96 w-full pl-3">
                <div className="flex mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <input name="comment" type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your comment" required />
                </div>
                
                <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                    Submit
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default CommentForm;