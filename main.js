const buttons = document.querySelectorAll(".button");
const tabsContent = document.querySelectorAll(".tab-content");

// Tab switching functionality
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
            tabsContent[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        tabsContent[i].classList.add("active");
    }
}

// Countdown functionality
const goalDates = [
    new Date("2026-01-15T00:00:00"), // Fazer faculdade 
    new Date("2026-08-20T00:00:00"), // Arrumar um emprego 
    new Date("2030-01-30T00:00:00"), // Pargar minhas dúvidas sobre a vida
    new Date("2068-12-31T00:00:00")  // Aposentar
];

function updateCountdown() {
    const now = new Date();
    
    for (let i = 0; i < goalDates.length; i++) {
        const timeRemaining = goalDates[i] - now;
        
        if (timeRemaining <= 0) {
            document.getElementById(`days${i}`).textContent = "0";
            document.getElementById(`hours${i}`).textContent = "0";
            document.getElementById(`minutes${i}`).textContent = "0";
            document.getElementById(`seconds${i}`).textContent = "0";
            continue;
        }
        
        const seconds = Math.floor(timeRemaining / 1000) % 60;
        const minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        
        document.getElementById(`days${i}`).textContent = days;
        document.getElementById(`hours${i}`).textContent = hours;
        document.getElementById(`minutes${i}`).textContent = minutes;
        document.getElementById(`seconds${i}`).textContent = seconds;
    }
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);
