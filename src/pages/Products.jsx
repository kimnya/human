import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CtxData, CtxState } from "../context/HumanCtxprovider";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  > .imgBox {
    width: 60%;
    > img {
      display: block;
      width: 100%;
    }
  }
  > .desc {
    width: 30%;
    margin-left: 10%;
    padding-top: 30px;

    > h2 {
      font-size: 32px;
      font-weight: normal;
      margin-bottom: 10px;
    }
    > p {
      font-size: 14px;
      margin-bottom: 30px;
    }
    > .selectBox {
      display: flex;

      p {
        margin: 0 30px 60px 0;
        > select {
          /* display: block; */
          width: 120px;
          margin-left: 10px;
          border: none;
          outline: none;
        } //select
        &.size,
        &.qty {
          width: 165px;
          border-bottom: 1px solid black;
        } //p *2
      } //select p
    } //selectBox
    > button {
      width: 400px;
      height: 50px;
      margin-bottom: 15px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      background-color: #000;
      transition: all 0.1s;
      &:hover {
        transform: scale(1.01);
      }
    }
    > p {
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
`;

const Products = () => {
  const data = useContext(CtxData);
  const { productId } = useParams();

  const products = data.find((product) => {
    if (product.productId == productId) {
      return true;
    }
  });

  // 출처: https://think0wise.tistory.com/6
  //  벨로퍼트님의 react-router-dom 예제로 풀어보려 했으나 배열안에 있는 객체의 값을 prams로 지정하는 방법을 몰라서(이거 때문이 아닐수 있다.) 해결하지 못함
  // 방법을 찾다가 배열의 index가 달라져도 배열안에 객채의 id값과 usePrams() 파라미터 값이 일치할때 return 해주는 로직을 발견 해결했다.
  return (
    <>
      {products ? (
        <Container>
          <div className="imgBox">
            <img src={products.image} alt={products.title} />
          </div>
          <div className="desc">
            <h2>
              {" "}
              {products.title.replace(
                /배송|국내|해외|당일|<b>|휴먼|메이드|<\/b>|[a-z]|[A-Z]|[0-9]|일본|-/g,
                ""
              )}
            </h2>
            <h2>{products.lprice}KRW</h2>

            <div className="selectBox">
              <p className="size">
                SIZE
                <select>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </p>
              <p className="qty">
                QTY
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </p>
            </div>
            <button>ADD TO CART</button>
            {/* <p>{products.desc}</p> */}
          </div>
        </Container>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};
export default Products;
