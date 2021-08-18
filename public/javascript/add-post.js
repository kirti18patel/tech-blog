function addpostShow(){
  document.querySelector('#addpostShow').classList.add("hide");
    document.querySelector('.addPost').classList.remove("hide");
  }

  async function create(event) {
    event.preventDefault();
      console.log("inside craete");
      const title = document.querySelector("#addPost-title").value;
      const description = document.querySelector("#addPost-content").value;
      
    if(title && description){
      const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({
              title,
            description
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          alert("Post added");
          location.reload();
        } else {
          alert(response.statusText);
        }
      }
      else{
        alert("Enter valid input");
      }
    }
  
  document.querySelector('#addpostShow').addEventListener('click', addpostShow);
  document.querySelector('#create').addEventListener('click', create);