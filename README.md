# React MUI UI library

## Installation 
* To install MUI:
    ```
    npm install @mui/material @emotion/react @emotion/styled
    ```
* MUI is using `emotion` as a styling engine by default
* `Roboto font:` MUI was designed with the `Roboto` font in mind, so we need to have that font in our app. Shown below is a sample link markup used to load the Roboto font from a CDN. So add this in `index.html` file.
    ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    ```
* `Font icons:` To use the font `Icon` component, you must first add the Material icons font. So add this in `index.html` file.
    ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    ```
* `SVG icons:` In order to use prebuilt SVG Material icons, you must first install the @mui/icons-material package:
    ```
    npm install @mui/icons-material
    ```
## Usage
* `Quick start:` Here's a quick example to get you started.
    ```js
    import * as React from 'react';
    import ReactDOM from 'react-dom';
    import Button from '@mui/material/Button';

    function App() {
    return <Button variant="contained">Hello World</Button>;
    }

    ReactDOM.render(<App />, document.querySelector('#app'));
    ```
* `Responsive meta tag:` To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.
    ```html
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    ```
