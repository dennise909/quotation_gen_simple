//generates mindfulness quotes 
function createMindfulQuote(){

  var mindfullFirstPart = ["¿Las pequeñas cosas?","El momento presente es el único tiempo","La única cosa que es real al final de tu viaje","La meditación es ser consciente de lo que está pasando ahora mismo:","La atención plena es simplemente ser consciente de lo que está sucediendo en este momento sin desear que sea diferente;","La práctica de la meditación no se trata de intentar","La atención no es difícil,"];
      mindfullSecondPart = ["¿Los pequeños momentos?","sobre el que tenemos","es lo que está sucediendo y lo que estás haciendo en este momento","en tu cuerpo, en tus sentimientos,","disfrutando de lo agradable sin aferrarse cuando cambia (que lo hace);","mirar hacia otro lugar para convertirse en algo mejor ","sólo tenemos"];
      mindfullThirdPart = ["No son tan pequeños. Jon Kabat-Zinn","algún dominio. Thích Nhất Hạnh","esto es todo lo que hay, siempre. Eckhart Tolle","en tu mente y en el mundo. Thich Nhat Hanh","estar con lo desagradable sin temor a que siempre será de esta manera (que no lo hará). James Baraz","se trata de hacerse amigo de lo que ya somos. Pema Chödrön","que recordar hacerlo. Sharon Salzberg"];
    
  var randFirstPart = mindfullFirstPart[Math.floor(Math.random() * mindfullFirstPart.length)];
      randSecondPart = mindfullSecondPart[Math.floor(Math.random() * mindfullSecondPart.length)];
      randThirdPart = mindfullThirdPart[Math.floor(Math.random() * mindfullThirdPart.length)];
  
      final_sentence = randFirstPart +' '+ randSecondPart +' '+ randThirdPart;
  
  var quote = document.getElementById("parragraph");
  quote.innerHTML = final_sentence;

return quote.innerHTML
}   

document.getElementById("button").addEventListener("click",function (){
  createMindfulQuote();
});



