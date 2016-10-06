import fetch from 'isomorphic-fetch';

export function fetchPosts(userId) {
  return new Promise((resolve) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
      .then(response => response.json())
      .then(posts => resolve(posts));
  });
}
