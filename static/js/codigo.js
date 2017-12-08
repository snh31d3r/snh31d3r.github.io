//// Mi Trabajo
var proyecto_1 = document.getElementById('proyecto_1');
var proyecto_2 = document.getElementById('proyecto_2');
var proyecto_3 = document.getElementById('proyecto_3');
var proyecto_4 = document.getElementById('proyecto_4');
var proyecto_5 = document.getElementById('proyecto_5');
var proyecto_6 = document.getElementById('proyecto_6');

////Inicializar eventos click
proyecto_1.addEventListener("click", proyectoUno);
proyecto_2.addEventListener("click", proyectoDos);
proyecto_3.addEventListener("click", proyectoTres);
proyecto_4.addEventListener("click", proyectoCuatro);
proyecto_5.addEventListener("click", proyectoCinco);
proyecto_6.addEventListener("click", proyectoSeis);

////Redireccionamiento de los proyectos a github
function proyectoUno()  /////SupermercadoOnline
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/SupermercadoOnline";
    a.click();
}

function proyectoDos()////App-Tienda
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/App-Tienda";
    a.click();
}

function proyectoTres()////Simulacion Micormouse
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/MicroMouseSimulation";
    a.click();
}

function proyectoCuatro()////Reconocimiento de vocales
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/RNA-Hopfield-Reconocimiento";
    a.click();
}

function proyectoCinco()//////Calentador de Agua.
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/CalentadorAgua_ONOFF";
    a.click();
}

function proyectoSeis()///Laboratorio electronica
{
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://github.com/snh31d3r/LabElectronica";
    a.click();
}
