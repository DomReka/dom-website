import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ContactsIcon from '@material-ui/icons/Contacts';

export default class Header extends React.Component {

    render() {

        return(
            <div className="container-fluid headerWrapper">
                
                <div className="navContainer"><NavLink className="navBar" to="/"><HomeIcon /> Acceuil</NavLink></div>
                <div className="navContainer"><NavLink className="navBar" to="/skills"><Work /> Skills</NavLink></div>
                <div className="navContainer"><NavLink className="navBar" to="/works"><SchoolIcon /> Etudes & Travaux</NavLink></div>
                <div className="navContainer"><NavLink className="navBar" to="/projects"><DesktopWindowsIcon /> Projets</NavLink></div>
                <div className="navContainer"><NavLink className="navBar" to="/contact"><ContactsIcon /> Contact</NavLink></div>
                
            </div>
        )
    }
}
