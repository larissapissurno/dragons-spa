import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #282a36;
  border-radius: 10px;
  border: 2px solid #666360;
  padding: 16px;
  width: 100%;
  color: #666360;
  transition: border 0.2s;
  transition: color 0.2s;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #e3dfdb;
      border-color: #e3dfdb;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #e3dfdb;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    height: 40px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
