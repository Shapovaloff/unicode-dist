export default function scrollMenu() {
  const menuMobile = document.querySelector('.page-header__wrapper');
  const breakpoint = window.matchMedia('(min-width:768px)');

  let lastScrollTop = 0;

  const scrollFounc = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st >= lastScrollTop) {
      menuMobile.style.transition = 'transform 0.2s';
      menuMobile.style.transform = 'translateY(-100%)';
    } else {
      menuMobile.style.transform = 'none';
    }
    lastScrollTop = st;
  };

  const breakpointChecker = () => {
    if (breakpoint.matches === true) {
      window.removeEventListener('scroll', scrollFounc, false);
    } else if (breakpoint.matches === false) {
      window.addEventListener('scroll', scrollFounc, false);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}
