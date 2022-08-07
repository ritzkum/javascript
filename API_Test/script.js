const photos = document.getElementById("photos");


const url = 'https://some-random-apis.herokuapp.com/images/';


function box() {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        data.data.map(element => {
            var image = `${element.imagePath}`
            var text = `${element.name}`
            photos.innerHTML = `<img src="${url}${image}"/>`
            box.innerHTML = text;
        });
    });

  }

// let LastVisitedPath;


fetch(url)
    .then(response => response.json())
    .then((data) => {
      var temp ="";
        data.data.forEach(element => {
          
      temp +=`<li onclick="box()">${element.name}</li>`;

        });
    document.getElementById('vanish').innerHTML =temp;

    });


   function refresh(){
        document.getElementById("photos").innerHTML=null;
    }
    li.addEventListener('click',() => {
        output.innerHTML= table.nodeValue;
    })








    // let table = document.querySelector('table');

    // table.addEventListener('Keyup', () =>{
    //     if (table.nodeValue.click > 1) li.disable = true 
    //     else li.disable - false;
    // })
    






    // function box(){
    //     let vanish = document.getElementById('vanish');
    //     vanish.style.display ='none';
    // }
    


