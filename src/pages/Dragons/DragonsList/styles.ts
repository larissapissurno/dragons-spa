import styled from 'styled-components';
import { shade } from 'polished';

export const TableHead = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead {
    text-transform: uppercase;
    color: #00ad5f;
    background: #1f212c;

    th {
      padding: 25px 20px;
    }

    th:nth-child(1) {
      width: 20%;
      padding-left: 40px;
    }
    th:nth-child(2) {
      width: 30%;
    }
    th:nth-child(3) {
      width: 40%;
    }
  }
`;

export const TableBody = styled.div`
  overflow: auto;
  max-height: calc(100vh - 290px);

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #4e4e4e;
  }

  ::-webkit-scrollbar-thumb {
    background: #00ad5f;
  }

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-size: 18px;

    tbody {
      td {
        padding: 20px;
      }

      td:nth-child(1) {
        width: 20%;
        padding-left: 40px;
      }
      td:nth-child(2) {
        width: 30%;
      }
      td:nth-child(3) {
        width: 40%;
      }
      td:nth-child(4) {
        text-align: center;

        svg {
          cursor: pointer;
          margin-left: 15px;
        }

        svg:nth-child(2) {
          color: #f0612c;
        }
      }
    }
  }
`;

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
    color: #ffffff;
    background: #00ad5f;

    :hover {
      background: ${shade(0.2, '#00ad5f')};
    }
  }
`;
