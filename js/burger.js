


// window.addEventListener("scroll", () => {
//     if (window.scrollY > 1100) {
//       document.getElementById("button").style.display = "flex";
//     } else {
//       document.getElementById("button").style.display = "none";
//     }
//   });



window.addEventListener('scroll',function(){
    var header = document.querySelector('nav');
    var text = document.querySelector('nav ul li a');

    if(window.scrollY>400){
        header.style.backgroundColor = '#fff';
        
        // text.style.color = '#000'
    }else{
        header.style.backgroundColor = 'transparent';
        // text.style.color = '#fff'

    }
})
