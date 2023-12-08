//Made By: Charles M Milam Jr | Date: 11-9-23 | app.js
//****************************************************************************************************

//***********************testing url connetion***********************
let urltest = 'https://api.giphy.com/v1/gifs/search?api_key=T6KuuSadP08wbpywxuVIQDgAXG9eDa23&limit=1&q='
//retrieving url
fetch(urltest)
//connected pass or fail
.then(res => {
    if(res.ok){
        console.log('API STATUS\n %c successfully connected','color: green',"✅")
    } else {
        console.log('API STATUS\n %c connection failed', 'color: red',"❌")
    }
})
//****************************************************************************************************




//image container
const image = document.querySelector('.maingifcontainer')
//submit content button
const submitBTN = document.querySelector('.submitBTN').addEventListener('click', e => {
    e.preventDefault();//stop reload
//connecting to url apiKey: T6KuuSadP08wbpywxuVIQDgAXG9eDa23
let url = 'https://api.giphy.com/v1/gifs/search?api_key=T6KuuSadP08wbpywxuVIQDgAXG9eDa23&limit=1&q='
let search = document.querySelector('.fetchgif').value.trim();
url = url.concat(search)
//retrieving url
fetch(url)
.then(res => res.json())
.then(content => {
    console.log("URL LINK: \n", url, "\n CONTENT METADATA: ", content.meta)
// container that is created when item is submitted


let createdcontainer = document.createElement('div')
createdcontainer.setAttribute('id','createdcontainer')
image.appendChild(createdcontainer)

createdcontainer.addEventListener('click', function(e){
    e.target.parentElement.remove();
})


//create remove single item button
let removesingelitem = document.createElement('button')
removesingelitem.setAttribute('class',"removesingelitem")
removesingelitem.innerText = 'X'
createdcontainer.appendChild(removesingelitem)
console.log(removesingelitem)
//create Delete button


let createimage = document.createElement('img');
createimage.src = content.data[0].images.downsized.url;
createdcontainer.appendChild(createimage);
})

.catch(error => {})
})
