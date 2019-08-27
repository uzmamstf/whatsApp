// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {
        // handle success
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            //  console.log(response.data[i]);
            let message = response.data[i];
            document.querySelector("ul").innerHTML += `
        <li class="list">
        <p>${message.name}</p>
        <p> ${message.number }</p>
        <p> ${message.firstLine }</p>
        <p>${message.time }</p>
        <img src="${message.profilePic }"/>
        </li>  
        `

        }
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });