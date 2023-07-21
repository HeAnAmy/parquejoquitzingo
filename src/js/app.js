import biblioteca from "./biblioteca.js";

addEventListener("DOMContentLoaded", () => {

const parqueSelect = document.getElementById("parqueSelect");
const autorSelect = document.getElementById("autorSelect");
const searchInput = document.getElementById("searchInput");

    // Función para cargar los datos en los selectores
    function loadOptions() {
        // Cargar los parques en el selector de parques
        for (const parque in biblioteca) {
            const option = document.createElement("option");
            option.value = parque;
            option.textContent = parque;
            parqueSelect.appendChild(option);
        }

        // Cargar los autores del primer parque en el selector de autores
        const primerParque = parqueSelect.options[parqueSelect.selectedIndex].value;
        updateAutorSelect(primerParque);
    }

    // Función para actualizar el selector de autores cuando se cambia el parque seleccionado
    function updateAutorSelect(selectedParque) {
        // Limpiar el selector de autores
        autorSelect.innerHTML = "";

        // Obtener los autores del parque seleccionado
        const autores = biblioteca[selectedParque];
        for (const autor in autores) {
            const option = document.createElement("option");
            option.value = autor;
            option.textContent = autor;
            autorSelect.appendChild(option);
        }
    }

    // Cargar los datos en los selectores al cargar la página
    loadOptions();

    // Actualizar los autores cada vez que se selecciona un parque
    parqueSelect.addEventListener("change", function () {
        const selectedParque = parqueSelect.options[parqueSelect.selectedIndex].value;
        updateAutorSelect(selectedParque);
    });

    function searchLinks(parque, autor, query) {
        // Obtener los enlaces correspondientes al parque y autor seleccionado
        const enlaces = biblioteca[parque][autor];
    
        query = query.toLowerCase();
        return enlaces.filter(link => link.name.toLowerCase().includes(query));
    }
    
    function displayResults(results) {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";
    
        if (results.length === 0) {
            resultsContainer.innerHTML = "No se encontraron resultados.";
            return;
        }
    
        const ul = document.createElement("ul");
        results.forEach(result => {
            const li = document.createElement("li");
    
            const nameLink = document.createElement("a");
            nameLink.href = result.url;
            nameLink.textContent = result.name;
            nameLink.classList.add("text-decoration-none");
            li.appendChild(nameLink);
    
    
            const languageP = document.createElement("p");
            languageP.textContent = `Idioma: ${result.language}`;
            languageP.classList.add("m-1")
            li.appendChild(languageP);
    
            const sizeP = document.createElement("p");
            sizeP.textContent = `Tamaño: ${result.size}`;
            sizeP.classList.add("mb-1");
            li.appendChild(sizeP);
    
            ul.appendChild(li);
        });
    
        resultsContainer.appendChild(ul);
    }
    
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedParque = parqueSelect.options[parqueSelect.selectedIndex].value;
        const selectedAutor = autorSelect.options[autorSelect.selectedIndex].value;
        const searchQuery = searchInput.value;
        const searchResults = searchLinks(selectedParque, selectedAutor, searchQuery);
        displayResults(searchResults);
    });

});