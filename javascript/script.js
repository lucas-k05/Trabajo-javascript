function ResumenTotal() {
  var nombre;
  var apellido;
  var CantTickets;
  var TicketEstudiante;
  var TicketTrainee;
  var TicketJunior;
  var categoria;
  var total;
  
  TicketTrainee = 200 - (200 * 50) / 100;
  TicketJunior = 200 - (200 * 15) / 100;
  TicketEstudiante = 200 - (200 * 80) / 100;
    
  CantTickets = document.getElementById('InputCant').value;
  categoria = document.getElementById('InputCateg').value;
  nombre = document.getElementById('InputNombre').value;
  apellido = document.getElementById('InputApellido').value;
  
  if (CantTickets > 0 && !isNaN(CantTickets) && CantTickets % 1 == 0) { 
    if (categoria == 'Estudiante') {
      total = TicketEstudiante * CantTickets;
      document.getElementById('TotalAPagar').innerHTML =
        'Total a Pagar: $' + total;
    } else if (categoria == 'Trainee') {
      total = TicketTrainee * CantTickets;
      document.getElementById('TotalAPagar').innerHTML =
        'Total a Pagar: $' + total;
    } else if (categoria == 'Junior') {
      total = TicketJunior * CantTickets;
      document.getElementById('TotalAPagar').innerHTML =
        'Total a Pagar: $' + total;
    } 
  } else {
    window.alert('Ingrese una cantidad valida de Tickets');
  }
 
  console.log('Nombre= ' + nombre)
  console.log('Apellido ='+ apellido)
  console.log( CantTickets + ' entradas')
  console.log( 'categoria: ' + categoria)
  console.log('Total a pagar: $'+ total)

}
function resetform(){
  document.getElementById("compratickets").reset();
}