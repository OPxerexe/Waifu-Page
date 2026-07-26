const characters = [
    {
        id: 'yor',
        name: 'Yor',
        last: 'Forger',
        age: '27',
        personality: 'Assassin / Sweet yet lethal',
        cupSize: 'D',
        bgColor: '#b3152a',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/a400402_413768284538293302-jfif.png'
    },
    {
        id: 'kaoruko',
        name: 'Kaoruko',
        last: 'Waguri',
        age: '17',
        personality: 'Gentle / Graceful / Kind-hearted',
        cupSize: 'B',
        bgColor: '#a08fd5',
        position: 'pos-right', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/a145981_13933080092886485.png'
    },
    {
        id: 'mio',
        name: 'Mio',
        last: 'Haimiya',
        age: '17',
        personality: 'Strikingly beautiful / Charismatic',
        cupSize: 'C',
        bgColor: '#40E0D0',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/w416321_photo-2-2026-07-24-19-36-45.png'
    },
    {
        id: 'marin',
        name: 'Marin',
        last: 'Kitagawa',
        age: '15',
        personality: 'Otaku / Extroverted / Friendly',
        cupSize: 'E',
        bgColor: '#ffb7c5',
        position: 'pos-right', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/z29034_313000242881679197-jfif.png'
    },
    {
        id: 'alya',
        name: 'Alisa (Alya)',
        last: 'Kujou',
        age: '16',
        personality: 'Smart / Tsundere / Secretly affectionate',
        cupSize: 'D',
        bgColor: '#fff0f5',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/378631_631207704070889727-jfif.png'
    },
    {
        id: 'power',
        name: 'Power',
        last: '-',
        age: '19',
        personality: 'childish / greedy / pathological liar',
        cupSize: 'DDD',
        bgColor: '#e74279',
        position: 'pos-right', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/f870029_Power-1-jfif.png'
    },
    {
        id: 'reze',
        name: 'Reze',
        last: '-',
        age: '17',
        personality: 'charm / ruthlessness / tragic vulnerability',
        cupSize: 'DDD',
        bgColor: '#600097',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/t076482_Reze-1-jfif.png'
    },
    {
        id: 'ai',
        name: 'Ai',
        last: 'Hoshino',
        age: '20',
        personality: 'bubbly / charismatic / loving idol',
        cupSize: 'C',
        bgColor: '#ce590a',
        position: 'pos-right', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/m4858_38280665578737135-jfif.png'
    },
    {
        id: 'chisa',
        name: 'Chisa',
        last: 'Kotegawa',
        age: '20',
        personality: 'level-headed / serious / passionate',
        cupSize: 'C',
        bgColor: '#bbe71c',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/a918915_Chisa-Kotegawa-gu-shou-chuan-qian-sha-Grand-Blue-Dreaming-Anime-Girl-Wallpaper-jfif.png'
    },
    {
        id: 'tsunade',
        name: 'Tsunade',
        last: 'Senju',
        age: '50',
        personality: 'toughness / deep compassion / past emotional trauma',
        cupSize: 'JJ',
        bgColor: '#1a0beb',
        position: 'pos-right', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/h24837_1-jfif.png'
    },
    {
        id: 'misa',
        name: 'Misa',
        last: 'Amane',
        age: '19',
        personality: 'bubbly / obsessively devoted / impulsive',
        cupSize: 'A',
        bgColor: '#09ff00',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/y2104_25755029114704204-jfif.png'
    },
    {
        id: 'rem',
        name: 'Rem',
        last: '-',
        age: '17',
        personality: 'polite / deeply loyal / hardworking',
        cupSize: 'B',
        bgColor: '#659cda',
        position: 'pos-left', 
        imageSrc: 'https://cdn.imgurl.ir/uploads/x473361_Ghe-xem-Light-Novel-cua-to-o-FB-Esora-nhe-jfif.png'
    }
];


const preloadedImages = [];
characters.forEach(char => {
    const img = new Image();
    img.src = char.imageSrc;
    preloadedImages.push(img);
});

let currentIndex = 0;

const appContainer = document.getElementById('app-container');
const mainContent = document.getElementById('main-content');
const characterImg = document.getElementById('character-img');

const bioName = document.getElementById('bio-name');
const bioLast = document.getElementById('bio-last');
const bioAge = document.getElementById('bio-age');
const bioPersonality = document.getElementById('bio-personality');
const bioCupSize = document.getElementById('bio-cupsize');

function renderCharacter(index) {
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
        const char = characters[index];
        
        characterImg.src = char.imageSrc;
        bioName.textContent = char.name;
        bioLast.textContent = char.last;
        bioAge.textContent = char.age;
        bioPersonality.textContent = char.personality;
        bioCupSize.textContent = char.cupSize;

        appContainer.style.backgroundColor = char.bgColor;
        appContainer.style.setProperty('--glow-color', char.bgColor);
        
    
        mainContent.className = `content-layout ${char.position}`;

        characterImg.onload = () => {
            mainContent.style.opacity = '1';
        };
        
        if (characterImg.complete) {
            mainContent.style.opacity = '1';
        }

    }, 300);
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % characters.length;
    renderCharacter(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    renderCharacter(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    renderCharacter(currentIndex);
});
