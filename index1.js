let div = document.createElement('div');
let url = "https://randomuser.me/api/";
fetch(url)
.then((response)=>{
    return response.json();
})
.then(data =>{
    div.innerHTML = `<h1>Random User</h1>
    <img src='${data.results[0]['picture']['large']}' alt='image not found'>
    <h2><span>Name</span>: ${data.results[0]['name']['first']} ${data.results[0]['name']['last']}</h2>
    <h2><span>Email</span>: ${data.results[0]['eamil']}</h2>
    <h2><span>Phone no.</span>: ${data.results[0]['phone']}</h2>
    <h2><span>Location</span>: ${data.results[0]['location']['country']}, ${data.results[0]['location']['state']}, ${data.results[0]['location']['city']}</h2>
    <h2><span>Date of birth</span>: ${new Date(data.results[0]['dob']['date']).toLocaleDateString()} </h2>
    `
})
document.body.appendChild(div);