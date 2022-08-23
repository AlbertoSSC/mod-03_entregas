// Calcular sueldo neto en nómina
// Las condiciones: Por rango de salario:

// Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
// Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
// Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
// Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%

// Adicionalmente:
// Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.

// Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };

var retención;
if (empleado.bruto < 12000) retención = 0;
else if (empleado.bruto < 24000) retención = 0.08;
else if (empleado.bruto < 34000) retención = 0.16;
else if (empleado.bruto > 34000) retención = 0.3;

if (empleado.hijos > 0) retención = retención - 0.02;

var netoAnual = empleado.bruto - retención * empleado.bruto;

var netoMensual = netoAnual / empleado.pagas;

console.log("Sueldo Bruto Anual: " + empleado.bruto + "€")
console.log("Sueldo Neto Anual: " + netoAnual + "€");
console.log("Sueldo Neto Mensual: " + netoMensual + "€");