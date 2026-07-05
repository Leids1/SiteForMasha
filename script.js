const games = [
  {name: 'Portal 2', steam: 'https://store.steampowered.com/app/620/Portal_2/', img: 'IMG/portal2.jpg'},
  {name: "Don't Starve Together", steam: 'https://store.steampowered.com/app/322330/Dont_Starve_Together/', img: 'IMG/dont_starve_together.jpg'},
  {name: 'Untitled Goose Game', steam: 'https://store.steampowered.com/app/837470/Untitled_Goose_Game/', img: 'IMG/untitled_goose_game.jpg'},
  {name: 'PEAK', steam: 'https://store.steampowered.com/app/3527290/PEAK/', img: 'IMG/peak.jpg'},
  {name: 'Cult of the Lamb', steam: 'https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/', img: 'IMG/cult_of_the_lamb.jpg'},
  {name: 'The Escapists 2', steam: 'https://store.steampowered.com/app/641990/?curator_clanid=4777282&utm_source=SteamDB', img: 'IMG/the_escapists_2.jpg'},
  {name: 'For The King', steam: 'https://store.steampowered.com/app/527230/For_The_King/', img: 'IMG/for_the_king.jpg'},
  {name: 'Cat Quest', steam: 'https://store.steampowered.com/app/593280/Cat_Quest/', img: 'IMG/cat_quest.jpg', specialGroup: 'catQuest'},
  {name: 'Streets of Rogue', steam: 'https://store.steampowered.com/app/403640/Streets_of_Rogue/', img: 'IMG/streets_of_rogue.jpg'},
  {name: 'HELLDIVERS 1', steam: 'https://store.steampowered.com/app/394510/HELLDIVERS_DIVEHARDER_EDITION/', img: 'IMG/helldivers_1.jpg'},
  {name: 'PICO PARK', steam: 'https://store.steampowered.com/app/1509960/PICO_PARK/', img: 'IMG/pico_park.jpg'},
  {name: 'Enter the Gungeon', steam: 'https://store.steampowered.com/app/311690/Enter_the_Gungeon/', img: 'IMG/enter_the_gungeon.jpg'},
  {name: 'Magicka 2', steam: 'https://store.steampowered.com/app/238370/Magicka_2/', img: 'IMG/magica.jpg', specialGroup: 'magicka'},
  {name: 'Pizza Tower', steam: 'https://store.steampowered.com/app/2231450/Pizza_Tower/', img: 'IMG/pizza_tower.jpg'},
  {name: 'Cuphead', steam: 'https://store.steampowered.com/app/268910/Cuphead/', img: 'IMG/cuphead.jpg'},
  {name: 'Duck Game', steam: 'https://store.steampowered.com/app/312530/Duck_Game/', img: 'IMG/duck_game.jpg'}
];

const specialGroups = {
  catQuest: [
    {name: 'Cat Quest', steam: 'https://store.steampowered.com/app/593280/Cat_Quest/', img: 'IMG/cat_quest.jpg'},
    {name: 'Cat Quest II', steam: 'https://store.steampowered.com/app/914710/Cat_Quest_II/', img: 'IMG/cat_quest2.jpg'},
    {name: 'Cat Quest III', steam: 'https://store.steampowered.com/app/2305840/Cat_Quest_III/', img: 'IMG/cat_quest3.jpg'}
  ],
  magicka: [
    {name: 'Magicka', steam: 'https://store.steampowered.com/app/42910/Magicka/', img: 'IMG/magica1.jpg'},
    {name: 'Magicka 2', steam: 'https://store.steampowered.com/app/238370/Magicka_2/', img: 'IMG/magica.jpg'}
  ]
};

const grid = document.getElementById('games-grid');

function createCard(game){
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  const img = document.createElement('img');
  img.className = 'thumb';
  img.alt = game.name + ' preview';
  img.loading = 'lazy';
  img.src = game.img || '';
  img.onerror = () => { img.src = 'IMG/cult_of_the_lamb.svg'; };

  const shimmer = document.createElement('div');
  shimmer.className = 'shimmer';

  const content = document.createElement('div');
  content.className = 'content';

  const title = document.createElement('h3');
  title.textContent = game.name;
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = 'Нажмите, чтобы посмотреть детали';

  content.appendChild(title);
  content.appendChild(meta);

  card.appendChild(img);
  card.appendChild(shimmer);
  card.appendChild(content);

  card.addEventListener('click', ()=> openPopup(game));
  card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopup(game); } });

  return card;
}

const popup = document.getElementById('game-popup');
const popupImage = popup.querySelector('.popup__image');
const popupTitle = popup.querySelector('.popup__title');
const popupText = popup.querySelector('.popup__text');
const popupLink = popup.querySelector('.popup__link');
const popupLinks = popup.querySelector('.popup__links');
const closeButtons = popup.querySelectorAll('[data-popup-close]');

function openPopup(game){
  const groupKey = game.specialGroup;
  const groupVersions = groupKey ? specialGroups[groupKey] : null;
  const isSpecialGroup = Array.isArray(groupVersions) && groupVersions.length > 0;
  const imageSource = isSpecialGroup ? groupVersions[0].img : game.img;

  popupImage.src = imageSource || '';
  popupImage.alt = game.name + ' изображение';
  popupTitle.textContent = isSpecialGroup ? groupVersions[0].name : game.name;
  popupText.textContent = isSpecialGroup ? 'Выбери часть игры' : 'Страница игры в Steam';

  if (isSpecialGroup) {
    popupLinks.innerHTML = groupVersions.map((version) => {
      return `
        <a class="popup__item" href="${version.steam}" target="_blank" rel="noopener noreferrer">
          <img src="${version.img}" alt="${version.name} обложка" />
          <div>
            <h3>${version.name}</h3>
            <span>Перейти в Steam</span>
          </div>
        </a>
      `;
    }).join('');
    popupLinks.style.display = 'grid';
    popupLink.style.display = 'none';
  } else {
    popupLinks.innerHTML = '';
    popupLinks.style.display = 'none';
    popupLink.style.display = 'inline-flex';
    popupLink.href = game.steam;
    popupLink.textContent = 'Открыть в Steam';
  }

  popup.setAttribute('aria-hidden', 'false');
  popup.classList.add('active');
  const firstLink = isSpecialGroup ? popupLinks.querySelector('a') : popupLink;
  if (firstLink) firstLink.focus();
}

function closePopup(){
  popup.setAttribute('aria-hidden', 'true');
  popup.classList.remove('active');
}

closeButtons.forEach(button => button.addEventListener('click', closePopup));
popup.addEventListener('click', (event) => {
  if (event.target === popup || event.target.closest('[data-popup-close]')) {
    closePopup();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup();
  }
});

function init(){
  games.forEach(g=> grid.appendChild(createCard(g)));
  const first = grid.querySelector('.card');
  if(first) first.setAttribute('aria-label','Игра: '+ first.querySelector('h3').textContent);
}

init();
