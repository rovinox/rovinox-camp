import styled from "@emotion/styled";

export const RovinoxTitle = styled.h2`
  font-family: monospace;
  padding: 5px;
  letter-spacing: 0.3rem;
  .orangeText {
    color: #ec572c;
  }
`;

export const CoursePromise = styled.p`
  display: flex;
  align-items: center;
`;

export const ApplyButton = styled.a`
  border: 2px solid lightblue;
  background: linear-gradient(to right, #0a71a5, #23aef7), linear-gradient(90deg, #0a71a5, #23aef7);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 10px 50px 10px 50px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  height: 19px;
  line-height: 19px;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to right, white, white), linear-gradient(90deg, #0a71a5, #23aef7);
    background-clip: padding-box, border-box;
    color: #0177A9 !important;
    cursor: pointer;
  }
`;
