document.getElementById('order-form').addEventListener('submit' function(event) {
    event.preventDefault();
    alert('order submitted sucessfully');
});
function scrollToSection(sectionid){
    document.getElementById(sectionid).scrollIntoView({behavior:'smooth'});

};