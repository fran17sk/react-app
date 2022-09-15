# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






EJERCICIO 1
program {
    Poner(Azul)
    Mover(Norte)
    Poner(Azul)
    Mover(Norte)
    Poner(Azul)
    Mover(Este)
    Poner(Azul)
    Mover(Este)
    Poner(Azul)
    Mover(Sur)
    Poner(Azul)
    Mover(Sur)
    Poner(Azul)
    Mover(Oeste)
    Poner(Azul)
}

ejercicio 2 
procedure ColorearMarco(color){
  Poner(color)
  Mover(Norte)
  Poner(color)
  Mover(Norte)
  Poner(color)
  Mover(Este)
  Poner(color)
  Mover(Este)
  Poner(color)
  Mover(Sur)
  Poner(color)
  Mover(Sur)
  Poner(color)
  Mover(Oeste)
  Poner(color)
}

ejercicio3

function laSumaEsMasChica(a,b,c){
  return ((a+b)<c)
}

ejercicio 4
function seleccionarVestimenta(temp,color){
  if(temp>=22){
    return ('Remera '+color)
  }
  else{
    return ('Campera '+color)
  }
}

eh5
function filtrarLargas(palabras){
  let palabrafil = []
  for (let i = 0; i<palabras.length; i++){
    if (palabras[i].length>6){
      palabrafil.push(palabras[i])
    }
  }
  return palabrafil
}

ej6
function resumenDeLaSuscripcion(cliente){
  return (cliente.nombre+' se suscribió hace '+(2021-cliente.anioSuscripcion+' años y leyó '+cliente.librosLeidos.length+' libros'))
}


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MARCAS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.trekbikes.com/internationalspanish/es_IN_TL/">TREK</a></li>
                                    <li><a className="dropdown-item" href="https://venzoargentina.com.ar/">VENZO</a></li>
                                    <li><a className="dropdown-item" href="https://giant-bicycles.com.ar/">GIANT</a></li>
                                    <li><a className="dropdown-item" href="https://www.scott-sports.com/es/es/">SCOTT</a></li>
                                </ul>
                            </li>