async function addComment(event) {
    const comment = document.querySelector("#comment").value;
  
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
          comment
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
  