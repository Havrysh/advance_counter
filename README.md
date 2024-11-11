# Advance counter

Styling: CSS

UI: React

Available functionality: 
  Increment and decrement by one via action buttons at the bottom of the card. 
  Also increment via space bar on the keyboard.
  Reset the counter at any moment.

Limitations:
  Counter can't go in negative value.
  Counter can't go more than five value. Action buttons are disabled and tooltip is shown when count === 5. Space bar doesn't work either when count === 5.

Preview: https://havrysh.github.io/advance_counter/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
