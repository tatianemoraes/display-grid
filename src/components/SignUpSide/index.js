import React from 'react';
import { Container } from './styles';

export default function SignUpSide() {
  return (
    <Container>
      <h1>Sign Up</h1>
      <label htmlFor="">Email addres</label>
      <input type="text" name="" id="" placeholder="Enter your Email"/>
      <label htmlFor="">Set Password</label>
      <input type="password" name="" id="" placeholder="Enter password"/>
      <div className="check">
        <input type="checkbox" name="" id=""/>
        <label className='input-check' htmlFor="">Show Password</label>
      </div>
      <button type="button">Sign up</button>
      <p>or</p>
      <button>Continue with Google</button>
    </Container>
  )
}
