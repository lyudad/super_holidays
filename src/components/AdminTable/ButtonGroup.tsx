import { useDispatch } from 'react-redux';
import { onUpdateStatus } from 'redux/reducers/action-creators';
import { Status } from 'redux/reducers/types';
import { Button } from 'antd';
import { useState } from 'react';
import { WrapperButtons } from '../../helpers/globalStyle';

interface OnProps {
  onId: number;
}

export default function ButtonGroup(props: OnProps): JSX.Element {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const onApprove = () => {
    dispatch(onUpdateStatus({ id: props.onId, status: Status.APPROVED }));
    setEdit(!edit);
  };
  const onDecline = () => {
    dispatch(onUpdateStatus({ id: props.onId, status: Status.REJECTED }));
    setEdit(!edit);
  };
  return (
    <>
      <WrapperButtons>
        <Button disabled={edit} onClick={onApprove}>
          Approve
        </Button>
        <Button disabled={edit} onClick={onDecline} danger>
          Decline
        </Button>
        <Button onClick={() => setEdit(!edit)}>Edit</Button>
      </WrapperButtons>
    </>
  );
}
