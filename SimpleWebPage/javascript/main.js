//DOM
// .querySelector (devuelve el primer elemento que cumple los criterio de búsqueda)
// .querySelectorAll (devuelve todos los elementos que cumplen con los criterios de búsqueda )

let links = document.querySelectorAll(".close");

links.forEach(function(link){

  link.addEventListener("click",function(ev){
    /*para que no actúe como siempre. Tambiél le añadimos abajo que retorne falso...*/
    ev.preventDefault();
    let content = document.querySelector('.content');

    //Para cambiar la animación de salida:

    //1. Le quito las clases de animación que ya tiene.
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //2. Le agrego clasas para animar su salida (fadeOutUp)
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    /**Después de cierto tiempo 1 vez*/
    //Retrasamos el redireccionamiento
    setTimeout(function(){
      location.href = "/";
    },600);

    //setInterval(function) - hace que las acciones se ejecuten una y otra vez.
    return false;
  });
});
