import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  aws_cognito_region: 'ap-northeast-1',
  aws_user_pools_id: 'ap-northeast-1_in3GU2QKT',
  aws_user_pools_web_cliend_id: '33rn2g1i0ejso704cihqc3pl3s',
});

export function SignIn() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h2>Hello {user.username}</h2>
          <button onClick={signOut}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V3</h1>
        <SignIn />
      </header>
    </div>
  );
}
