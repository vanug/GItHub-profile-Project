// let input='';
// let requesturl
// let image=document.querySelector('.profile-image img')
// let name=document.querySelector('.name')
// let id=document.querySelector('.id')
// let bio=document.querySelector('.bio')
// let follower=document.querySelector('.follower-count')
// document.getElementById('search').addEventListener('click',function(){
//      input+=document.getElementById('input').value
//     //  console.log(input);
//      if (input) {
//         requesturl=`https://api.github.com/users/${input}`
//         let url=requesturl
//         // console.log(url);
//             const xhr = new XMLHttpRequest()
//             xhr.open('GET',url)
//             xhr.onreadystatechange= function () {
//                 // console.log(xhr.readyState);
//                 if(xhr.readyState===4){
//                     const data=JSON.parse(this.responseText)
//                     // console.log(data.followers);
//                     name.innerHTML=data.name
//                     id.innerHTML=data.login
//                     follower.innerHTML=data.followers
//                     bio.innerHTML=data.bio
//                     image.src=data.avatar_url
//                 }
//                 input=''
//             }
            
//             xhr.send()
//     }
// })




let input = '';
let requesturl;
let image = document.querySelector('.profile-image img');
let name = document.querySelector('.name');
let id = document.querySelector('.id');
let bio = document.querySelector('.bio');
let follower = document.querySelector('.follower-count');

document.getElementById('search').addEventListener('click', function() {
    input = document.getElementById('input').value;
    if (input) {
        requesturl = `https://api.github.com/users/${input}`;
        fetch(requesturl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                name.innerHTML = data.name || 'No name provided';
                id.innerHTML = data.login;
                follower.innerHTML = data.followers;
                bio.innerHTML = data.bio || 'No bio available';
                image.src = data.avatar_url;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        input = '';
    }
});


 