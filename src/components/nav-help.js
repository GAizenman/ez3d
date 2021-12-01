import { NavDropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import '../styles/navbar.css';
import Pdf from '../Documents/UserManual.pdf';

export function NavHelp() {
  return (
    <div className='navbar-items'>
      <NavDropdown title='Help' id='Help-dropdown'>
        <NavDropdown.Item
          href={Pdf}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ margin: '0' }}>User Manual</div>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
