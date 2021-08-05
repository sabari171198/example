function player(){
var howl = new Howl({
  src: ['test.mp3'],html5: true
});
console.log(howl);

function test()
{
  
var ppbutton = document.getElementById("play");

if(ppbutton.value==="Pause")
{
  console.log(ppbutton.value);
  howl.pause();
  ppbutton.value="Play";
}
else
{

  console.log(ppbutton.value);
  howl.play();
  ppbutton.value="Pause";
  
}
}

}
