import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { onGetAllUsers, onUpdateUser } from 'redux/reducers/action-creators';
import selectors from 'redux/selectors';
import { CustomSelect } from 'components/UserTable/styles';

export default function TableAdmin(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState(true);

  const dispatch = useDispatch();

  const allUsers = useSelector(selectors.getAllUsers);

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(onGetAllUsers('token'));
    }
  }, [allUsers.length, dispatch]);

  const onSubmit = (e: React.MouseEvent, id: number) => {
    // e.preventDefault();
    const user = {
      id: id,
      first_name: name,
      last_name: ' ',
      email: email,
      isBlocked: status
    };
    dispatch(onUpdateUser(user));
  };

  const handleChange = (e: string) => {
    if (e === 'Block') {
      setStatus(true);
    }
    setStatus(false);
  };

  const renderUsers = allUsers.map(user => {
    return {
      key: user.id,
      name: user.name,
      email: user.email,
      status: user.isBlocked ? 'Block' : 'Unblock'
    };
  });
  const rows = [...renderUsers];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map(row => (
              <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <input
                    disabled={edit}
                    defaultValue={row.name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    disabled={edit}
                    defaultValue={row.email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <CustomSelect
                    disabled={edit}
                    defaultValue={row.status}
                    onChange={handleChange}
                  >
                    <Select.Option value="Block">Block</Select.Option>
                    <Select.Option value="Unblock">Unblock</Select.Option>
                  </CustomSelect>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => setEdit(!edit)}>Edit</Button>
                  <Button onClick={e => onSubmit(e, row.key)}>Save</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>Send password</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
