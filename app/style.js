import { injectGlobal } from 'styled-components';

// Global CSS Styling
injectGlobal([
  `
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  html, body, #app {
    height: 100%;
  }

  html {
    --media-desktop: 768px;
  }

  body {
    --col-bg: #E2DCDE; // Gainsboro
    --col-font: #2D2D34; // Jet

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-height: 100%;

    color: var(--col-font);
    background-color: var(--col-bg);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }

  #app {
    max-width: 90%;
    @media (min-width: var(--media-desktop)) {
      max-width: 720px;
    }
  }
`,
]);
