import styled, { css } from 'styled-components';
import { shade } from 'polished';

import dragonBackground from '../../assets/dragongrey.png';

interface FormProps {
  hasError: boolean;
}

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffffff url(${dragonBackground}) no-repeat 5% bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupBox = styled.div`
  height: auto;
  width: 550px;
  border-radius: 20px;
  background: #282a36;
  color: #e3dfdb;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 42px 0px rgba(133, 133, 133, 1);
  text-align: center;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
