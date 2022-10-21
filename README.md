# nextjs-starter

Nextjs를 쉽게 구성 할 수 있도록 도움을 주는 템플릿 입니다.

템플릿을 처음 사용한다면 아래의 확인사항들을 다시 살펴보는 것을 권장합니다. 별도의 설치가 필요하거나, 알고 있어야 하는 것에 대한 가이드라인을 제공하고 있습니다.

템플릿은 지속적으로 업데이트 진행/예정 이며, 업데이트 내용은 [Release]()에서 확인 가능합니다.

## Built-in Modules

템플릿은 아래와 같은 모듈들을 기본적으로 제공하고 있습니다.

- `Emotion`
- `React-Query`
- `axios`
- `dayjs`
- `recoil`
- `react-hook-form`

## Yarn Berry

Yarn Berry의 PnP 기능을 이용한 Zero-install을 사용하고 있습니다. 프로젝트를 클론하고 별도로 인스톨을 할 필요가 없습니다. `VSCode`를 기준으로 작성 되었습니다. 다른 에디터를 사용 하는 경우, [yarn sdks 문서](https://yarnpkg.com/getting-started/editor-sdks)를 참고해 주세요.

- [ZipFS Extenstion](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)은 항상 설치되어 있어야 합니다.

`Module not Founded` 에러가 발생한다면 아래 프로세스를 진행해주세요!

```bash
# VSCode sdks 설치
yarn dlx @yarnpkg/sdks vscode
```

## Path alias

템플릿에서 모듈 호출 시 경로는 `절대경로`로 사용 하고 있습니다. `/src` 의 경로들은 `@/` 로 사용 가능합니다. 추가적인 alias가 필요하다면 `tsconfig.json`의 `paths`에 추가할 수 있습니다.

```ts
import example from "@/components/TestModules";
```

## Storybook

컴포넌트들을 효율적으로 관리/공유 하기 위해 스토리북을 사용하고 있습니다. `@/components`에서 컴포넌트가 생성 되는 경우 필수적으로 스토리북 파일을 생성해 주셔야 합니다. 그 외, 필요한 부분에서 사용해도 무관합니다.

스토리북 파일은 테스트할 파일이 있는 폴더에서 `파일명.stories.{ts|tsx}`형식으로 작성해야 합니다.

## Testing

코드 신뢰성 및 유지보수 안정성을 테스트라이브러리를 이용하여 진행하고 있습니다.

- `@testing-library/react`
- `jest`

테스트 파일은 테스트 할 파일과 같은 위치에서 `*.spec.{ts|tsx}` 형식으로 생성하면 됩니다. `yarn test`를 통해 테스트 가능 합니다.

## Code Snippets (VSCode)

템플릿 예제로 제공하는 코드들을 스니펫으로 쉽게 불러 올 수 있게 제공 하고 있습니다. 제공하는 스니펫은 아래와 같습니다.

### Next Page

`nextPage`로 사용 가능합니다.

```tsx
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const $1Page: NextPage = (
  Props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <></>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

export default $1Page;
```

### Component

`cp`로 사용 가능합니다.

```tsx
import React from "react";

interface Props {}

export const $1: React.FC<Props> = () => {
  return <></>;
};
```

### Component Test

`cp-test`로 사용 가능합니다.

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import $1 from " ./$2";

it("$1", () => {
  render(<$1 />);

  screen.getByText("");
});
```

### Component Storybook

`cp-sb`로 사용 가능합니다.

```tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {$1} from './$1'

export default {
    title: ' Category/$1'
    component: test
} as ComponentMeta<typeof $1>

const Template: ComponentStory<typeof $1> = (args) => <$1 {...args} />

export const $2 = Template.bind({})
$2.args = {}
```
