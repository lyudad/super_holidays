import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { StyledDiv } from './styles';

export default function Spinner(): JSX.Element {
  return (
    <StyledDiv className={'spinner'}>
      <Loader type="Circles" color="#1890ff" height={50} width={50} />
    </StyledDiv>
  );
}
