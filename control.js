var button=document.querySelectorAll(".btn div");
var len= button.length;
for(var i=0;i<len;i++){
    button[i].addEventListener("click", function(){
        var letter=this.innerHTML;
        Selector(letter);
    });
    
}
function Selector(letter){
    var source;
    letter=letter.toUpperCase();
    switch(letter){
        case 'A':
            source="sounds/a.mp3";
            i=0;
            break;
        case 'B':
            source="sounds/b.mp3";
            i=1;
            break;
        case 'C':
            source="sounds/c.mp3";
            i=2;
            break;
        case 'D':
            source="sounds/d.mp3";
            i=3;
            break;
        case 'E':
            source="sounds/e.mp3";
            i=4;
            break;
        case 'F':
            source="sounds/f.mp3";
            i=5;
            break;
        case 'G':
            source="sounds/g.mp3";
            i=6;
            break;
        case 'H':
            source="sounds/h.mp3";
            i=7;
            break;
        case 'I':
            source="sounds/i.mp3";
            i=8;
            break;
        case 'J':
            source="sounds/j.mp3";
            i=9;
            break;
        case 'K':
            source="sounds/k.mp3";
            i=10;
            break;
        case 'L':
            source="sounds/l.mp3";
            i=11;
            break;
        case 'M':
            source="sounds/m.mp3";
            i=12;
            break;
        case 'N':
            source="sounds/n.mp3";
            i=13;
            break;
        case 'O':
            source="sounds/o.mp3";
            i=14;
            break;
        case 'P':
            source="sounds/p.mp3";
            i=15;
            break;
        case 'Q':
            source="sounds/q.mp3";
            i=16;
            break;
        case 'R':
            source="sounds/r.mp3";
            i=17;
            break;
        case 'S':
            source="sounds/s.mp3";
            i=18;
            break;
        case 'T':
            source="sounds/t.mp3";
            i=19;
            break;
        case 'U':
            source="sounds/u.mp3";
            i=20;
            break;
        case 'V':
            source="sounds/v.mp3";
            i=21;
            break;
        case 'W':
            source="sounds/w.mp3";
            i=22;
            break;
        case 'X':
            source="sounds/x.mp3";
            i=23;
            break;
        case 'Y':
            source="sounds/y.mp3";
            i=24;
            break;
        case 'Z':
            source="sounds/z.mp3";
            i=25;
            break;
        case '1':
            source="sounds/1.mp3";
            i=26;
            break;
        case '2':
            source="sounds/2.mp3";
            i=27;
            break;
        case '3':
            source="sounds/3.mp3";
            i=28;
            break;
        case '4':
            source="sounds/4.mp3";
            i=29;
            break;
        case '5':
            source="sounds/5.mp3";
            i=30;
            break;
        case '6':
            source="sounds/6.mp3";
            i=31;
            break;
        case '7':
            source="sounds/7.mp3";
            i=32;
            break;
        case '8':
            source="sounds/8.mp3";
            i=33;
            break;
        case '9':
            source="sounds/9.mp3";
            i=34;
            break;
        case '0':
            source="sounds/0.mp3";
            i=36;
            break;
        default:
            document.write("Sound is not added");
            i=36;
        
    }
    audio(source);
    Animation(i);
}

function audio(source){
    var aud_name= new Audio(source);
    aud_name.play();
}
function Animation(i){
    var a=document.getElementsByClassName("btn")[i];
    var b=document.querySelectorAll(".btn div")[i];
    a.classList.add("anim");
    b.style.color="red";
    setTimeout(function(){
        a.classList.remove("anim");
        b.style.color="white";
    },250);
}
//Keypress event listener by keyboard.
document.addEventListener("keypress",function(event){
    Key = event.key;
    Selector(Key);
})
