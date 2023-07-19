import styled from "styled-components";


export const LayOut = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 99% 1%;
  align-content: center;
  min-height: 800px;
`;

export const Container2 = styled.div`
  backgroundColor: white;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
  grid-column: 2;
  grid-row: 1;
`;
export const Container3 = styled.div`
  backgroundColor: white;
  background-color: #fff;
  height: 100%;
`;

export const ProfileContainer = styled.div`
  text-align: center;
  backgroundColor: white;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
`;