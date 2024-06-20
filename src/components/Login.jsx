import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const handleGetAllThere = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp onClick={handleGetAllThere}>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 200px;
  width: 100%;
  display: block;
  margin: 0 auto;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  min-width: 200px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
const SignUp = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  border: none;
  border-radius: 30px;
  background-color: #0063e5;
  width: 95%;
  margin-bottom: 12px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-decoration: none;
  padding: 16.5px 0;
  border: 1px solid transparent;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.h2`
  font-size: 11px;
  font-weight: lighter;
  color: hsla(0, 0%, 95.3%, 1);
  /* margin: 0 0 0 24px; */
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;
