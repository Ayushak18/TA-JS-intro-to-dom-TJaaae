/* <div class="person padding">
          <div class="profile flex align-center">
            <img
              class="profile-image"
              src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
              alt=""
            />
            <h3 class="profile-heading">Eddard "Ned" Stark</h3>
          </div>
          <p class="person-description text-center">
            Lord of Winterfell - Warden of the North - Hand of the King -
            Married to Catelyn (Tully) Stark
          </p>
          <a
            class="person-site text-center"
            href="http://gameofthrones.wikia.com/wiki/Eddard_Stark"
            >Learn More</a
          >
        </div> */

let section = document.querySelector('.people');

got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let div = document.createElement("div");
    div.setAttribute("class", "person padding");

    let divTwo = document.createElement("div");
    divTwo.setAttribute("class", "profile flex align-center");

    let img = document.createElement("img");
    img.setAttribute("class", "profile-image");
    img.src = person.image;

    let heading3 = document.createElement('h3');
    heading3.setAttribute('class','profile-heading');
    heading3.innerText = person.name;

    let para = document.createElement('p');
    para.setAttribute('class','person-description text-center');
    para.innerText = person.description;

    let anchor = document.createElement('a');
    anchor.setAttribute('class','person-site text-center');
    anchor.href = person.wikiLink;
    anchor.innerText = 'Learn More';

    divTwo.append(img,heading3);
    
    div.append(divTwo,para,anchor);

    section.append(div);
  });
});
