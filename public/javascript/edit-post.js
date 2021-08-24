async function editPost(event) {
  const title = document.querySelector("#updatedTitle").value;
  const description = document.querySelector("#updatedDescription").value;

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

  if (response.ok) {
    alert("Post updated");
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

async function deletePost(event) {

  const response = await fetch(`/api/posts/${event.target.parentElement.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    alert("Post deleted");
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#editPost').addEventListener('click', editPost);
document.querySelector('#deletePost').addEventListener('click', deletePost);
