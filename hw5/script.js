const parseData = JSON.parse(data);
console.log(parseData);
const divEl = document.querySelector('.content');
parseData.forEach(elem => {
    divEl.insertAdjacentHTML('beforeend', `
        <h2>${elem.capsule_serial}</h2>
        <p>${elem.status}</p>
        <span>${elem.details}</span>
    `)
});
