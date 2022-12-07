import '../pages/index.css';

const descriptonElement = document.querySelector('.info__descripton');

fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        descriptonElement.textContent = res;
    });