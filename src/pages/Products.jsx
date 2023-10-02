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
            <p>
              생일 등 특별한 날을 기념한 선물로도 딱 맞는 매일 디자인의 ”DAILY”
              T 셔츠 시리즈. <br />
              HUMAN MADE의 아이코닉 한 하트로고를 전신 무렵에 크게 프린트 해,
              뒷길에는 오늘의 날짜를 크게 프린트. <br />
              오늘밖에 손에 넣을 수 없는 스페셜 디자인입니다.
            </p>
            <p>
              ※이 상품은 수주 상품이 됩니다. <br /> 수주 상품은 수주 후의 생산이
              되어, 상품의 신고까지 통상보다 시간이 걸립니다. 또, 배송의 일시
              지정도 불가가 되고 있습니다. <br /> ※날짜의 리퀘스트는 접수하고
              있지 않습니다.
            </p>
            <p>
              ITEM ID: HM26TE1002 <br /> MATERIAL: 100% COTTON <br />
              COLOR: RED/BLACK/NAVY
            </p>
          </div>
        </Container>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};
export default Products;
