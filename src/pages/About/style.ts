import styled from 'styled-components';

import {
  SiNodeDotJs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
} from 'react-icons/si';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;

  > p {
    margin-top: 20px;
    font-size: 25px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  color: black;
  padding-top: 30px;
`;

export const Description = styled.div`
  padding: 15px;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Icons = styled.div`
  padding-top: 20px;
`;

export const NodeIcon = styled(SiNodeDotJs)`
  width: 50px;
  height: 50px;
  color: green;
  margin: 10px;
`;

export const JavascriptIcon = styled(SiJavascript)`
  width: 50px;
  height: 50px;
  color: #f0db40;
  margin: 10px;
`;

export const TypescriptIcon = styled(SiTypescript)`
  width: 50px;
  height: 50px;
  color: #007acc;
  margin: 10px;
`;

export const HtmlIcon = styled(SiHtml5)`
  width: 50px;
  height: 50px;
  color: #e34c26;
  margin: 10px;
`;

export const CssIcon = styled(SiCss3)`
  width: 50px;
  height: 50px;
  color: #264de4;
  margin: 10px;
`;

export const ReactIcon = styled(SiReact)`
  width: 50px;
  height: 50px;
  color: skyblue;
  margin: 10px;
`;
