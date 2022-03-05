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
* 