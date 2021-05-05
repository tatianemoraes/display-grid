import styled from 'styled-components';
import Bubble from '../../assets/bubble.jpg';

export const Container = styled.div`
  background: url(${Bubble});
  background-repeat: no-repeat;
  background-size:cover;
  border-radius: 65px;
  padding:60px;
`;

export const Main = styled.div`
  height: 320px;
  margin-top: 100px;
  display: grid; 
  align-items: center;
  justify-content: center;
  opacity: 1;
  color: #000; 
  background: rgb(255 255 255 / 70%);
  border-radius:20px; 
  text-align: start;
  padding-right: 215px;
  padding-top: 60px;
  padding-bottom: 20px;
`;

export const Text = styled.div`
  .title {
    margin-top: -63px;
    font-size: 18px;
  }

  .title2 {
    padding-top: 35px;
    display: grid; 
    gap: 10px;

    .short-word {
      font-size: 12px;
    }

    .medium-word {
      font-size: 15px;
    }

    .high-word {
      font-size: 18px;
    }
  }
`;
