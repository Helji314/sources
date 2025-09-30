document.getElementById('menuBtn').addEventListener('click', function(e) 
    { e.stopPropagation(); const menu = document.getElementById('menu'); 
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; }); 
document.addEventListener('click', function(e) 
    { const menu = document.getElementById('menu'); 
        if (menu) menu.style.display = 'none'; });