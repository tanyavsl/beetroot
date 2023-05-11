// const API = 'https://jsonplaceholder.typicode.com';

// fetch(`${API}/posts`)
//   .then(response => response.json())
//   .then(posts => {
//      posts.forEach(post => document.body.appendChild(getBlogPost(post)));
//   })

//   function getBlogPost(post) {
//     const blogPost = document.createElement('div');
//     const title = document.createElement('h2');
//     const description = document.createElement('p');

//     title.innerText = post.title;
//     description.innerText = post.body;

//     blogPost.appendChild(title);
//     blogPost.appendChild(description);
//     blogPost.appendChild(document.createElement('hr'));

//     return blogPost;
//   }







// const API = "https://swapi.dev/api/planets";

// const displayPlanets = async () => {
//     const planets = await fetch(API)
//        .then((res) => res.json())
//        .then((data) => data.results);

//     planets.map((item) => {
//         console.log(item);
//     });
// };

// displayPlanets(); 



// function* generator() {
//     yield 1;
//     yield 2;
//     return 3
// };

// const res = generator();

// console.log(res.next())





//завдання на уроці в суботу


const API = "https://jsonplaceholder.typicode.com/";


const postsWrapper = document.body.querySelector('#postsWrapper');

const getData = (url) => {
    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}


const createPostElements = (post) => {
    const link = document.createElement('a');
    link.href = './post.html?id=' + post.id;
    link.classList.add('card');
    link.classList.add('w-25');
    const div = document.createElement('div');
    div.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = post.title;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = post.body;

    div.appendChild(h5);
    div.appendChild(p);
   link.appendChild(div);

   return link;
}

const getPosts = async () => {
    const data = await getData(API + 'posts');
    console.log(data)
    data.forEach(element => {
        postsWrapper.appendChild(createPostElements(element));
    });
}

getPosts();
