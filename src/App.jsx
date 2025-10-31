import React from 'react';
import BlogCard from './components/BlogCard';

function App() {
  
  const cardData = {
    image: "/assets/Blog_Image.png",
    category: "Навчання",
    date: "31 жовтня 2025",
    title: "HTML, CSS та React",
    description: "Використовуючи отриманні знання з HTML, CSS, JavaScript та React, реалізувати картку блогу за наданим дизайном.",
    authorImage: "/assets/avatar_male.png",
    authorName: "Іван Жуков"
  };

  return (
    <main>
      <BlogCard
        image={cardData.image}
        category={cardData.category}
        date={cardData.date}
        title={cardData.title}
        description={cardData.description}
        authorImage={cardData.authorImage}
        authorName={cardData.authorName}
      />
    </main>
  );
}

export default App;