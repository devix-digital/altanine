import Tween from "gsap"

export default class Clock {
    constructor() {
        this.clocks = document.querySelectorAll('.clock');
        this.clockInterval = null;
    }
    
    init() {
        this.clocks = document.querySelectorAll('.clock');
        if (this.clocks.length && this.clockInterval == null) {
            this.clockInterval = setInterval(this.getTime.bind(this), 1000);
        }
    }
    
    getTime() {
        this.clocks?.forEach((clock) => {
            let secChange;
            let minChange;
            let hourChange;
            const secondArrow = clock.querySelector(".seconds");
            const minuteArrow = clock.querySelector(".minutes");
            const hourArrow = clock.querySelector(".hours");
            const timeHolder = clock.parentNode.querySelector(".time");
            let timeZoneoptions = {
                timeZone: clock.dataset.timeZone // Specify the desired timezone
            };
            const date = new Date();

            const tget = timeZoneoptions.timeZone
                ? new Date(date.toLocaleString('en-US', timeZoneoptions))
                : date;
            
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
            
            timeHolder.innerHTML = tget.toLocaleTimeString('en-US');
            
            secondArrow ? this.moveArrow(secondArrow, secChange) : null;
            minuteArrow ? this.moveArrow(minuteArrow, minChange) : null;
            hourArrow ? this.moveArrow(hourArrow, hourChange) : null;
        })
        
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