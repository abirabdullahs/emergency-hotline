const copyButtons = document.querySelectorAll('button:has(i.fa-regular.fa-copy)');
const callButtons = document.querySelectorAll('button:has(i.fa-solid.fa-phone)');
const loveButtons = document.querySelectorAll('button:has(i.fa-regular.fa-heart)');

const coinCount = document.getElementById('coin-count');
const copyCount = document.getElementById('copy-count');
const loveCount = document.getElementById('love-count');

const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear-history');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hotlineNumber = button.closest('.card').querySelector('h1.text-3xl').innerText;
        navigator.clipboard.writeText(hotlineNumber)
            .then(() => alert('Hotline number copied to clipboard'))
            .catch(err => console.error('Error copying text: ', err));

            // Increment copy count
        let currentCopies = parseInt(copyCount.innerText);
        copyCount.innerText = currentCopies + 1;
    });
});

callButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.currentTarget.closest('.card');
        const hotlineNumber = card.querySelector('h1.text-3xl').innerText;
        const serviceName = card.querySelector('h1.text-lg').innerText;

        // Coin check
        let currentCoins = parseInt(coinCount.innerText);
        if (currentCoins >= 20) {
            alert(`You called hotline: ${hotlineNumber}\nService: ${serviceName}`);
            coinCount.innerText = currentCoins - 20;
        } else {
            alert("Not enough coins to make a call.");
        }

        // Add to history
        const time = new Date().toLocaleTimeString();
        const title = card.querySelector('h1').innerText;
        const historyItem = document.createElement('div');
        historyItem.classList.add('flex', 'justify-between', 'bg-gray-100', 'p-2', 'rounded-lg');
        historyItem.innerHTML = `
            <div>
                <p class="font-bold">${title}</p>
                <p class="text-sm text-gray-500">${hotlineNumber}</p>
            </div>
            <p class="text-sm text-gray-500">${time}</p>
        `;
        historyList.prepend(historyItem);
    });
});

loveButtons.forEach(button => {
    button.addEventListener('click', () => {
        let currentLoves = parseInt(loveCount.innerText);
        loveCount.innerText = currentLoves + 1;
        console.log(currentLoves);
    });
});

clearBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
});
