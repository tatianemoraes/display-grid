import React from 'react'; 
import LeftSide from '../../components/LeftSide/index';
import SignUpSide from '../../components/SignUpSide/index';
import { Container } from './styles';

export default function PageLogin() {
  return (
    <Container>
      <LeftSide />
      <SignUpSide />
    </Container>
  )
}
