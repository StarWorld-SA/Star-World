function movstar() {
    window.location.href = "movstar.html"
 }

   /* scripts das horas */

   const horas = document.getElementById('horas');
   const minutos = document.getElementById('minutos');
   const segundos = document.getElementById('segundos');
   
   const relogio = setInterval(function time() {
       let dateToday = new Date();
       let hr = dateToday.getHours();
       let mim = dateToday.getMinutes();
       let s = dateToday.getSeconds();
   
       if (hr < 10) hr = '0' + hr;
   
       if (mim < 10) mim = '0' + mim;
   
       if (s < 10) s = '0' + s;
   
       horas.textContent = hr;
       minutos.textContent = mim;
       segundos.textContent = s;
   })