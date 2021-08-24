async function addComment(event) {
    const comment = document.querySelector("#comment").value;

    var url = document.URL;
    var postId = url.substring(url.lastIndexOf('/') + 1);

    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
          comment,
          postId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      alert("Comment added");
      location.reload();
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#addComment').addEventListener('click', addComment);
  