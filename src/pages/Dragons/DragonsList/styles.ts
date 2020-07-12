import styled from 'styled-components';

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
  max-height: calc(100vh - 200px);

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
    }
  }
`;