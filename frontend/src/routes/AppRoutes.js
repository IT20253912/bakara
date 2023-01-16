

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';





import  Form  from '../components/Form';
import Formtest from '../components/Formtest';
import  Table  from '../components/Header';
import Organizations from '../pages/Organizations';
import axios from 'axios'





const AppRoutes = () => {
    axios.defaults.headers.common['x-authToken'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InczZ19hc3NpZ25tZW50X2FzZUBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJTUF9BRE1JTiIsImlhdCI6MTY3MzUwNzE0MywiZXhwIjoxNjczNTM1OTQzfQ.-0vKqPi22tA58CbuE2kPfGTWlQN3uhy0fskYVA3jMZs'
    axios.defaults.baseURL = 'http://localhost:4000/'
    return (
        <div>
            <Router>
               
                <Routes>
                    
                    <Route path="/form" element={<Form/>} exact={true}/>
                    <Route path="/formtest" element={<Formtest/>} exact={true}/>
                    <Route path="/tabletest" element={<Table/>} exact={true}/>
                    <Route path="/org" element={<Organizations/>} />
                </Routes>
            </Router>
        </div>
    );
};
export default AppRoutes;
