
const notasAlumno = [6,8,9,2,5,10];

console.log(notasAlumno);

const calculoSumatoria = (notasAlumno) => {
  const resultado = notasAlumno[0] + notasAlumno[1] + notasAlumno[2] + notasAlumno[3] + notasAlumno[4] + notasAlumno[5];
  return resultado;
};

const calculoPromedio = (sumatoria, cantidadNotas) => {
    console.log("sumatoria", sumatoria);
    console.log("cantidadNotas", cantidadNotas);
    const resultado = sumatoria/cantidadNotas;
    return resultado;

};

const sumatoria = calculoSumatoria(notasAlumno);
console.log(sumatoria);

const cantidadNotas = notasAlumno.length;
console.log(cantidadNotas);

const promedio = calculoPromedio(sumatoria, cantidadNotas);
console.log(promedio);

