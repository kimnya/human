export const initialData = {
  show: false,
  search: false,
  isLogin: false,
  keyword: "",

  subMenu1: [
    { name: "모든 아이템" },
    { name: "신상품" },
    { name: "아우터" },
    { name: "셔츠" },
    { name: "티셔츠" },
    { name: "니트 커트소" },
  ],
  subMenu2: [
    { name: "하의" },
    { name: "신발" },
    { name: "모자" },
    { name: "가방 & 파우치" },
    { name: "액세서리" },
    { name: "이너웨어" },
  ],
  subMenu3: [
    { name: "홈 & 라이프 스타일" },
    { name: "협업 아이템" },
    { name: "wasted Youth" },
    { name: "CACTUS PLANT FLEA MARKET" },
  ],
};

// 출처 : https://yrnana.dev/post/2021-08-21-context-api-redux/
//   일반적으로 리액트 데이터는 부모로부터 자식으로 props를 통해 탑-다운으로 전달되는데, 이 단계가 너무 많아진다거나 전달을 여러곳에 해줘야하는 경우에 전역 스토어에 데이터를 저장하고 이를 데이터가 필요한 컴포넌트에 따로 공유할 수 있다.
// 어떤 데이터를 전역/로컬에 저장할 것인지는 개발자가 선택해야한다. 몇단계만 전달하면 되거나 굳이 전역으로 관리할 필요 없는 데이터를 전역 스토어에 넣는 것은 코드의 관리 측면에서도 좋지 않다.
// 이 말대로  다시 리팩토링할 데이터들이 보임

export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, show: !state.show };
    case "OFFSHOW":
      return { ...state, show: !state.show };
    case "SEARCH":
      return { ...state, search: !state.search };
    case "KEYWORD":
      return {
        ...state,
        keyword: action.data.keyword,
        search: !state.search,
      };

    case "OFFSEARCH":
      return { ...state, search: !state.search };
    // case "PAGECHANGE":
    //   return {
    //     ...state,
    //     keyword: "",
    //   };
    default:
      return state;
  }
};
