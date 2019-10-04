/** Создать простую страничку которая выводит в выпадающий список
* всех персонажей (people) с name 'Cat' по запросу https://ghibliapi.herokuapp.com/species
* для начала, пусть в значении опции будет просто порядковый номер.
* после выбора опции, отсылается запрос на url https://ghibliapi.herokuapp.com/people/{id}
* внизу появляется информация о персонаже -
* // name, eye_color, gender, films
* а так же изображение (случайное с unsplash)
* https://ghibliapi.herokuapp.com/#
**/

function renderCatPic(){
    fetch(`https://source.unsplash.com/200x200/?cat`)
      .then((response) => {  
    // что-то
    }) 
  }
  
  function getAllChars() {
    fetch('https://ghibliapi.herokuapp.com/species')
    .then(response=> response.json())
    .then(data=> {
        console.log(data);
        return filterByName('Cat', data);
    })
    .then((data) => {
        console.log(data);
        return renderUl(data[0].people);
    })
  }



  function filterByName(name, data) {
      return data.filter((item) => item.name === name);
  }

  function renderUl(data) {
      const ul = document.createElement('ul');
      data.forEach((item) => {
          const el = document.createElement('li');
          el.setAttribute('data-api-url', item);
          el.textContent = item;
          el.addEventListener('click', getPerson);
          ul.append(el);
      });
      
      document.body.append(ul);
  }

  function getPerson(e) {
      fetch(e.target.attributes['data-api-url'].value)
      .then((data) => {
          return data.json();
      })
      .then((data) => {
          console.log(data);
      })
      .catch((err) => {
          console.log(err);
      })
  }


  getAllChars();