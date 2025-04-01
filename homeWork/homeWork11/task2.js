function fetchTodos () {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error)
    });
}

function fetchUser () {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error)
    });
}


Promise.all([fetchTodos(), fetchUser()])
.then((results => {
    console.log('Results all:', results);
}))
.catch((error) => {
    console.error("Помилка при отриманні даних:", error);
});


Promise.race([fetchTodos(), fetchUser()])
.then((results => {
    console.log('Results race:', results);
}))
.catch((error) => {
    console.error("Помилка при отриманні даних:", error);
});
  

