let showmessage = document.getElementById('message');
showmessage.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Well Done!</strong> Here is your next clue:
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

setTimeout(() => {
  showmessage.innerHTML = '';
}, 3000);

function check() {
  secretkey1 = document.getElementById('secretkey2');
  // console.log(secretkey1.value);
  if (secretkey1.value == "abc") {
    window.open("./q3.html", "_self");
  } else {
    let showmessage = document.getElementById('message');
    showmessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Wrong Secret Key!</strong> Try Again!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

    setTimeout(() => {
      showmessage.innerHTML = '';
    }, 2000);
  }
}