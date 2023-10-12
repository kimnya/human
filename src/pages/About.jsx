import React from "react";
import styled from "styled-components";

const ContContainer = styled.div`
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cont = styled.p`
  line-height: 2;
  margin-bottom: 100px;
`;

const About = () => {
  return (
    <>
      <ContContainer>
        <Cont>
          라이프 스타일 브랜드인HUMAN MADE는 “The Future Is In The Past”라는
          콘셉트로 NIGO ® 에 의해 2010년에 도쿄에서 시작되었다. <br /> HUMAN
          MADE는 그 시대의 분위기를 반영한 다양한 스타일과 많은 빈티지 제품들,
          끊임없는 문화의 흐름 가운데 세계 전역의 거리에 숨쉬는 대담한 발상들,
          일본의 타협 없는 장인 정신과 도쿄다운 멋을 결합한 다양한 상품을 전
          세계에 소개하고 있다. <br /> HUMAN MADE가 가진 비전은 전 세계에 생기
          넘치는 아이디어를 제공하는 근거지와 문화가 되는 것이다. <br /> 또한,
          모든 문화와 전 세계 크리에이터들에게, 그리고 미래를 짊어진
          젊은이들에게 이상향이 되는 것이다. <br />
        </Cont>

        <Cont>
          Launched by NIGO® in 2010, Human Made is a Tokyo-based lifestyle brand
          with the concept of “the future is in the past”. <br /> Human Made
          draws inspiration from a diverse mix of styles and vintage items,
          which embody the atmosphere of times past, while exploring bold ideas
          that stand out amid the constant stream of street culture. <br />{" "}
          Interweaving these elements with Japan’s uncompromising approach to
          craftsmanship and the playful spirit of Tokyo, Human Made creates a
          wide range of items for a global audience. <br />
          Human Made aspires to be a focal point for the culture, creativity and
          ideas that power the world.
        </Cont>
      </ContContainer>
    </>
  );
};

export default About;
