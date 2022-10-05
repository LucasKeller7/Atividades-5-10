var media
media = (nota1 + nota2) / 2
calcular = document.querySelector("#calcular");
calcular.addEventListener("click", ()=>{
    document.querySelector("#resultado").value = media;
})

/* <html>

<head>
  <script>
    function myFunction() {
      var number = "123";
      document.getElementById("myText").innerHTML = number;
    }
  </script>
</head>

<body onload="myFunction()">

  <h1>"The value for number is: " <span id="myText"></span></h1>

</body>

</html> */