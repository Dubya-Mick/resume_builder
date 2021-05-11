import React from 'react';

function AppHeader() {
  return (
    <div className="header">
      <div className="app-title">
        <i className="material-icons" style={{ fontSize: '4rem' }}>description</i>
        <div>Resume Builder</div>
      </div>
      <div className="github-etc">
        <div style={{ fontSize: '1.2rem' }}>
          <a
            href="https://github.com/Dubya-Mick"
            target="_blank"
            rel="noreferrer"
          >
            My Github:
            {' '}
            <i className="fab fa-github" />
          </a>
        </div>
        <div style={{ fontSize: '0.8rem' }}>
          <a
            href="https://github.com/gregnb/react-to-print"
            target="_blank"
            rel="noreferrer"
          >
            Powered by React to Print:
            {' '}
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
