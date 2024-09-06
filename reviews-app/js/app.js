const reviews = [
    {
      id: 1, 
      name: 'tina zukerberg', 
      job: 'ceo of addle', 
      img: 'images/person-1.jpg', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt voluptas ab, dolorum iure cum Ad assumenda quae perferendis amet, doloremque soluta sint ducimus expedita beatae repellendus neque  perspiciatis asperiores?'
    }, 
    {
      id: 2,
      name: 'susan smith',
      job: 'web developer',
      img: 'images/person-2.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 3,
      name: 'bill anderson',
      job: 'web designer',
      img: 'images/person-3.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 4,
      name: 'peter jones',
      job: 'intern',
      img: 'images/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 5,
      name: 'anna johnson',
      job: 'the boss',
      img: 'images/person-5.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];




const profileImg = document.querySelector('#profile-img'); 
const personName = document.querySelector('.name'); 
const position = document.querySelector('.position'); 
const about = document.querySelector('.about'); 


const nextBtn = document.querySelector('#nextBtn'); 
const prevBtn = document.querySelector('#prevBtn'); 



var index = 0;





const changePerson = () => {
    let item = reviews[index];
    profileImg.src = item.img;
    personName.textContent = item.name; 
    position.textContent = item.job; 
    about.textContent = item.text;
}

const nextPerson = () => {
    index++; 
    if (index > reviews.length - 1) {
        index = 0;
    }
    changePerson();
}

const prevPerson = () => {
    index--; 
    if (index < 0) {
        index = reviews.length - 1;
    }
    changePerson();
}


nextBtn.addEventListener('click', nextPerson)
prevBtn.addEventListener('click', prevPerson)