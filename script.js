document.addEventListener('DOMContentLoaded', function() {
    // Add class to slide in recent posts
    const recentPosts = document.querySelector('.blog-posts');
    recentPosts.classList.add('slide-in');
  
    // Show pop-up message after 3 seconds
    setTimeout(function() {
      const popup = document.querySelector('.popup');
      popup.style.display = 'block';
    }, 3000);
  });
  