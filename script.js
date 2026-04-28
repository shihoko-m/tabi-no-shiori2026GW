function showDay(i){
  document.querySelectorAll('.day-tab').forEach((t,j)=>t.classList.toggle('active',i===j));
  document.querySelectorAll('.day-panel').forEach((p,j)=>p.classList.toggle('active',i===j));
}
// ルートストリップのシームレスループ用にコンテンツを複製
(function(){
  const track = document.querySelector('.route-track');
  const orig = document.getElementById('route-content');
  if(!track || !orig) return;
  const clone = orig.cloneNode(true);
  clone.removeAttribute('id');
  track.appendChild(clone);
})();
