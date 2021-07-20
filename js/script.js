
var value1 = 0;

function myfun() {

    value1+=1;
    
    if(value1 % 2 === 1){
        document.getElementsByClassName("bg-dark-blue")[0].style.backgroundColor = "#202020";
        document.getElementsByClassName("bg-dark-blue")[1].style.backgroundColor = "#202020";
        document.getElementsByClassName("bg-dark-blue")[2].style.backgroundColor = "#202020";
        document.getElementsByClassName("btn")[0].style.backgroundColor = "#202020";
        
        var x = document.getElementsByClassName("home22");
        x[0].style.backgroundColor = "gray";
        x[1].style.backgroundColor = "gray";

        document.getElementsByClassName("btn")[0].innerHTML = "Sayfayı Yenile";

        document.getElementsByClassName("muhammetemrevatan")[0].style.opacity = "0.9";
        document.getElementsByClassName("width-300px")[0].style.opacity = "0.8";
        document.getElementsByClassName("width-300px")[1].style.opacity = "0.8";
        document.getElementsByClassName("width-300px")[2].style.opacity = "0.8";

        var y = document.getElementsByClassName("demo");
        for (var i = 0; i < 9; i++) {
            y[i].style.color = "#fff";
        }

    }

    else {
        
        window.location.reload(1);
    }  
}
