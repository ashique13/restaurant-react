import React from 'react';
const LoadComment=(props)=>{
    return (
        props.cmt.map(cmt=>{
            return (
                <div key={cmt.id}>
                <h5>{cmt.author}</h5>
                <p>{cmt.comment}</p>
                <p>{cmt.date}</p>
            </div>
            )
        }) 
    )
}
export default LoadComment;