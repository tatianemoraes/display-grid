import styled from 'styled-components';

export const Container = styled.div`
  border: none; 
  border-radius: 5px;
  display: grid;
  justify-content: center;
  grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px;
  margin-top: 110px;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  label {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    font-size: 18px;
  }

  input {
    width: 400px;
    border-radius: 10px;
    border: 1px solid #f7f7f7;
    padding-left: 6px;
    font-size: 12px;

    & + label {
      padding-top: 10px;
    }
  }

  .input-check {
    margin-left: -183px;
  }

  .check {
    margin-top: 10px;
    margin-left: -192px;
  }
              
  button {
    width: 190px;
    height: 45px;
    border: 1px solid #000;
    justify-self: center;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 18px;
    padding-top: 12px;
  }

`;
