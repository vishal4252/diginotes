AOS.init(
    duration = 500
);

function openPDFInParentTab(url) {
    var win = window.open(url, "_parent");
    win.focus();
}

// Attach the function to the onclick event of the PDF link
var pdfLink = document.querySelector("a[href*='.pdf']");
pdfLink.onclick = function () {
    openPDFInParentTab(this.href);
};