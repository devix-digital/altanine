import Tween from 'gsap';

export const initClock = (status = true) => {
	const clockHTML = document.querySelector('.clock');
	let clockInterval;
	if (clockHTML && !clockInterval) {
		console.log('exist clock');
		if (status) {
			clockInterval = setInterval(getTime, 1000);
			console.log('init clock interval');
		} else {
			console.log('reset clock interval');
			clearInterval(clockInterval);
			clockInterval = null;
		}
	} else {
		console.log('not exist clock');
	}
}

function getTime() {
	console.log('clock');
	let secChange;
	let minChange;
	let hourChange;
	const secondArrow = document.querySelector('.seconds');
	const minuteArrow = document.querySelector('.minutes');
	const hourArrow = document.querySelector('.hours');
	
	const tget = new Date();
	
	let seconds = tget.getSeconds();
	let minutes = tget.getMinutes();
	let hours = tget.getHours();
	
	hours = ((hours > 12) ? hours - 12 : hours);
	if (seconds === 0) {
		secChange = 0;
	} else {
		secChange = seconds * 6;
	}
	if (minutes === 0) {
		minChange = 0;
	} else {
		minChange = minutes * 6;
	}
	if (hours === 12) {
		hourChange = 0;
	} else {
		hourChange = (hours * 30) + (minutes / 2);
	}
	
	moveArrow(secondArrow, secChange);
	moveArrow(minuteArrow, minChange);
	moveArrow(hourArrow, hourChange);
}

const moveArrow = (arrow, change) => {
	Tween.set(arrow, {
		rotate: change,
	});
}