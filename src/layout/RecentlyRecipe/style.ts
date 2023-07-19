import styled from "styled-components";

export const Container2 = styled.div`
  min-height: 800px;
  min-width: 1000px;
  background-color: white;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
  display: inline-grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;