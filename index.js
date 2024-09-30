for( var i=0;i<14;i++)
    {
    document.querySelectorAll(".white")[i].addEventListener("click",  function (){
        var label=this.textContent;
        var timer=this;
        timer.classList.add("pressed");
        setTimeout(function(){timer.classList.remove("pressed");},100);
        keyTouch(label);
    });}
for( var i=0;i<10;i++)
    {
    document.querySelectorAll(".black")[i].addEventListener("click",  function (){
        var label=this.textContent;
        var timer=this;
        timer.classList.add("pressed");
       setTimeout(function(){
        timer.classList.remove("pressed");},100);
        keyTouch(label);
    })}
document.addEventListener("keydown",function(lis){
    var keypress=lis.key;
    keyPlay(keypress);
});
function keyTouch(pressed){
    switch(pressed){
        case "C":
        var audio =new Audio("./c.mp3");
            audio.play()
            break;
        case "c#":
            var audio =new Audio("./cnot.mp3");
            audio.play()
        break;
        case "D":
            var audio =new Audio("./d.mp3");
            audio.play()
            break;
        case "d#":
            var audio =new Audio("./dnot.mp3");
            audio.play()
            break;
        case "E":
            var audio =new Audio("./e.mp3");
            audio.play()
                break;
        case "F":
            var audio =new Audio("./f.mp3");
            audio.play()
            break;
        case "f#":
            var audio =new Audio("./fnot.mp3");
            audio.play()
            break; 

        case "G":
                var audio =new Audio("./g.mp3");
            audio.play()
            break;
        case "g#":
            var audio =new Audio("./gnot.mp3");
            audio.play()
        break;
        case "A":
            var audio =new Audio("./a.mp3");
            audio.play()
            break;
        case "a#":
            var audio =new Audio("./anot.mp3");
            audio.play()
            break;
        case "B":
            var audio =new Audio("./b.mp3");
            audio.play()
                break;
                case "C2":
        var audio =new Audio("./c2.mp3");
            audio.play()
            break;
        case "c#2":
            var audio =new Audio("./cnot2.mp3");
            audio.play()
        break;
        case "D2":
            var audio =new Audio("./d2.mp3");
            audio.play()
            break;
        case "d#2":
            var audio =new Audio("./dnot2.mp3");
            audio.play()
            break;
        case "E2":
            var audio =new Audio("./e2.mp3");
            audio.play()
                break;
        case "F2":
            var audio =new Audio("./f2.mp3");
            audio.play()
            break;
        case "f#2":
            var audio =new Audio("./fnot2.mp3");
            audio.play()
            break; 

        case "G2":
                var audio =new Audio("./g2.mp3");
            audio.play()
            break;
        case "g#2":
            var audio =new Audio("./gnot2.mp3");
            audio.play()
        break;
        case "A2":
            var audio =new Audio("./a2.mp3");
            audio.play()
            break;
        case "a#2":
            var audio =new Audio("./anot2.mp3");
            audio.play()
            break;
        case "B2":
            var audio =new Audio("./b2.mp3");
            audio.play()
                break;        
        default:console.log(pressed);  
       }}
function keyPlay(pressed) {
    switch(pressed){
        case 'a':
        pressTime(pressed);
        var audio =new Audio("./c.mp3");
            audio.play()

            break;
            
        case 'w':
            var audio =new Audio("./cnot.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'e':
                pressTime(pressed);
            var audio =new Audio("./dnot.mp3");
            audio.play()
            break;
            case 't':
            var audio =new Audio("./fnot.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'y':
            var audio =new Audio("./gnot.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'u':
            var audio =new Audio("./anot.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'k':
            var audio =new Audio("./c2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'l':
            var audio =new Audio("./d2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case ';':
            var audio =new Audio("./e2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case '\'':
            var audio =new Audio("./f2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'e':
            var audio =new Audio("./dnot.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'p':
            var audio =new Audio("./dnot2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case 'o':
            var audio =new Audio("./cnot2.mp3");
            audio.play()
            pressTime(pressed);
            break;
            case ']':
            var audio =new Audio("./fnot2.mp3");
            audio.play()
            pressTime(pressed);
            break;
        case 's':
            pressTime(pressed);
            var audio =new Audio("./d.mp3");
            audio.play()
            break;
        case 'd':
            pressTime(pressed);
            var audio =new Audio("./e.mp3");
            audio.play()
            break;
        case 'f':
            pressTime(pressed);
            var audio =new Audio("./f.mp3");
            audio.play()
            break;
        case 'g':
            pressTime(pressed);
            var audio =new Audio("./g.mp3");
            audio.play()
            break;
        case 'h':
            pressTime(pressed);
            var audio =new Audio("./a.mp3");
            audio.play()
            break;
        case 'j':
            pressTime(pressed);
            var audio =new Audio("./b.mp3");
            audio.play()
            break;
        default:console.log(pressed);
    }}
function pressTime(pushed){
    var snitch= document.querySelector("."+pushed);
    snitch.classList.add("pressed");
    setTimeout(function(){
        snitch.classList.remove("pressed");},100);
}
