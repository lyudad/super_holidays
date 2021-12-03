import { useDispatch } from 'react-redux';
import { onUpdateStatus } from 'redux/reducers/action-creators';
import { Status } from 'redux/reducers/types';
import { Button } from 'antd';

interface OnProps {
  onId: number;
}

export default function ButtonGroup(props: OnProps): JSX.Element {
  const dispatch = useDispatch();
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
        <Button onClick={onApprove}>Approve</Button>
        <Button onClick={onDecline} danger>
          Decline
        </Button>
        <Button>Edit</Button>
      </div>
    </>
  );
}
