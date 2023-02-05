const body = document.querySelector('body');
const frontCard = document.querySelector('.popup');
const backCard = document.querySelector('.card-box');
const click = document.querySelector('.click');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const cover = document.querySelector('.cover');

let root = document.documentElement;
const addGift = () => {
	const gift = document.createElement('i');

	gift.classList.add('gift', 'fa-solid', 'fa-gift');
	changeColor(gift);
	gift.style.animationDuration = Math.random() * 3 + 5 + 's';
	gift.style.left = Math.random() * innerWidth + 5 + 'px';
	gift.style.transform = 'scale(5)';
	document.body.append(gift);

	setTimeout(() => {
		gift.remove();
	}, 8000);
};

const changeColor = (gift) => {
	const h = '43';
	const s = Math.floor(Math.random() * 10) + '1%';
	const l = Math.floor(Math.random() * 10) + '1%';
	gift.style.color = `hsl(${h}, ${s}, ${l})`;
};

let droppingGift = setInterval(addGift, 700);

const showWishes = () => {
	clearInterval(droppingGift);
	frontCard.style.display = 'none';
	backCard.style.display = 'flex';
};

click.addEventListener('click', showWishes);
openBtn.addEventListener('click', () => {
	cover.classList.add('show');
});
closeBtn.addEventListener('click', () => {
	cover.classList.remove('show');
});
