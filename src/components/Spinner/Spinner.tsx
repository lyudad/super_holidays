import PacmanLoader from 'react-spinners/PacmanLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

export default function Spinner(): JSX.Element {
  return <PacmanLoader color={'rgb(122, 122, 240)'} css={override} />;
}
