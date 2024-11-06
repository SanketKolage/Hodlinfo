const toggleSwitch = document.querySelector('.theme-slider input[type="checkbox"]');

// Set the initial theme to dark by default
document.documentElement.setAttribute('theme', 'dark');
toggleSwitch.checked = true;  // Set the checkbox as checked by default

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function updateTimer() {
    const now = new Date();

    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("timer").textContent = `${seconds}`;
}
setInterval(updateTimer, 1000);

async function fetchCryptoData() {
    const loader = document.getElementById('loader');
    const table = document.getElementById('crypto-table');
    const tbody = document.getElementById('crypto-data');

    try {
        const response = await fetch('http://localhost:3000/api/crypto-data');
        const data = await response.json();

        loader.style.display = 'none';
        table.style.display = 'table';

        data.forEach((crypto, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td >${index + 1}</td>
          <td >${crypto.name}</td>
          <td>₹ ${crypto.last}</td>
         
          <td>₹ ${crypto.buy} </td>
          <td> ₹ ${crypto.sell}</td>
          <td>${crypto.volume}</td>
          <td> ${crypto.base_unit}</td>
         
          
        `;
        row.classList.add("row-style")
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        loader.textContent = 'Failed to load data';
    }
}

fetchCryptoData();
