export default function tooltipSearch() {
  const searchForm = document.querySelector('.search-field__form');
  const searchField = searchForm.querySelector('.search-field__input');
  const tooltip = document.querySelector('.search-tooltip');

  const changeField = () => {
    searchField.addEventListener('input', () => {
      if (searchField.value.length >= 1) {
        tooltip.classList.add('search-tooltip--active');
        searchForm.style.borderBottomLeftRadius = '0px';
      } else {
        tooltip.classList.remove('search-tooltip--active');
        searchForm.style.borderBottomLeftRadius = '8px';
      }
    });
  };

  searchField.addEventListener('focus', changeField);

  searchField.addEventListener('blur', () => {
    tooltip.classList.remove('search-tooltip--active');
    searchForm.style.borderBottomLeftRadius = '8px';
  });
}
