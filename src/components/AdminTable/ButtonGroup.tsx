import { useDispatch } from 'react-redux';
import { onUpdateStatus } from 'redux/reducers/action-creators';
import { Status } from 'redux/reducers/types';
import { Button } from 'antd';
import { useState } from 'react';

interface OnProps {
  onId: number;
}

export default function ButtonGroup(props: OnProps): JSX.Element {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const onApprove = () => {
    dispatch(onUpdateStatus({ id: props.onId, status: Status.APPROVED }));
  };
  const onDecline = () => {
    dispatch(onUpdateStatus({ id: props.onId, status: Status.REJECTED }));
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Button disabled={edit} onClick={onApprove}>
          Approve
        </Button>
        <Button disabled={edit} onClick={onDecline} danger>
          Decline
        </Button>
        <Button onClick={() => setEdit(!edit)}>Edit</Button>
      </div>
    </>
  );
}
