// función para obtener el ancho de la barra de scroll
const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width

// funcion para asignar ese valor a una variable css
const cssScrollBarWidth = () => document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`)

// asignar la variable css al cargar la página
addEventListener('load', cssScrollBarWidth)

// reasignar la variable css al redimensionar la ventana
addEventListener('resize', cssScrollBarWidth)