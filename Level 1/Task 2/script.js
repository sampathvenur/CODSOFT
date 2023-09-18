var tablinks=document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

    document.getElementById('downloadButton').addEventListener('click', function() {
        var pdfLink = 'https://drive.google.com/file/d/1vY0ayE5T6yjfH6eGsuIrtuRvT8jfx5VR/view?usp=sharing';

        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = pdfLink;
        a.download = 'sampathkumar_cv.pdf';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    });
