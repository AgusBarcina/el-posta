# Documentación del Proyecto Barcina Final

## Estructura del Proyecto

```
barcina-final/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
└── src/
    ├── App.css
    ├── App.jsx
    ├── firebase.js
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── CartWidget/
    │   ├── CartWidget.css
    │   └── CartWidget.jsx
    ├── Components/
    │   ├── AddIcon/
    │   │   └── AddIcon.jsx
    │   ├── CargaCompletada/
    │   │   └── CargaCompletada.jsx
    │   ├── Carrito/
    │   │   ├── Carrito.css
    │   │   └── Carrito.jsx
    │   ├── CartItem/
    │   │   └── CartItem.jsx
    │   ├── Context/
    │   │   ├── salesContext.jsx
    │   │   └── ShopContext.jsx
    ├── ItemListContainer/
    │   └── ItemListContainer.jsx
    ├── Navbar/
    │   ├── logo.jsx
    │   ├── NavBar.css
    │   └── NavBar.jsx
    └── pages/
        ├── card.css
        ├── Card.jsx
        ├── Catalogo.jsx
        ├── CheckoutForm.css
        ├── CheckoutForm.jsx
        ├── HomePage.css
        ├── HomePage.jsx
        ├── ProductoDetalle.jsx
        └── Shopage.jsx
```

## Descripción General

Este proyecto es una aplicación web desarrollada con React y Vite, orientada a la gestión y visualización de productos, carrito de compras y proceso de checkout. Utiliza Firebase para la gestión de datos y autenticación.

## Principales Componentes

- **App.jsx**: Componente principal que gestiona el enrutamiento y la estructura base de la aplicación.
- **CartWidget**: Muestra el icono y cantidad de productos en el carrito.
- **Components**: Incluye componentes reutilizables como iconos, carga completada, carrito, items del carrito y contextos para la gestión de estado global.
- **ItemListContainer**: Encargado de mostrar la lista de productos.
- **Navbar**: Barra de navegación principal con logo y enlaces.
- **pages**: Contiene las páginas principales como catálogo, detalle de producto, checkout y página de inicio.

## Contextos

- **salesContext.jsx** y **ShopContext.jsx**: Proveen el estado global para ventas y productos, permitiendo compartir información entre componentes.

## Firebase

- **firebase.js**: Configuración y conexión con Firebase para autenticación y base de datos.

## Estilos

- Archivos CSS para cada componente y página, permitiendo una personalización visual independiente.

## Configuración y Scripts

- **package.json**: Dependencias y scripts de ejecución.
- **vite.config.js**: Configuración de Vite para desarrollo y build.
- **eslint.config.js**: Configuración de ESLint para mantener la calidad del código.

## Cómo ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Construir para producción:
   ```bash
   npm run build
   ```

## Créditos y Licencia

Ver el archivo `README.md` para más detalles sobre los autores y la licencia del proyecto.
