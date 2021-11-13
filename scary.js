const mask = [
    {name: 'Witchcraft Mask' },
    {name: 'Evil Clown It Mask' },
    {name: 'Creepy Pig Mask' },
    {name: 'Jason Vorhees' },
    {name: 'Chucky Doll Mask' },
    {name: 'Jigsaw Mask' },
    {name: 'Bloody Scream Mask' },
    {name: 'Creepster Mask' },
    {name: 'Halloween Mask 2007 Remake' },
    {name: 'Billy The Puppet Mask' },
    {name: 'Rich Grimes' },
    {name: 'Zombie Mask' },
    {name: 'Freddy Krueger' },
  
];



const list = document.getElementById('list');

function setList (group) {
    clearList ();


for (const mask of group) {
const item = document.createElement('li');
item.classList.add('list-group-item');
const text = document.createTextNode(mask.name);
item.appendChild(text);
list.appendChild(item);
}
if (group.length === 0) {
    (setNoResults);
}
}

function clearList () {

while (list.firstChild) {
    list.removeChild(list.firstChild);
}
}


function setNoResults () {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No Results Found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy (value, searchTerm) {
if (value === searchTerm) {
    return 2;
} else if (value.startsWith(searchTerm)) {
    return 1;
} else {
    return 0;
}
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input' , (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toUpperCase();
        setList(mask.filter(mask => {
            return mask.name.includes(value);
        }).sort((maskA, maskB) => {
            return getRelevancy(maskB.name, value) - getRelevancy(maskA.name, value);
        }))

    } else {
        clearList ();
    }
   
}); 






