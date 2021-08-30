import React, { useState } from "react";
import { useComments } from "../../context/CommentsContext";
import Comment from "./Comment";
import CommentCreateForm from "../CommentCreateForm";
import "./commentList.css";

export default function CommentList() {
   const [addComment, setAddComment] = useState(false);
   const { comments } = useComments();

   let leaveComment;
   if (!addComment) {
      leaveComment = (
         <button
            type="button"
            className="comments__add-btn"
            onClick={() => setAddComment(!addComment)}
         >
            Leave a Comment
         </button>
      );
   } else {
      leaveComment = (
         <CommentCreateForm
            setAddComment={setAddComment}
            addComment={addComment}
         />
      );
   }

   return (
      <>
         <div className="comment-create">{leaveComment}</div>
         {comments?.length ? (
            <div className="comment-list">
               {comments?.map((comment, i) => {
                  return (
                     <div key={comment.id}>
                        <div className="comment">
                           <Comment comment={comment} />
                           {comments[i + 1] ? (
                              <div key={i} className="comment__border"></div>
                           ) : null}
                        </div>
                     </div>
                  );
               })}
            </div>
         ) : null}
      </>
   );
}
