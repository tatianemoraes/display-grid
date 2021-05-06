import React from 'react'; 
import { Container, Text, Main, Footer } from './styles'


export default function LeftSide() {
  return (
    <Container>
      <Main>
        <Text>
          <p className='title'>THE GOOD NETWORK</p>
          <hr/>
          <div className="title2">
            <p className="medium-word">We are</p>
            <p className="high-word">Invite only right now</p>
            <p className="short-word">10 Million+ people have joined our network.
            <br/>
            We invited you to join the tribe
            </p>
          </div>
        </Text>
        <Footer>
          <p className="medium-word">Already have an account?</p>
          <b className="medium-word">Sign in</b>
        </Footer>
      </Main>
    </Container>
  )
}
