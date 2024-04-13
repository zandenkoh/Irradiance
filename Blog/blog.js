// Sample blog data (you can replace this with your actual blog data)
const blogs = [
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: 'Embarking on a Calculus Adventure: My First Steps',
      date: 'March 22, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: "Navigating the Calculus Landscape: A Beginner's Guide",
      date: 'March 15, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: 'From Algebra to Calculus: Bridging the Gap',
      date: 'March 20, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: "The Joy of Discovering Derivatives: My 'Aha!' Moments",
      date: 'March 15, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: 'Confessions of a New Calculus Student: Tales from the Learning Curve',
      date: 'March 20, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: 'Learning with Me: Exploring Calculus Together',
      date: 'March 15, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
    {
      image: 'https://skepchick.org/wp-content/uploads/2013/11/calculus2.png',
      title: 'Who am I?',
      date: 'March 03, 2024',
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
      url: '#'
    },
  ];
  
// Function to display blogs
function displayBlogs() {
  const blogPosts = document.getElementById('blogPosts');
  blogPosts.innerHTML = '';

  blogs.forEach(blog => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    const image = document.createElement('img');
    image.src = blog.image;
    blogPost.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = blog.title;
    blogPost.appendChild(title);

    const date = document.createElement('div');
    date.classList.add('date');
    date.textContent = blog.date;
    blogPost.appendChild(date);

    const excerpt = document.createElement('div');
    excerpt.classList.add('excerpt');
    excerpt.textContent = blog.excerpt;
    blogPost.appendChild(excerpt);

    const readMore = document.createElement('a');
    readMore.classList.add('read-more');
    readMore.href = blog.url;
    readMore.textContent = 'Read More';
    blogPost.appendChild(readMore);

    blogPosts.appendChild(blogPost);
  });
}

// Display initial blogs on page load
document.addEventListener('DOMContentLoaded', () => {
  displayBlogs(); // Display all blogs initially
});

const topicContent = document.getElementById('blog-section');

topicContent.scrollIntoView({ behavior: 'smooth', block: 'start' });