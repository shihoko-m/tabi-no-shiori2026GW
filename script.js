function showDay(i){
  document.querySelectorAll('.day-tab').forEach((t,j)=>t.classList.toggle('active',i===j));
  document.querySelectorAll('.day-panel').forEach((p,j)=>p.classList.toggle('active',i===j));
}
