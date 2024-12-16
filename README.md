# 포켓몬 도감 프로젝트(https://pokemon-psi-taupe.vercel.app/)

포켓몬 도감 프로젝트는 [PokeAPI](https://pokeapi.co/)를 활용하여 포켓몬들의 정보를 보여주는 웹 애플리케이션입니다. 이 프로젝트는 React 및 Redux Toolkit을 사용하여 현대적인 웹 개발 기술을 적용하고, 비동기 API 호출, 상태 관리, 및 UI 렌더링에 대한 이해를 심화하기 위해 진행되었습니다.

## 프로젝트 목적

- **API 활용**: 외부 API를 통해 데이터를 받아오고, 이를 활용하여 동적인 웹 사이트를 구축합니다.
- **상태 관리**: Redux Toolkit을 사용하여 애플리케이션 상태 관리를 체계적으로 수행합니다.
- **비동기 처리**: 비동기 API 호출을 통해 실시간으로 데이터를 받아오고 이를 화면에 렌더링합니다.
- **UI 구현**: 사용자 친화적인 인터페이스를 구현하여, 정보를 효과적으로 표시합니다.

## 기술 스택

- **React**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리
- **Redux Toolkit**: 상태 관리를 위한 툴킷
- **Axios**: HTTP 클라이언트 라이브러리, API 요청을 쉽게 할 수 있습니다.
- **TypeScript**: JavaScript의 슈퍼셋으로, 정적 타입을 제공하여 안정적인 코드를 작성할 수 있게 합니다.

## 주요 기능

### 포켓몬 리스트 조회

- 사용자는 포켓몬의 리스트를 볼 수 있습니다. 리스트는 이름과 함께 각 포켓몬의 기본 이미지를 포함합니다.
- "더보기" 버튼을 통해 추가 포켓몬 데이터를 불러올 수 있습니다.

### 포켓몬 상세 정보 조회

- 리스트에서 포켓몬을 선택하면, 해당 포켓몬의 상세 정보를 볼 수 있는 페이지로 이동합니다.
- 상세 정보에는 포켓몬의 이름, 타입, 기본 스탯, 공식 아트워크 이미지 등이 포함됩니다.

## 상태 관리

- `fetchPokemons` 및 `fetchPokemonDetail` 함수는 Redux Toolkit의 `createAsyncThunk`를 사용하여 비동기적으로 포켓몬 리스트와 포켓몬 상세 정보를 가져옵니다.
- `pokemonDetailsState` 및 `pokemonsState`는 포켓몬들의 상세 정보와 리스트를 관리하는 데 사용됩니다. 이 상태들은 사용자의 요청에 따라 업데이트됩니다.

## 공부한 내용 및 상태관리

### 비동기 API 호출

- Axios를 사용하여 PokeAPI로부터 비동기적으로 데이터를 가져오는 방법을 학습했습니다. 각 포켓몬의 리스트 및 상세 정보를 요청하고, 응답으로 받은 데이터를 애플리케이션의 상태로 관리합니다.

### Redux Toolkit 사용

- 상태 관리를 위해 Redux Toolkit을 도입했습니다. 이를 통해 애플리케이션의 다양한 상태(예: 포켓몬 리스트, 상세 정보)를 효율적으로 관리하고, 컴포넌트 간 상태 공유 및 업데이트를 용이하게 했습니다.

### 타입스크립트 적용

- 타입스크립트를 사용하여 API 응답으로부터 받는 데이터의 타입을 정의하고, 이를 통해 타입 안정성을 확보하며 오류를 줄였습니다.

### UI 및 인터랙션 개선

- 사용자 경험을 개선하기 위해, 포켓몬 리스트 및 상세 페이지의 UI 디자인과 인터랙션을 세심하게 구현했습니다.

### 개발예정
- 타입별로 볼 수 있는 탭 생성
-  검색창 생성
-  약점 표시해주기? (api확인
-  순서( 가벼운 순 무거운순

