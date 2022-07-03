import styled from "styled-components";

const AppStyle = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  .header {
    position: relative;

    padding: 30px 0 8px;
    margin-bottom: 30px;

    font-weight: 400;
    font-size: 2.4em;
  }

  .header::before {
    content: "";

    position: absolute;
    left: 60px;
    bottom: 14px;
    width: 150px;
    height: 16px;
    transform: skew(-12deg) translateX(-50%);
    z-index: -1;

    background: rgba(219, 253, 0, 0.5);
  }
`;

export default AppStyle;
