async function addComment(event) {
    const comment = document.querySelector("#comment").value;

    var url = document.URL;
    var post_id = url.substring(url.lastIndexOf('/') + 1);

    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
          comment,
          post_id
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
  