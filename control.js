var button=document.querySelectorAll(".btn div");
var len= button.length;
for(var i=0;i<len;i++){
    button[i].addEventListener("click", audio);
}
function audio(){
    var latter=this.innerHTML;
    var source;
    switch(latter){
        case 'A':
            source="sounds/a.mp3";
            break;
        case 'B':
            source="sounds/b.mp3";
            break;
        case 'C':
            source="sounds/c.mp3";
            break;
        case 'D':
            source="sounds/d.mp3";
            break;
        case 'E':
            source="sounds/e.mp3";
            break;
        case 'F':
            source="sounds/f.mp3";
            break;
        case 'G':
            source="sounds/g.mp3";
            break;
        case 'H':
            source="sounds/h.mp3";
            break;
        case 'I':
            source="sounds/i.mp3";
            break;
        case 'J':
            source="sounds/j.mp3";
            break;
        case 'K':
            source="sounds/k.mp3";
            break;
        case 'L':
            source="sounds/l.mp3";
            break;
        case 'M':
            source="sounds/m.mp3";
            break;
        case 'N':
            source="sounds/n.mp3";
            break;
        case 'O':
            source="sounds/o.mp3";
            break;
        case 'P':
            source="sounds/p.mp3";
            break;
        case 'Q':
            source="sounds/q.mp3";
            break;
        case 'R':
            source="sounds/r.mp3";
            break;
        case 'S':
            source="sounds/s.mp3";
            break;
        case 'T':
            source="sounds/t.mp3";
            break;
        case 'U':
            source="sounds/u.mp3";
            break;
        case 'V':
            source="sounds/v.mp3";
            break;
        
        case 'W':
            source="sounds/w.mp3";
            break;
        case 'X':
            source="sounds/x.mp3";
            break;
        case 'Y':
            source="sounds/y.mp3";
            break;
        case 'Z':
            source="sounds/z.mp3";
            break;
        case '1':
            source="sounds/1.mp3";
            break;
        case '2':
            source="sounds/2.mp3";
            break;
        case '3':
            source="sounds/3.mp3";
            break;
        case '4':
            source="sounds/4.mp3";
            break;
        case '5':
            source="sounds/5.mp3";
            break;
        case '6':
            source="sounds/6.mp3";
            break;
        case '7':
            source="sounds/7.mp3";
            break;
        case '8':
            source="sounds/8.mp3";
            break;
        case '9':
            source="sounds/9.mp3";
            break;
        case '0':
            source="sounds/0.mp3";
            break;
        default:
            document.write("Soound is not added");
        
    }
    Play(source);
}

function Play(source){
    var aud_name= new Audio(source);
    aud_name.play();
}