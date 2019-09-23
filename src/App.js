import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Works from './components/works';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/skills" component={Skills}/>
                        <Route path="/works" component={Works}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
