/* path: src/styles/global.css */

/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f9f9f9;
  min-height: 100vh;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  display: block;
}

/* Global utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.text-center {
  text-align: center;
}

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}
