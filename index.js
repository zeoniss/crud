// const postToAdd = {
//     author: 'Mango',
//     content: 'CRUD is awesome',
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(postToAdd),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));
// =======================================================
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));
// -------------------------------------------------------
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const postId = 1;
// const postToUpdate = {
//     content: 'CRUD is really awesome',
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//         method: 'PATCH',
//         body: JSON.stringify(postToUpdate),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log('ERROR' + error));
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//         method: 'DELETE',
//     })
//     .then(() => console.log('success'))
//     .catch(error => console.log('ERROR' + error));
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
fetch('/user-profile')
    .then(user => fetch(`/users/${user.id}/friends`))
    .then(idList => {
        const friends = idList.map(id => fetch(`/users/${id}`));
        return Promise.all(friends);
    })
    .then(friends => console.log(friends))
    .catch(error => console.error(error));