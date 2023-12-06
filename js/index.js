let modelo = null; 
    //Cargar modelo
    (async () => {
        console.log("Cargando modelo...");
        modelo = await tf.loadLayersModel("model.json");
        console.log(modelo);
        console.log("Modelo cargado...");
    })();
function cambiarCelsius(){
    let input = document.getElementById("celsius").value; 
    const lblCelsius = document.getElementById("lbl-celsius"); 
    lblCelsius.innerHTML= input; 
    if(modelo!== null){
        debugger
        let tensor = tf.tensor1d([parseInt(input)]);

        let prediccion = modelo.predict(tensor).dataSync(); 
        prediccion = Math.round(prediccion, 1); 
        document.getElementById("resultado").innerHTML = input + " celsius son " + prediccion + " fahrenheit!";
    }else {
        document.getElementById("resultado").innerHTML = "Intenta de nuevo en un momento...";
    }
}