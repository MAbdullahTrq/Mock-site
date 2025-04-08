import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #001D3D;
    --secondary: #2A9DF4;
    --accent: #FF6E00;
    --background: #ffffff;
    --light-gray: #f5f5f7;
    --dark-gray: #333333;
    --text-primary: #333333;
    --text-secondary: #666666;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
  }

  body {
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-sidebar {
      grid-template-columns: 1fr;
    }

    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .footer-content {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles; 