// app.js
document.getElementById('prosjekt-skjema').addEventListener('submit', event => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const prosjektData = {
      navn: formData.get('navn'),
      beskrivelse: formData.get('beskrivelse'),
      startdato: formData.get('startdato'),
      sluttdato: formData.get('sluttdato'),
      status: formData.get('status')
    };
  
    fetch('/prosjekter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prosjektData)
    })
    .then(response => response.json())
    .then(() => {
      // Oppdater prosjektlisten etter vellykket opprettelse
      fetch('/prosjekter')
        .then(response => response.json())
        .then(data => {
          const tbody = document.getElementById('prosjekt-tabelldata');
          tbody.innerHTML = '';
          data.forEach(prosjekt => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${prosjekt.navn}</td>
              <td>${prosjekt.beskrivelse}</td>
              <td>${prosjekt.status}</td>
              <td>
                <button>Rediger</button>
                <button>Slett</button>
              </td>
            `;
            tbody.appendChild(row);
          });
        });
    });
  });
  