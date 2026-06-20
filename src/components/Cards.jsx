import React from 'react';
import './Card.css';

function Card({ post, removePost }) {
  const dateObj = post.timestamp ? new Date(post.timestamp) : null;
  
  const isValidDate = dateObj && !isNaN(dateObj.getTime());


  return (
    <div className="card"> 
      <button className="delete-btn" onClick={() => removePost(post.id)} aria-label="Delete post">
        ✕
      </button>

      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-body">{post.body}</p>
        <span className="card-date"  >Sat, 20 June 2026, 12:06 PM </span>
      </div>

      <div className="card-image-wrapper">
        <img 
          src={`https://picsum.photos/400/200?random=${post.id}`} 
          alt={post.title || "Post thumbnail"} 
          className="card-image"
        />
      </div>
    </div>
  );
}

export default Card;