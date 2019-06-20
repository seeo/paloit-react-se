import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';

const Navbar = ({logo_description, title}) => {
    //allow site to display the default props, if no props are specified at the parent

    return(
        <div className = "navbar bg-primary">
            <img
                src = {logo}
                alt = {logo_description}
            />
            <h3> {title}</h3>

        </div>
    )
}

    Navbar.defaultProps = {
        title: 'PALOPIC Order System',
        // logo: '../../../public/images/logo.png',
        logo_description: "PALO IT's EPIC logo",
    };
      //type checking...
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        logo_description: PropTypes.string.isRequired,
    }

export default Navbar;