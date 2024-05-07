import Tween from "gsap"

export default class Clock {
    constructor() {
        this.clockHTML = document.querySelector(".clock");
        this.clockInterval = null;
    }
    
    init() {
        this.clockHTML = document.querySelector('.clock')
        if (this.clockHTML && this.clockInterval == null) {
            this.clockInterval = setInterval(this.getTime.bind(this), 1000);
        }
    }
    
    getTime() {
        let secChange;
        let minChange;
        let hourChange;
        const secondArrow = document.querySelector(".seconds");
        const minuteArrow = document.querySelector(".minutes");
        const hourArrow = document.querySelector(".hours");
        
        const tget = new Date();
        
        let seconds = tget.getSeconds();
        let minutes = tget.getMinutes();
        let hours = tget.getHours();
        
        hours = hours > 12 ? hours - 12 : hours;
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
            hourChange = hours * 30 + minutes / 2;
        }
        
        secondArrow ? this.moveArrow(secondArrow, secChange) : null;
        minuteArrow ? this.moveArrow(minuteArrow, minChange) : null;
        hourArrow ? this.moveArrow(hourArrow, hourChange) : null;
    }
    
    moveArrow(arrow, change) {
        Tween.set(arrow, {
            rotate: change,
        });
    }
    
    stop() {
        clearInterval(this.clockInterval);
        this.clockInterval = null;
    }
}