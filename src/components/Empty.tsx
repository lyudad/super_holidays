import { Link } from 'react-router-dom';
export default function Empty(): JSX.Element {
  return (
    <>
      <Link to="/login"> Login page</Link>
      <h1>Hello super holiday</h1>
    </>
  );
}
