alert("BIENVENIDOS A MATEADOS");

const exit = "n";

while (exit === "n") {
    const value = prompt("ELIJA SU PRODUCTO: \n" +
        "1-Mate Madera \n" +
        "2-Mate Vidrio \n" +
        "3-Mate Ceramico \n" +
        "4-Mate Plastico \n");
    switch (Number(value)) {
        case 1:
            alert("Has elegido el mate madera");
            break;
        case 2:
            alert("Has elegido el mate vidrio");
            break;
        case 3:
            alert("Has elegido el mate ceramico");
            break;
        case 4:
            alert("Has elegido el mate plastico");
            break;
        default:
            if (Number(value >= 5)) {
                alert("Ingrese un número valido");
            }
    };
    if (exit === "n" || exit === "s") {
        exit = prompt("Quiere salir del menu? \n" +
            "s \n" +
            "n \n");

    } else {
        alert("Elija una opcion valida")
    }
}