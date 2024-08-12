// fonction de tri du bottin

// chargement du DOM 
document.addEventListener('DOMContentLoaded', function() {
  const sortingRow = document.querySelector('.sorting-row'); // container ligne de tri 

  sortingRow.addEventListener('click', function(event) {
    if (event.target.classList.contains('sort-by')) {
      const columnIndex = event.target.getAttribute('data-column-index'); 
      sortItems(columnIndex); 
    }
  });

  function sortItems(columnIndex) {
    const itemsCont = document.querySelector('.items-row-container'); // container de toutes les lignes de contenu
    const itemRows = document.querySelectorAll('.item-row'); // TOUTES les lignes
    const itemRowsArray = Array.from(itemRows); // converti en array

    // tri selon le texte
    itemRowsArray.sort((a, b) => {
      const aValue = a.querySelector(`span.${columnIndex}`).textContent.toLowerCase();
      const bValue = b.querySelector(`span.${columnIndex}`).textContent.toLowerCase();
      return aValue.localeCompare(bValue);
    });
 
    itemsCont.innerHTML = ''; 

    itemRowsArray.forEach(itemRow => {
      itemsCont.appendChild(itemRow); 
    });
  } 
});