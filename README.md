
<div align='center'>
  <h1>Country App</h1>
  <img height="60" src="./src/assets/angular-logo-512.png">

  <i>El siguiente proyecto fue elaborado con la finalidad de poner en práctica mis habilidades y conocimientos en el framework Angular.</i>

</div>

## Introducción

Esta aplicación tiene como funcionalidad la busqueda de algún país por su nombre, por capital o continente (región) al que pertenece. Esto, con ayuda de la API "REST Countries" de la cual se habla más adelante. Esta información se visualiza en forma de tabla con distintos campos de información y una opción para visualizar más opciones.


En el desarrollo de esta, se pusieron en práctica temas como: `rutas de Angular`, `Lazy Load`, `reutilización de modulos`, `inputs`, `consumo de API´s`, `Debounce Time`, etc.

> [!NOTE]\
> Este proyecto perteneciente a los cursos "Angular: De cero a experto" del profesor [Fernando Herrera](https://www.udemy.com/course/angular-fernando-herrera/) sin embargo, con algunas modificaciones para poner en práctica más temas referentes al framwork. 



## Tecnologias utilizadas


| Tecnología     | Versión     | Documentación                           |
| :------------- | :---------- | :-------------------------------------- |
| `Angular`      | **17.2.1**  | https://angular.dev/overview            |
| `Angular CLI`  | **17.1.2**  | https://github.com/angular/angular-cli  |
| `Bootstrap`    | **5.3.3**   | https://getbootstrap.com/docs/5.3/getting-started/introduction/|
| `Node.js`      | **20.10.0** | https://nodejs.org/docs/latest-v20.x/api/index.html |


> [!TIP] \
> Para más información, consultar el archivo package.json de este proyecto.


## API Reference

La API consumida en el proyecto: [REST Countries](https://restcountries.com/#rest-countries)

#### Get all items

```http
  GET https://restcountries.com/v3.1/all
```

#### Get País

```http
  GET https://restcountries.com/v3.1/name/{name}
```

#### Get Capital

```http
  GET https://restcountries.com/v3.1/capital/{capital}
```

## Correr proyecto localmente

1. Clonación del proyecto:

```bash
  git clone https://github.com/OmarJV/country_app.git
```

2. Ir aldirectorio del proyecto

```bash
  cd country_app
```

3. Instalación de dependencias

```bash
  npm install
```

4. Inicializar el servidor

```bash
  ng serve -o
```


## Servidor de desarrollo

Ejecute `ngserve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

<div align="center">
  <br>
  <br>
  <br>
  <h1>Más info...
</div>

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
