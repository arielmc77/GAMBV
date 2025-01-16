<script>
    // Función para cargar el menú
    fetch('menu.html')
        .then(response => response.text())
        .then(data => document.getElementById('menu-container').innerHTML = data);

    // Función para cargar el pie de página
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
</script>