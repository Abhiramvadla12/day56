let url = 'https://picsum.photos/v2/list';
let h1 = document.createElement('h1');
h1.innerHTML = 'Image Gallery';
document.body.appendChild(h1);
let contianer = document.createElement('div');
contianer.id = 'container'
document.body.appendChild(contianer)
fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    data.forEach((obj) => {
        let div = document.createElement('div');
        div.id = 'div'
        div.innerHTML = `<img src='${obj['download_url']}' alt='image not found'>` ;
        let p = document.createElement('p');
        p.id = 'overlay';
        p.innerHTML =`BY :${obj['author']}`
        div.appendChild(p);
        contianer.appendChild(div);
    });
}
).catch((error) => console.log('Error:', error));