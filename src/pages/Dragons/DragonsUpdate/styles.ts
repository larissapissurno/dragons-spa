import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  width: calc(100vw - 100px);
  color: #7666c9;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    width: 52px;
    border-radius: 50%;
    background: #282a36;
    color: #e3dfdb;

    :hover {
      background: ${shade(0.2, '#282a36')};
    }
  }
`;

export const ContentForm = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 99%;
    margin: 0;
  }
`;

export const ButtonSave = styled.button`
  background: #00ad5f;
  height: 56px;
  min-width: 150px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #e3dfdb;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  float: right;
  margin-right: 20px;

  &:hover {
    background: ${shade(0.2, '#00ad5f')};
  }
`;
