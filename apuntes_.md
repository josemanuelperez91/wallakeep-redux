# Apuntes con respecto al desarrollo de la práctica

## Configurar un store Redux donde se almacenará al menos la siguiente información

### Información sobre la sesión o el usuario registrado en el sistema

La pantalla que almacena el store de usuario es Login. Guarda un booleano que indica si el usuario se ha logueado o no y un valor de usuario (nombre). La pantalla Register unicamente tiene funciones de creación de usuario en el lado del servidor por lo que no lo he añadido al redux.

### Información sobre los anuncios

Se ha añadido redux a los componentes AdsGrid, Update y Create, pues son los que cargan los anuncios, los editan o los crean

### Formularios

El componente donde se ha implementado el formulario con lógica "escondida" es el de la pantalla de login, Login. Además del componente Input se ha creado un componente Button.

### Refactorizar algún componenente para que use hooks

El componente que ha sido refactorizado con hooks es Detail.

### Componente con snapshot testing

El componente que usa snapshot testing es Login. También es el usado para el test de acción de store mockeado
