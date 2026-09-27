@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f8fafc;
}

button,
a,
textarea,
select,
input {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid #38bdf8;
  outline-offset: 2px;
}
