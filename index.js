document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Get the container
        const topicContainer = document.getElementById("topic-container");

        // Topics data
        const topics = [
            {
                image: "https://wowsciencecamp.org/wp-content/uploads/2018/07/Copy-of-Calculus-2-1-scaled.jpeg",
                title: "Introduction to Calculus",
                link: "./Lessons/lesson 1/1.html",
                about: "Overview of Calculus | Why You Should Study It | Brief History of Calculus | Differentiation vs Integration.",
                action: "Lesson 1 - 4 Parts",
            },
            {
                title: "Limits",
                image: "https://i.ytimg.com/vi/6OnH9V-ZywE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCzrcYegCpeAqaF2HWgamQMKR23Tw",
                link: "./Lessons/Lesson 2/2.html",
                about: "What are Limits? | Calculating Limits Algebraically | One-Sided Limits | Infinite Limits | Limits at Infinity | Limit Laws",
                action: "Lesson 2 - 6 Parts",
            },
            {
                title: "Continuity",
                image: "https://tutorial.math.lamar.edu/classes/calci/Continuity_Files/image001.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Understanding Continuity | Types of Discontinuities | Continuity at a Point | Intermediate Value Theorem",
                action: "Lesson 3 - 4 Parts",
            },
            {
                title: "Differentiation Basics",
                image: "https://math.libretexts.org/@api/deki/files/2133/CNX_Calc_Figure_03_01_007.jpeg?revision=1&size=bestfit&width=487&height=284",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Definition of Derivative | Notation | Differentiation Rules (Power, Product, Quotient) | Derivatives of Trigonometric Functions | Derivatives of Exponential and Logarithmic Functions",
                action: "Lesson 4 - 5 Parts",
            },
            {
                title: "Applications of Derivatives",
                image: "https://www.storyofmathematics.com/wp-content/uploads/2021/03/visualizing-derivatives-in-calculus.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Finding Tangent Lines | Velocity and Acceleration | Related Rates | Optimization Problems | L'Hôpital's Rule",
                action: "Lesson 5 - 5 Parts",
            },
            {
                title: "More Differentiation Techniques",
                image: "https://images.ctfassets.net/kj4bmrik9d6o/4mzMLxU3G2NK7egAJxkEgl/70862216d273efcbaa67986fb13226dc/Outlier_Graph_IntegrationCalculus-02.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Implicit Differentiation | Derivatives of Inverse Trigonometric Functions | Derivatives of Hyperbolic Functions | Derivatives of Parametric Equations | Higher Order Derivatives",
                action: "Lesson 6 - 5 Parts",
            },
            {
                title: "Integration Basics",
                image: "https://images.ctfassets.net/kj4bmrik9d6o/4mzMLxU3G2NK7egAJxkEgl/70862216d273efcbaa67986fb13226dc/Outlier_Graph_IntegrationCalculus-02.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Indefinite Integrals | Definite Integrals | Integration Rules | Integration by Substitution | Integration by Parts",
                action: "Lesson 7 - 5 Parts",
            },
            {
                title: "Applications of Integration",
                image: "https://www.geneseo.edu/~aguilar/public/notes/Calculus-2-HTML/figures/area-between-curves-0.svg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Area Under a Curve | Definite Integrals and Area | Volume of Revolution (Disk and Washer Method) | Work and Fluid Force | Average Value of a Function",
                action: "Lesson 8 - 5 Parts",
            },
            {
                title: "Differential Equations",
                image: "https://www.technologyuk.net/mathematics/differential-calculus/images/differential_calculus_0001.gif",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Introduction to Differential Equations | Separable Equations | First Order Linear Differential Equations | Applications of Differential Equations (Growth and Decay)",
                action: "Lesson 9 - 4 Parts",
            },
            {
                title: "Sequences and Series",
                image: "https://i.ytimg.com/vi/0YeON4p0ogw/sddefault.jpg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Sequences and Their Limits | Series and Convergence | Tests for Convergence (Geometric, Integral, Comparison) | Power Series and Taylor Series",
                action: "Lesson 10 - 4 Parts",
            },
            {
                title: "Multivariable Calculus",
                image: "https://schol.math.umd.edu/MVCwMATLAB/enneper.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Functions of Several Variables | Partial Derivatives | Gradient, Divergence, Curl | Double Integrals | Line Integrals",
                action: "Lesson 11 - 5 Parts",
            },
            {
                title: "Vector Calculus",
                image: "https://math.libretexts.org/@api/deki/files/8936/Fig._13.2.png?revision=2",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Vector Fields | Green's Theorem | Stokes' Theorem | Divergence Theorem",
                action: "Lesson 12 - 4 Parts",
            },
            // Add more topics here...
        ];

        function createTopicHTML(topic, isSearchResult) {
            const topicBox = document.createElement("div");
            topicBox.classList.add("grid-item");

            if (isSearchResult) {
                topicBox.classList.add("search-result");
            }

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");

            const topicImage = document.createElement("img");
            topicImage.src = topic.image;
            topicImage.alt = topic.title;
            imageContainer.appendChild(topicImage);

            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content-container");

            const topicTitle = document.createElement("h3");
            topicTitle.textContent = topic.title;

            const topicAbout = document.createElement("p");
            topicAbout.textContent = topic.about;

            const topicAction = document.createElement('button');
            topicAction.textContent = topic.action;

            contentContainer.appendChild(topicTitle);
            contentContainer.appendChild(topicAbout);
            contentContainer.appendChild(topicAction);

            topicBox.appendChild(imageContainer);
            topicBox.appendChild(contentContainer);

            topicContainer.appendChild(topicBox);

            topicBox.addEventListener("click", function() {
                window.location.href = topic.link;
            });
        }

        function filterTopics(searchText) {
            topicContainer.innerHTML = '';
        
            const filteredTopics = topics.filter(topic => {
                const searchableText = `${topic.title.toLowerCase()} ${topic.about.toLowerCase()} ${topic.action.toLowerCase()}`;
                return searchableText.includes(searchText.toLowerCase());
            });
        
            if (filteredTopics.length === 0) {
                const noResultMessage = document.createElement("div");
                noResultMessage.textContent = "Couldn't find any matching results. Please try again.";
                noResultMessage.classList.add("no-result-message");
                topicContainer.appendChild(noResultMessage);
            } else {
                filteredTopics.forEach(topic => {
                    createTopicHTML(topic, true); // Mark as search result
                });
            }
        }
        

        const searchInput = document.getElementById("search-input");

        filterTopics('');

        searchInput.addEventListener("input", function() {
            const searchText = this.value.trim();
            filterTopics(searchText);

            if (searchText !== '') {
                topicContainer.classList.add("search-results-active");
            } else {
                topicContainer.classList.remove("search-results-active");
            }
        });

    }, 0);
});


document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
});
  

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.lessons-a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        const offset = targetElement.offsetTop - (window.innerHeight * 0);
  
        scroll({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
});


const searchInput = document.getElementById('search-input');
const topicContent = document.getElementById('topic-content');

searchInput.addEventListener('focus', () => {
  // Scroll to the topic content
  topicContent.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Delay focusing on the input to let it scroll first
  setTimeout(() => {
    searchInput.focus();
  }, 300); // Adjust the delay as needed
});