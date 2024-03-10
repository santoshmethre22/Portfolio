document.addEventListener('DOMContentLoaded', function() {
    var downloadCVBtn = document.getElementById('downloadCVBtn');

    downloadCVBtn.addEventListener('click', function() {
     
        var cvUrl = "./ht/cv.pdf";
        var downloadLink = document.createElement('a');
        downloadLink.href = cvUrl;
        downloadLink.download = 'Santosh_cv.pdf';
        downloadLink.click();
    });
});


document.getElementById('aboutMeBtn').addEventListener('click', function() {
    window.location.href = './ht/about.html'; 
});

