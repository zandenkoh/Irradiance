// Sample data for resources
const resources = [
    {
      category: "Textbooks",
      name: "Calculus | James Stewart",
      description: "A comprehensive textbook covering various topics in calculus.",
      image: "https://m.media-amazon.com/images/I/81ziq+bBzdL._AC_UF1000,1000_QL80_.jpg",
      link: "https://www.amazon.com/Calculus-James-Stewart/dp/1285740629",
      icon: "book"
    },
    {
      category: "Textbooks",
      name: "Calculus: Early Transcendentals | Soo T. Tan",
      description: "An introductory calculus textbook with exercises and examples.",
      image: "https://m.media-amazon.com/images/I/511PZGAGGYL._AC_UF1000,1000_QL80_.jpg",
      link: "https://www.amazon.sg/Calculus-Transcendentals-Soo-T-Tan/dp/0534465544",
      icon: "book"
    },
    {
      category: "Videos",
      name: "Khan Academy Calculus Playlist",
      description: "Video lectures and practice problems for calculus concepts.",
      image: "https://www.giantfreakinrobot.com/wp-content/uploads/2019/12/khanacademylogo.png",
      link: "https://www.khanacademy.org/math/calculus-1",
      icon: "video"
    },
    {
      category: "Videos",
      name: "MIT OpenCourseWare: Single Variable Calculus",
      description: "Free online course materials for single variable calculus.",
      image: "https://i.ytimg.com/vi/4sTKcvYMNxk/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGGIgYihiMA8=&rs=AOn4CLBY2Gl1YGfUA6ZnCSNYK9mEVBXoCg",
      link: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2005/",
      icon: "video"
    },
    {
      category: "Websites",
      name: "Paul's Online Math Notes",
      description: "Online tutorials and notes for calculus topics.",
      image: "https://i.ytimg.com/vi/W312XDflZiw/maxresdefault.jpg",
      link: "http://tutorial.math.lamar.edu/",
      icon: "link"
    },
    {
      category: "Websites",
      name: "Wolfram Alpha",
      description: "Computational engine with calculus capabilities.",
      image: "https://logowik.com/content/uploads/images/wolfram-alpha9053.logowik.com.webp",
      link: "https://www.wolframalpha.com/",
      icon: "link"
    }
  ];
  
  // Function to display resources
  function displayResources() {
    const resourcesContainer = document.getElementById('resources');
  
    resources.forEach(resource => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Left section with title, description, button, and icon
      const leftSection = document.createElement('div');
      leftSection.classList.add('left-section');
  
      const icon = document.createElement('i');
      icon.classList.add('fas', `fa-${resource.icon}`, 'card-icon');
      leftSection.appendChild(icon);
  
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = resource.name;
      leftSection.appendChild(title);
  
      const description = document.createElement('p');
      description.classList.add('card-description');
      description.textContent = resource.description;
      leftSection.appendChild(description);
  
      const button = document.createElement('a');
      button.classList.add('card-button');
      button.href = resource.link;
      button.textContent = "Learn More";
      button.target = "_blank"; 
      leftSection.appendChild(button);
  
      // Right section with image
      const rightSection = document.createElement('div');
      rightSection.classList.add('right-section');
  
      const image = document.createElement('img');
      image.src = resource.image;
      image.alt = resource.name;
      rightSection.appendChild(image);
  
      // Append left and right sections to card
      card.appendChild(leftSection);
      card.appendChild(rightSection);
  
      // Append card to resources container
      resourcesContainer.appendChild(card);


    });
  }
  
  // Call the function to display resources
  displayResources();
  