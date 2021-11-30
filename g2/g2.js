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

function check1() {
    secretkey1 = document.getElementById('secretkey1');
    // console.log(secretkey1.value);
    if (secretkey1.value == "ZS9Kj") {
            window.open("./q2.html", "_self");
        
    } 
    else {
        console.log('entering else');
        let showmessage = document.getElementById('message');
        showmessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Wrong Secret Key!</strong> Try Again!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      secretkey1.value='';
                
        setTimeout(() => {
            showmessage.innerHTML = '';
        },2000);
    }
}


function check2() {
    secretkey2 = document.getElementById('secretkey2');
    // console.log(secretkey1.value);
    if (secretkey2.value == "rdabH") {
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
        secretkey2.value='';
      setTimeout(() => {
        showmessage.innerHTML = '';
      }, 2000);
    }
  }

  function check3() {
    secretkey3 = document.getElementById('secretkey3');
    // console.log(secretkey1.value);
    if (secretkey3.value == "9SWmW") {
        
            window.open("./q4.html", "_self");
    } 
    else {
        let showmessage = document.getElementById('message');
        showmessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Wrong Secret Key!</strong> Try Again!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      secretkey3.value='';
                
        setTimeout(() => {
            showmessage.innerHTML = '';
        },2000);
    }
}

function check4() {
    secretkey4 = document.getElementById('secretkey4');
    // console.log(secretkey1.value);
    if (secretkey4.value == "cRoGy") {
        
            // console.log("button working")
            window.open("./q5.html", "_self");
        
    } 
    else {
        let showmessage = document.getElementById('message');
        showmessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Wrong Secret Key!</strong> Try Again!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      secretkey4.value='';
                
        setTimeout(() => {
            showmessage.innerHTML = '';
        },2000);
    }
}

function check5() {
    secretkey5 = document.getElementById('secretkey5');
    // console.log(secretkey1.value);
    if (secretkey5.value == "x9VKs") {
        
            window.open("./q6.html", "_self");
    } 
    else {
        let showmessage = document.getElementById('message');
        showmessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Wrong Secret Key!</strong> Try Again!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      secretkey5.value='';
                
        setTimeout(() => {
            showmessage.innerHTML = '';
        },2000);
    }
}
