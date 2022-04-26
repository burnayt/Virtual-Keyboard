let burgerIcon = document.querySelector('.burger-icon');
let burgerPanel = document.querySelector('.burger-panel');
let burgerOverlay = document.querySelector('.burger-overlay');
let pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets/pets-sophie.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
function toggleBurgerMenu(){
    burgerPanel.style.left = `${window.innerWidth}px`;   
    burgerPanel.classList.toggle('move-left');
    burgerIcon.classList.toggle('rotate');
    burgerOverlay.classList.toggle('visible');
    document.body.classList.toggle('overflow-hidden')
}

burgerIcon.addEventListener('click', function(e) {
    toggleBurgerMenu();
    
})
burgerOverlay.addEventListener('click', function(e) {
    toggleBurgerMenu();
})

window.addEventListener('resize', function()
{
            burgerPanel.style.left = `${window.innerWidth}px`;
            
})
burgerPanel.addEventListener('click', function(e) {
    if (e.target.tagName == 'A'){
        toggleBurgerMenu();
    }
})
document.addEventListener('DOMContentLoaded', function(){
    
    burgerPanel.style.left = `${window.innerWidth}px`;

})

//CAROUSEL
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let slider = document.querySelector('.slider');

let card1 = document.querySelector('.slider .card');
let name1 = card1.querySelector('p');
let img1 = card1.querySelector('img');

let card2 = document.querySelectorAll('.slider .card')[1];
let name2 = card2.querySelector('p');
let img2 = card2.querySelector('img');

let card3 = document.querySelectorAll('.slider .card')[2];
let name3 = card3.querySelector('p');
let img3 = card3.querySelector('img');

let lastPets = ['Katrine', 'Jennifer', 'Woody'];
//let newPets = [...pets];
function ChangeSliderPets(){
    let newPets = [...pets];
    console.log(newPets);

    let i = 0;
    let newPet = newPets[i]
    
    while(newPet){
        for (let j = 0; j < lastPets.length; j++) {                       
            if(newPet.name == lastPets[j])
            {
                newPets.splice(i,1);
            }    
        }    
        i++;
        newPet = newPets[i];
    }
    // for(let i=0; i < newPets.length; i++){
    //     for (let j = 0; j < lastPets.length; j++) {
    //         console.log(newPets[i]);            
    //         if(newPets[i].name == lastPets[j])
    //         {
    //             newPets.splice(i,1);
    //         }    
    //     }        
    // }    
    lastPets = [] ; 

    //FIRST PET
    let random = getRandomInt(newPets.length)

    let pet = newPets[random];
    
    lastPets.push(pet.name);
    newPets.splice(random, 1)
    
    name1.innerText = pet.name;
    img1.src = pet.img;

    //2nd PET

    random = getRandomInt(newPets.length)

    pet = newPets[random];
    
    lastPets.push(pet.name);
    newPets.splice(random, 1)
    
    name2.innerText = pet.name;
    img2.src = pet.img;
    
    //3rd PET
    random = getRandomInt(newPets.length)

    pet = newPets[random];
    
    lastPets.push(pet.name);
    newPets.splice(random, 1)
    
    name3.innerText = pet.name;
    img3.src = pet.img;
    
    
}
slider.addEventListener('click', function(e){
    if(e.target.id == 'slider-left' || e.target.id=='slider-right'){
        ChangeSliderPets();
    }
})


