document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Get the container
        const topicContainer = document.getElementById("topic-container");

        // Topics data
        const topics = [
            {
                image: "https://skepchick.org/wp-content/uploads/2013/11/calculus2.png",
                title: "Review",
                link: "./Courses/Review/review.html",
                about: "Functions | Inverse Functions | Trigenometry Functions | Solving Trig Equations with Calculus | Exponential Functions | Logarithm Functions | Exponential and Logarithm Equations | Common Graphs",
                action: "Chapter 1 - 8 Parts",
            },
            {
                title: "Limits",
                image: "https://i.ytimg.com/vi/6OnH9V-ZywE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCzrcYegCpeAqaF2HWgamQMKR23Tw",
                link: "./Courses/Limits/limits.html",
                about: "Tangent Lines & Rate of Change | The Limit | One-Sided Limits | Limit Properties | Computing Limits | Infinite Limits | Limits at Infinity | Continuity | The Definition of Limits",
                action: "Chapter 2 - 9 Parts",
            },
            {
                title: "Derivatives",
                image: "https://betterexplained.com/wp-content/uploads/calculus/derivative-explanation.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "The Definition of Derivatives | Interpretation of Derivatives | Differentiation Formulas | Product and Quotient Rule | Derivatives of Trig Functions | Derivatives of Exponential and Logarithm Functions | Derivatives of Inverse Trig Functions | Derivatives of Hyperbolic Functions | Chain Rule | Implicit Differentiation | Related Rates | Higher Order Derivatives | Logarithmic Differentiation",
                action: "Chapter 3 - 13 Parts",
            },
            {
                title: "Integrals",
                image: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/integrals-1627571035.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Indefinite Integrals | Computing Indefinite Integrals | Substitution Rule for Indefinite Integrals | Area Problem | Definition of the Definite Integral | Computing Definite Integrals | Substitution Rule for Definite Integrals",
                action: "Chapter 4 - 7 Parts",
            },
            {
                title: "Parametric Equations and Polar Coordinates",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Butterfly_transcendental_curve.svg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Parametric Equations and Curves | Tangents with Parametric Equations | Area with Parametric Equations | Arc Length with Parametric Equations | Surface Area with Parametric Equations | Polar Coordinates | Tangents with Polar Coordinates | Area with Polar Coordinates | Arc Length with Polar Coordinates | Surface Area with Polar Coordinates | Arc Length and Surface Area Revisited",
                action: "Lesson 5 - 5 Parts",
            },
            {
                title: "More Differentiation Techniques",
                image: "https://learninglab.rmit.edu.au/sites/default/files/maths-d3.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Implicit Differentiation | Derivatives of Inverse Trigonometric Functions | Derivatives of Hyperbolic Functions | Derivatives of Parametric Equations | Higher Order Derivatives",
                action: "Chapter 6 - 11 Parts",
            },
            {
                title: "Series and Sequences",
                image: "https://www.geneseo.edu/~aguilar/public/notes/Calculus-2-HTML/figures/integral-test.svg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Sequences | Series – The Basics | Convergence/Divergence of Series | Special Series | Integral Test | Comparison Test/Limit Comparison Test | Alternating Series Test | Absolute Convergence | Ratio Test | Root Test | Strategy for Series | Estimating the Value of a Series | Power Series | Power Series and Functions | Taylor Series | Applications of Series | Binomial Series",
                action: "Chapter 7 - 18 Parts",
            },
            {
                title: "Vectors",
                image: "https://lh3.googleusercontent.com/proxy/sc8PDeuQRPvAfqjKxBlhUQjM8KOoW2X-VQnu10_TFeZr0NlOQMg-HB52qXDx1TgzA7L6gc6E0o5KeGYXfxmTxAdSXhvikaql5VUhqH2A9SOOtsytE9m1gsa4vphbV3vDYaeDjILhYDd6jvkRTWpcLb7c5KvXbDh_8paeTSbewJp9MUkiQGORN37u",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Basic Concepts | Vector Arithmetic | Dot Product | Cross Product",
                action: "Chapter 8 - 4 Parts",
            },
            {
                title: "3-Dimensional Space",
                image: "https://i.stack.imgur.com/8BbCa.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "The 3-D Coordinate System | Equations of Lines | Equations of Planes | Quadric Surfaces | Functions of Several Variables | Vector Functions | Calculus with Vector Functions | Tangent, Normal and Binormal Vectors | Arc Length with Vector Functions | Curvature | Velocity and Acceleration | Cylindrical Coordinates | Spherical Coordinates",
                action: "Chapter 9 - 13 Parts",
            },
            {
                title: "Partial Derivatives",
                image: "https://cdn1.byjus.com/wp-content/uploads/2019/09/partial-derivative-quotient-rule.png",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Limits | Partial Derivatives | Interpretations of Partial Derivatives | Higher Order Partial Derivatives | Differentials | Chain Rule | Directional Derivatives",
                action: "Chapter 10 - 7 Parts",
            },
            {
                title: "Multiple Integrals",
                image: "https://img.brainkart.com/imagebk7/paFoDg0.jpg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Double Integrals | Iterated Integrals | Double Integrals over General Regions  | Double Integrals in Polar Coordinates | Triple Integrals | Triple Integrals in Cylindrical Coordinates | Triple Integrals in Spherical Coordinates | Change of Variables | Surface Area | Area and Volume Revisited",
                action: "Chapter 11 - 10 Parts",
            },
            {
                title: "Line Integrals",
                image: "https://www.wikihow.com/images/e/ed/VIBrO.jpg",
                link: "./Lessons/Lesson Unavailable/unavailable.html",
                about: "Vector Fields | Line Integrals | Line Integrals of Vector Fields | Fundamental Theorem for Line Integrals | Conservative Vector Fields | Green’s Theorem",
                action: "Chapter 12 - 6 Parts",
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
