import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './Routes'
import Modal from './components/Modal'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCheckSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' // which represents all of the brand icons in @fortawesome/free-brands-svg-icons. So any of the brand icons in that package may be referenced by icon name as a string anywhere else in our app. For example: "apple", "microsoft", or "google".

library.add(fab, faCoffee, faCheckSquare, faSpinner);//Read documentation here: https://github.com/FortAwesome/react-fontawesome

function App() {
  return (
    <React.Fragment>
      <Routes />
      <Modal />
    </React.Fragment>
  );
}
/* //Example of Font awsome and styling from bootstrap css
function App() {
  return (
    <div className="cotainer">
      <div className="row">
        <div className="col-6">
          Column 1
        </div>
        <div className="col-6">
          Column 4
          <FontAwesomeIcon icon="coffee" />
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <FontAwesomeIcon icon="spinner" size="6x" pulse/>
        </div>
      </div>
    </div>
  );
}*/

export default App;
