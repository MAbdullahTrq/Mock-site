import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary: #0068B3;
    --primary-dark: #00487d;
    --primary-light: #4f97d1;
    
    /* Secondary Colors */
    --secondary: #2CB5E8;
    --secondary-dark: #0e98cb;
    --secondary-light: #69cff0;
    
    /* Accent Colors */
    --accent: #FF7D33;
    --accent-dark: #e65a0e;
    --accent-light: #ff9f66;
    
    /* Neutral Colors */
    --dark: #212529;
    --dark-gray: #495057;
    --gray: #6c757d;
    --light-gray: #f8f9fa;
    --white: #ffffff;
    
    /* Text Colors */
    --text-primary: #212529;
    --text-secondary: #555555;
    --text-muted: #6c757d;
    
    /* Status Colors */
    --success: #28a745;
    --warning: #ffc107;
    --danger: #dc3545;
    --info: #17a2b8;
    
    /* Layout Constants */
    --border-radius: 6px;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    --transition: all 0.2s ease-in-out;
    --container-width: 1200px;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-primary);
    background-color: #f5f7fa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    padding: 20px 0;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-dark);
    }
  }
  
  button {
    cursor: pointer;
    transition: var(--transition);
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
  }
`;

export default GlobalStyles; 