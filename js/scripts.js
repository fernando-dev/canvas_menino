function _menino()
{
    // Obt�m o id do canvas quem � "menino"
    var canvasElem = document.getElementById('menino');

    if (canvasElem.getContext)
    {
        //Obt�m o contexto "2d" de desenho para o canvas
        var context = canvasElem.getContext('2d');

        context.strokeStyle = '#9c9c9c'; // Define a cor com contexto.strokeRect()
        context.lineWidth   = 1; // Define a largura das bordas do desenho

        context.beginPath(); // Inicia o desenho
        context.arc(75,75,45,0,Math.PI*2,true); //Rosto

        // A fun��o moveTo, move para uma posi��o(x, y) do canvas a ser usada como posi��o de inicio para a
        // pr�xima fun��o de desenho, sem desenhar nada. Isto funciona como quando
        // levantamos a caneta para desenhar noutro sitio.
        context.moveTo(110,75); // Mover posi��o no canvas
        context.arc(75,75,35,0,Math.PI,false);  //Sorriso

        context.moveTo(65,65); // Mover posi��o no canvas
        context.arc(60,65,5,0,Math.PI*2,true);  //Olho Esquerdo

        context.moveTo(95,65); // Mover posi��o no canvas
        context.arc(90,65,5,0,Math.PI*2,true);  //Olho Direito

        context.stroke();
        context.closePath(); // Finaliza o desenho
    }
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-20656013-5']);
_gaq.push(['_trackPageview']);
(function()
{
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})
();
