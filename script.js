const apiurl = 'http://192.168.43.4:3000/api';



function getdata() {
  fetch(apiurl).then(async res => {
        return await res.json();
    })
    .then(async data => {
        //do something with data

        //select element todo-column ul
        var el = document.querySelector('main ul');
        var htmlbody = '';
        for (let i = 0; i < data.length; i++) {
          const doc = data[i];
          
          //format data as html syntax
          htmlbody += `<li>${doc.item}</li>`;          
        }

        //put data on html / page
        el.innerHTML = htmlbody;
    })
}

getdata();
//create a reload button and call getdata() to reload

//post data to server through api
function postdata(data) {
  fetch(apiurl, {
    method: 'POST',
    body: JSON.stringify(data),
    // Adding headers to the request 
    headers: { 
      "Content-type": "application/json"
    }, 
  });
}

//get button
var submit_btn = document.getElementById('btn');


//eventlistener for submit_btn
submit_btn.addEventListener('click', (e) => {
  // e.preventDefault();
  //get inputfield
  var input = document.getElementById('todoBox');
  var obj = {
    "item": `${input.value}`,
    "timeStamp": `${Date.now().toString()}`,
  };

  input.value = '';
  getdata();
  postdata(obj);

});


