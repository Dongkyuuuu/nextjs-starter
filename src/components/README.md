# Components

프로젝트에서 사용 되는 컴포넌트 모음

## 구성

`React 컴포넌트` `Storybook` `test` `index` 4가지로 구성 됩니다. 예시는 아래와 같습니다.

```bash
# Example
index.ts
Example.tsx
Example.stories.tsx
Example.spec.tsx
```

### index.ts

React 컴포넌트를 export 해주는 파일.

### Example.tsx

실제로 사용하는 React 컴포넌트, `cp` 스니펫으로 쉽게 구성 가능합니다.

### Example.stories.tsx

Storybook에서 렌더링 시켜줄 때 필요한 파일. 컴포넌트는 항상 storybook에 표시 되어야 합니다. `cp-sb`스니펫으로 쉽게 구성 가능합니다.

### Example.spec.tsx

React 컴포넌트 테스트 파일. `cp-test` 스니펫으로 쉽게 구성 가능합니다.
