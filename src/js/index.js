// Your JS Code goes here
import likely from 'ilyabirman-likely';
import collapsibleDropdownList from './components/collapsibleDropdownList';
import initiateCharacterPopup from './components/charPopup';
import openMobileMenu from './components/mobileMenu';
import languageToggle from './components/language';
import asideMobile from './components/asideMobile';
import scrollMenu from './components/scrollMenu';
import tooltipSearch from './components/tooltipSearch';

document.addEventListener('DOMContentLoaded', () => {
  likely.initiate();
  collapsibleDropdownList();
  initiateCharacterPopup();
  openMobileMenu();
  languageToggle();
  asideMobile();
  scrollMenu();
  tooltipSearch();
});
