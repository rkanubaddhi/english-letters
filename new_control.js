var button=document.querySelectorAll(".btn div");
var len= button.length;
for(var i=0;i<len;i++){
    button[i].addEventListener("click", function(){
        var letter=this.innerHTML;
        audio(letter);
        Animation(letter);
    });  
}

function audio(letter){
    Source="sounds/"+`${letter.toLowerCase()}`+".mp3";
    var aud_name= new Audio(Source);
    aud_name.play();
}
function Animation(letter){
    letter=letter.toUpperCase();
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789*0#";
    for(var i=0;i<str.length;i++){
        if (str[i]==letter)
            break;
      }
    var a=document.querySelectorAll(".btn")[i];
    var b=document.querySelectorAll(".btn div")[i];
    a.classList.add("anim");
    b.style.color="red";
    setTimeout(function(){
        a.classList.remove("anim");
        b.style.color="white";
    },250);
}

document.addEventListener("keypress",function(event){
    Key = event.key;
    audio(Key);
    Animation(Key);
})