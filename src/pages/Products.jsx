import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CtxState } from "../context/HumanCtxprovider";
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
  const state = useContext(CtxState);
  const params = useParams();
  const products = state.allItem[params.id];

  return (
    <>
      {products ? (
        <Container>
          <div className="imgBox">
            <img src={products.img} alt={products.name} />
          </div>
          <div className="desc">
            <h2>{products.name}</h2>
            <p>\{products.price}KRW</p>

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
            <p>{products.desc}</p>
          </div>
        </Container>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};
export default Products;
