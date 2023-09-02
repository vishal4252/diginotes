AOS.init(
    duration = 500
);

document.addEventListener('DOMContentLoaded', function () {
    const pdfLink = document.getElementById('pdfLink');

    pdfLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(pdfLink.getAttribute('href'), '_parent');
    });
});