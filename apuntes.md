# Apuntes con respecto al desarrollo de la práctica

## Información sobre la sesión o el usuario registrado en el sistema

En la práctica de React no había que crear ninguna pantalla de usuario por lo que únicamente se almacena en el store el username para mostrarlo en el navbar de Home y un booleano que indica el estado de login.

La pantalla `/register` unicamente tenía funciones de creación de usuario en el lado del servidor, por lo que no ha sido refactorizada con redux.

## Información sobre los anuncios

Se ha añadido redux a los componentes AdsGrid, Update y Create, pues son los que se encargan de obtener los anuncios, editarlos y crearlos.

## Formularios

El componente donde se ha implementado el formulario con lógica "escondida" es Login. Además del componente Input se ha creado un componente Button.

## Refactorizar algún componenente para que use hooks

El componente que ha sido refactorizado con hooks es Detail.

## Componente con snapshot testing

El componente que usa snapshot testing es Login. También es que ha sido usado para el test de acción de store mockeado.
