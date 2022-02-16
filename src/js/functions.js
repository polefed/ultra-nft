// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// functions

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - body.offsetWidth)}px`;

  body.style.scrollBehavior = 'auto';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  body.style.paddingRight = paddingOffset;
  body.classList.add('__lock');
  body.dataset.position = pagePosition;
  body.style.top = `-${pagePosition}px`;
}

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(body.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  body.style.paddingRight = '0px';

  body.style.top = 'auto';
  body.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  body.removeAttribute('data-position');
  body.style.scrollBehavior = 'smooth';
}