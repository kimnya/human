import React, { createContext, useEffect, useReducer, useState } from "react";
import { initialData, reducer } from "../reducer/humanmadeRducer";
import axios from "axios";

export const CtxState = createContext(null);
export const CtxDispatch = createContext(null);
export const CtxData = createContext(null);

const HumanCtxprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const { keyword } = state;

  const [data, setData] = useState([]);

  // 예외처리를 위해 사용하는 try-catch 구문을 사용하여 내가 원하는 상황에 맞게 API호출을 보내는 로직을 만들었다.
  //이로인해 다른 부분(ItemList컴포넌트,SearchPage)을 손대지 않고도 손쉽게 검색 기능을 구현할 수 있었다.
  // 하지만 axios만으로 검색기능을 구현할 수 없었고 useEffect에서 의존배열에 keyword값이 수정될때마다  api호출을 하도록 만들었더니 성공했다.

  // Router로 Home컴포넌트로 옮겨갈때 검색키워드를 초기화 시키고 싶은데 작동되지 않는다.
  // mount과정에서 if문이 실행됐다가 0.1초만에 밑에 구문이 실행된다. (새로고침해보면 알수 있음) 어디서 조건이 변하고있는건지..

  const naverApi = async () => {
    try {
      if (keyword !== "") {
        await axios
          .get("/api/v1/search/shop.json", {
            params: {
              query: "휴먼메이드" + keyword,
              display: 20,
            },

            headers: {
              "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
              "X-Naver-Client-Secret":
                process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
          })
          .then((res) => {
            setData(res.data.items);
          });
      }
      if (keyword === "") {
        await axios
          .get("/api/v1/search/shop.json", {
            params: {
              query: "휴먼메이드",
              display: 20,
            },

            headers: {
              "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
              "X-Naver-Client-Secret":
                process.env.REACT_APP_NAVER_CLIENT_SECRET,
            },
          })

          .then((res) => {
            setData(res.data.items);
          });
      }
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    naverApi();
  }, [keyword]);
  {
    console.log(data);

    console.log(10 % 1);
  }
  return (
    <>
      <CtxData.Provider value={data}>
        <CtxDispatch.Provider value={dispatch}>
          <CtxState.Provider value={state}>{children}</CtxState.Provider>
        </CtxDispatch.Provider>
      </CtxData.Provider>
    </>
  );
};

export default HumanCtxprovider;
