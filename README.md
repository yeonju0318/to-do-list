이전에는 usestate()로 state값을 변경해줬었지만
리덕스(중앙 state 관리소)에서는 리듀서에서 그 값의 수정이 일어나게된다.

1. 모듈(state의 그룹)을 만든다.
   1-1. 모듈 안에는 초기 상태값과 리듀서가 있다.

2. 모듈을 스토어에 연결(configStore>rootReducer 변수에 집어넣음.)
   2-1. 모듈과 스토어 연결 확인하는 방법. useSelector()

3. 액션 객체 만들기
   3-1. 액션 value를 상수로 만들어준다. action creator를 이용.

4. 액션 객체 보내기
   4-1. useDispatch()로 dispatch라는 변수를 생성해줌. 그 안에 액션객체를 넣어주면된다.
   4-2. 리듀서에게 어떤 값을 같이 보내줘야할때 payload에 같이 담아보낸다.

5. 액션 객체 받기(콘솔로 확인할수있음)

6. 리듀서가 state값을 변경하는 코드 구현하기
   6-1. 액션 안에 있는 type을 switch문을 통해 작성

7. useSelector()로 변경된 state값 확인 가능
