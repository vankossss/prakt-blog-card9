import React from 'react';
import './BlogCard.css'; 

export default function BlogCard({ 
  image, 
  category, 
  date, 
  title, 
  description, 
  authorImage, 
  authorName 
}) {
  return (
    <article className="blog-card">
      <div className="card-image-container">
        <img 
          src={image} 
          alt="Ілюстрація до статті блогу" 
          className="card-image" 
        />
      </div>

      <div className="card-content">
        <span className="card-category">{category}</span>
        <p className="card-date">Опубліковано {date}</p>
        <h2 className="card-title">
          <a href="#">{title}</a>
        </h2>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-author">
        <img 
          src={authorImage} 
          alt={`Аватар ${authorName}`} 
          className="author-avatar" 
        />
        <span className="author-name">{authorName}</span>
      </div>
    </article>
  );
}