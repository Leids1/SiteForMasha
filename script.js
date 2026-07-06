const games = [
  {name: 'Portal 2', steam: 'https://store.steampowered.com/app/620/Portal_2/', img: 'IMG/portal2.jpg', tags: ['couple']},
  {name: "Don't Starve Together", steam: 'https://store.steampowered.com/app/322330/Dont_Starve_Together/', img: 'IMG/dont_starve_together.jpg', tags: ['couple']},
  {name: 'Untitled Goose Game', steam: 'https://store.steampowered.com/app/837470/Untitled_Goose_Game/', img: 'IMG/untitled_goose_game.jpg', tags: ['couple']},
  {name: 'PEAK', steam: 'https://store.steampowered.com/app/3527290/PEAK/', img: 'IMG/peak.jpg', tags: ['couple']},
  {name: 'Cult of the Lamb', steam: 'https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/', img: 'IMG/cult_of_the_lamb.jpg', tags: ['couple']},
  {name: 'Golden Light', steam: 'https://store.steampowered.com/app/1245430/Golden_Light/', img: 'IMG/Golden_Light.jpg', tags: ['couple']},
  {name: 'The Escapists 2', steam: 'https://store.steampowered.com/app/641990/?curator_clanid=4777282&utm_source=SteamDB', img: 'IMG/the_escapists_2.jpg', tags: ['second']},
  {name: 'For The King', steam: 'https://store.steampowered.com/app/527230/For_The_King/', img: 'IMG/for_the_king.jpg', tags: ['second']},
  {name: 'Cat Quest 1-3', steam: 'https://store.steampowered.com/app/593280/Cat_Quest/', img: 'IMG/cat_quest.jpg', specialGroup: 'catQuest', tags: ['remote']},
  {name: 'Streets of Rogue', steam: 'https://store.steampowered.com/app/403640/Streets_of_Rogue/', img: 'IMG/streets_of_rogue.jpg', tags: ['remote']},
  {name: 'HELLDIVERS', steam: 'https://store.steampowered.com/app/394510/HELLDIVERS_DIVEHARDER_EDITION/', img: 'IMG/helldivers_1.jpg', tags: ['remote']},
  {name: 'PICO PARK', steam: 'https://store.steampowered.com/app/1509960/PICO_PARK/', img: 'IMG/pico_park.jpg', tags: ['remote']},
  {name: 'Enter the Gungeon', steam: 'https://store.steampowered.com/app/311690/Enter_the_Gungeon/', img: 'IMG/enter_the_gungeon.jpg', tags: ['remote']},
  {name: 'For The King 2', steam: 'https://store.steampowered.com/app/1676840/For_The_King_II/', img: 'IMG/For_The_King_II.jpg', tags: ['remote']},
  {name: 'Kingdom Two Crowns', steam: 'https://store.steampowered.com/app/701160/Kingdom_Two_Crowns/', img: 'IMG/Kingdom_Two_Crowns.jpg', tags: ['remote']},
  {name: 'Stick Fight: The Game', steam: 'https://store.steampowered.com/app/674940/Stick_Fight_The_Game/', img: 'IMG/Stick_Fight.jpg', tags: ['remote']},
  {name: 'PHOGS!', steam: 'https://store.steampowered.com/app/850320/PHOGS!/', img: 'IMG/PHOGS.jpg', tags: ['remote']},
  {name: 'Broforce', steam: 'https://store.steampowered.com/app/274190/Broforce/', img: 'IMG/Broforce.jpg', tags: ['remote']},
  {name: 'Unrailed!', steam: 'https://store.steampowered.com/app/1016920/Unrailed!/', img: 'IMG/Unrailed.jpg', tags: ['remote']},
  {name: 'Magicka 1-2', steam: 'https://store.steampowered.com/app/238370/Magicka_2/', img: 'IMG/Magicka.jpg', specialGroup: 'magicka', tags: ['remote']},
  {name: 'Pizza Tower', steam: 'https://store.steampowered.com/app/2231450/Pizza_Tower/', img: 'IMG/Pizza_Tower.jpg', tags: ['remote']},
  {name: 'Cuphead', steam: 'https://store.steampowered.com/app/268910/Cuphead/', img: 'IMG/Cuphead.jpg', tags: ['remote']},
  {name: 'Duck Game', steam: 'https://store.steampowered.com/app/312530/Duck_Game/', img: 'IMG/Duck_Game.jpg', tags: ['remote']},
  {name: 'ASTRONEER', steam: 'https://store.steampowered.com/app/361420/ASTRONEER/', img: 'IMG/ASTRONEER.jpg', rentSite: 'https://gorent.shop/product/astroneer-arenda-akkaunta-steam/', price: '42 руб./нед', tags: ['rent']},
  {name: 'Barotrauma', steam: 'https://store.steampowered.com/app/602960/Barotrauma/', img: 'IMG/Barotrauma.jpg', rentSite: 'https://gorent.shop/product/barotrauma-arenda-akkaunta-steam/', price: '52 руб./нед', tags: ['rent']},
  {name: 'Buckshot Roulette', steam: 'https://store.steampowered.com/app/2835570/Buckshot_Roulette/', img: 'IMG/Buckshot.jpg', rentSite: 'https://gorent.shop/product/buckshot-roulette-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Content Warning', steam: 'https://store.steampowered.com/app/2881650/Content_Warning/', img: 'IMG/Content.jpg', rentSite: 'https://gorent.shop/product/content-warning-arenda-akkaunta-steam/', price: '30 руб./нед', tags: ['rent']},
  {name: 'Deep Rock Galactic', steam: 'https://store.steampowered.com/app/548430/Deep_Rock_Galactic/', img: 'IMG/Deep_Rock_Galactic.jpg', rentSite: 'https://gorent.shop/product/deep-rock-galactic-arenda-akkaunta-steam/', price: '32 руб./нед', tags: ['rent']},
  {name: 'Grounded', steam: 'https://store.steampowered.com/app/962130/Grounded/', img: 'IMG/Grounded.jpg', rentSite: 'https://gorent.shop/product/grounded-arenda-akkaunta-steam/', price: '57 руб./нед', tags: ['rent']},
  {name: 'Grounded 2', steam: 'https://store.steampowered.com/app/2661300/Grounded_2/', img: 'IMG/Grounded2.jpg', rentSite: 'https://gorent.shop/product/grounded-2-arenda-akkaunta-steam/', price: '113 руб./нед', tags: ['rent']},
  {name: 'КЛЕТЬ', steam: 'https://store.steampowered.com/app/1699480/KLET/?l=russian', img: 'IMG/KLET.jpg', rentSite: 'https://gorent.shop/product/kletka-klet-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']},
  {name: 'Labyrinthine', steam: 'https://store.steampowered.com/app/1302240/Labyrinthine/', img: 'IMG/Labyrinthine.jpg', rentSite: 'https://gorent.shop/product/labyrinthine-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']},
  {name: 'Left 4 Dead 1-2', steam: 'https://store.steampowered.com/app/550/Left_4_Dead_2/', img: 'IMG/Left 4Dead2.jpg', rentSite: 'https://gorent.shop/product/left-4-dead-1-2-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Lethal Company', steam: 'https://store.steampowered.com/app/1966720/Lethal_Company/', img: 'IMG/LethalCompany.jpg', rentSite: 'https://gorent.shop/product/lethal-company-arenda-akkaunta-steam/', price: '42 руб./нед', tags: ['rent']},
  {name: 'MECCHA CHAMELEON', steam: 'https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/', img: 'IMG/MECCHACHAMELEON.jpg', rentSite: 'https://gorent.shop/product/meccha-chameleon-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']},
  {name: 'Palworld', steam: 'https://store.steampowered.com/app/1623730/Palworld/', img: 'IMG/Palworld.jpg', rentSite: 'https://gorent.shop/product/palworld-arenda-akkaunta-steam/', price: '107 руб./нед', tags: ['rent']},
  {name: 'Payday 2', steam: 'https://store.steampowered.com/app/218620/PAYDAY_2/', img: 'IMG/PAYDAY2.jpg', rentSite: 'https://gorent.shop/product/payday-2-legacy-collection-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Phasmophobia', steam: 'https://store.steampowered.com/app/739630/Phasmophobia/', img: 'IMG/Phasmophobia.jpg', rentSite: 'https://gorent.shop/product/phasmophobia-ru-cis-arenda-akkaunta-steam/', price: '110 руб./нед', tags: ['rent']},
  {name: 'Pratfall', steam: 'https://store.steampowered.com/app/4244510/Pratfall/', img: 'IMG/Pratfall.jpg', rentSite: 'https://gorent.shop/product/pratfall-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']},
  {name: 'R.E.P.O.', steam: 'https://store.steampowered.com/app/3241660/REPO/', img: 'IMG/R.E.P.O..jpg', rentSite: 'https://gorent.shop/product/r-e-p-o-arenda-akkaunta-steam-repo/', price: '47 руб./нед', tags: ['rent']},
  {name: 'Raft', steam: 'https://store.steampowered.com/app/648800/Raft/', img: 'IMG/Raft.jpg', rentSite: 'https://gorent.shop/product/raft-ru-cis-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']},
  {name: 'Risk of Rain 2', steam: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/', img: 'IMG/RoR2.jpg', rentSite: 'https://gorent.shop/product/risk-of-rain-2-survivors-of-the-void-seekers-of-the-storm-arenda-steam/', price: '71 руб./нед', tags: ['rent']},
  {name: 'The Forest', steam: 'https://store.steampowered.com/app/242760/The_Forest/', img: 'IMG/Forest.jpg', rentSite: 'https://gorent.shop/product/the-forest-ru-cis-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Sons Of The Forest', steam: 'https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/', img: 'IMG/Forest2.jpg', rentSite: 'https://gorent.shop/product/sons-of-the-forest-arenda-steam/', price: '69 руб./нед', tags: ['rent']},
  {name: 'Stardew Valley', steam: 'https://store.steampowered.com/app/413150/Stardew_Valley/', img: 'IMG/StardewValley.jpg', rentSite: 'https://gorent.shop/product/stardew-valley-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Terraria', steam: 'https://store.steampowered.com/app/105600/Terraria/', img: 'IMG/Terraria.jpg', rentSite: 'https://gorent.shop/product/terraria-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'The Headliners', steam: 'https://store.steampowered.com/app/3059070/The_Headliners/', img: 'IMG/Headliners.jpg', rentSite: 'https://gorent.shop/product/the-headliners-arenda-akkaunta-steam/', price: '34 руб./нед', tags: ['rent']},
  {name: 'Escape the Backrooms', steam: 'https://store.steampowered.com/app/1943950/Escape_the_Backrooms/', img: 'IMG/Escape_the_Backrooms.jpg', rentSite: 'https://gorent.shop/product/backrooms-escape-together-arenda-akkaunta-steam/', price: '38 руб./нед', tags: ['rent']}
];

const specialGroups = {
  catQuest: [
    {name: 'Cat Quest', steam: 'https://store.steampowered.com/app/593280/Cat_Quest/', img: 'IMG/cat_quest.jpg'},
    {name: 'Cat Quest II', steam: 'https://store.steampowered.com/app/914710/Cat_Quest_II/', img: 'IMG/cat_quest2.jpg'},
    {name: 'Cat Quest III', steam: 'https://store.steampowered.com/app/2305840/Cat_Quest_III/', img: 'IMG/cat_quest3.jpg'}
  ],
  magicka: [
    {name: 'Magicka', steam: 'https://store.steampowered.com/app/42910/Magicka/', img: 'IMG/Magicka1.jpg'},
    {name: 'Magicka 2', steam: 'https://store.steampowered.com/app/238370/Magicka_2/', img: 'IMG/Magicka.jpg'}
  ]
};

const grid = document.getElementById('games-grid');
const filterButtons = document.querySelectorAll('.category-btn');
let activeCategory = 'all';

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
  meta.textContent = game.price ? `Аренда ${game.price}` : '';

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
  popupText.textContent = isSpecialGroup ? 'Выбери часть игры' : game.rentSite ? 'Ссылки на аренду и на стим' : 'Страница игры в Steam';

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
  } else if (game.rentSite) {
    popupLinks.innerHTML = `
      <a class="popup__item" href="${game.rentSite}" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Аренда</h3>
          <span>Сайт аренды</span>
        </div>
      </a>
      <a class="popup__item" href="${game.steam}" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Steam</h3>
          <span>Открыть в Steam</span>
        </div>
      </a>
    `;
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

function renderGames(){
  grid.innerHTML = '';
  const visibleGames = activeCategory === 'all'
    ? games
    : games.filter(game => game.tags?.includes(activeCategory));

  visibleGames.forEach(game => grid.appendChild(createCard(game)));

  const first = grid.querySelector('.card');
  if(first) first.setAttribute('aria-label','Игра: '+ first.querySelector('h3').textContent);
}

function setActiveCategory(category){
  activeCategory = category;
  filterButtons.forEach(button => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderGames();
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => setActiveCategory(button.dataset.category));
});

function init(){
  setActiveCategory(activeCategory);
}

init();
