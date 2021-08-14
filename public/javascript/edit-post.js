async function editPost(event) {
  const title = document.querySelector("#updatedTitle").value;
  const description = document.querySelector("#updatedDescription").value;
console.log(event.target.parentElement.id);
const response = await fetch(`/api/posts/${event.target.parentElement.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  alert(response);

//   if (response.ok) {
//     alert("Post updated");
//     location.reload();
//   } else {
//     alert(response.statusText);
//   }
}

document.querySelector('#editPost').addEventListener('click', editPost);
