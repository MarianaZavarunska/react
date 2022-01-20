export default function Service(endpoint) {
  this.getAllDate = () =>
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then((response) =>
      response.json()
    );
  this.getOneDate = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`).then(
      (response) => response.json()
    );
  this.getAllPosts = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}/users`).then(
      (response) => response.json()
    );
}
