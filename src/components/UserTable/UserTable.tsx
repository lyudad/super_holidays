// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import selectors from 'redux/selectors';
// import { onGetAllUsers, onUpdateUser } from 'redux/reducers/action-creators';

// import {
//   Table,
//   Popconfirm,
//   Form,
//   Typography,
//   Select,
//   Button,
//   Card,
//   Input,
//   Modal
// } from 'antd';
// import { Data, EditableCellProps } from './types';
// import { CustomSelect } from './styles';
// import { UserUpdate } from 'redux/reducers/types';
// import UserData from './User';

// export default function UserTable() {
//   const [form] = Form.useForm();
//   const [editing, setEditing] = useState(false);
//   const [editUser, setEditUser] = useState<UserUpdate | null>(null);
//   const dispatch = useDispatch();

// const allUsers = useSelector(selectors.getAllUsers);

// const edit = (record: UserUpdate) => {
//   if (record.id === Key) {
//     setEditing(true);
//   }
// };

// useEffect(() => {
//   dispatch(onGetAllUsers('token'));
// }, [dispatch]);

//   const columns = [
//     {
//       key: 1,
//       title: 'User',
//       dataIndex: 'name',
//       render: (name: string) => {
//         return editing ? (
//           <Input
//             defaultValue={name}
//             onChange={e => {
//               setEditUser(pre => {
//                 return { ...pre, email: e.target.value };
//               });
//             }}
//           />
//         ) : (
//           <Typography>{name}</Typography>
//         );
//       }
//     },
//     {
//       key: 2,
//       title: 'Email',
//       dataIndex: 'email',
//       render: (email: string) => {
//         return editing ? (
//           <Input
//             defaultValue={email}
//             onChange={e => {
//               setEditUser(pre => {
//                 return { ...pre, email: e.target.value };
//               });
//             }}
//           />
//         ) : (
//           <Typography>{email}</Typography>
//         );
//       }
//     },
//     {
//       key: 4,
//       title: 'Status',
//       dataIndex: 'isBlocked',
//       render: (isBlocked: boolean) => {
//         function handleChange(value: string) {
//           if (value === 'Block') {
//             return isBlocked;
//           }
//           return !isBlocked;
//         }
//         return (
//           <Select
//             defaultValue={isBlocked ? 'Block' : 'Unblock'}
//             style={{ width: 120 }}
//             onChange={handleChange}
//             disabled={!editing}
//           >
//             <Select.Option value="Block">Block</Select.Option>
//             <Select.Option value="Unblock">Unblock</Select.Option>
//           </Select>
//         );
//       }
//     },
//     {
//       key: 5,
//       title: 'Operation',
//       dataIndex: 'operation',
//       render: (record: UserUpdate) => {
//         return editing ? (
//           <span>
//             <Typography.Link
//               onClick={() => {
//                 setEditUser(record);
//                 setEditing(false);
//               }}
//               style={{ marginRight: 8 }}
//             >
//               Save
//             </Typography.Link>
//           </span>
//         ) : (
//           <Typography.Link
//             disabled={editing}
//             onClick={() => {
//               setEditing(true);
//             }}
//           >
//             Edit
//           </Typography.Link>
//         );
//       }
//     },
//     {
//       key: 6,
//       title: '',
//       dataIndex: 'sendPassword',
//       render: () => {
//         return <Button>Send password</Button>;
//       }
//     }
//   ];

//   return (
//     <Card bordered={false}>
//       <Form form={form} component={false}>
//         <Table
//           bordered
//           dataSource={allUsers}
//           columns={columns}
//           rowKey={record => record.id}
//         />
//         {/* <Modal
//           title="Edit"
//           okText="Save"
//           visible={editing}
//           onCancel={() => setEditing(false)}
//           onOk={() => {
//             setEditing(false);
//           }}
//         >
//           <Input value={editUser?.name} />
//           <Input value={editUser?.email} />
//           <Select
//             defaultValue={editUser?.isBlocked ? 'Block' : 'Unblock'}
//             value={editUser?.isBlocked ? 'Block' : 'Unblock'}
//             style={{ width: 120 }}
//             // onChange={handleChange}
//           >
//             <Select.Option value="Block">Block</Select.Option>
//             <Select.Option value="Unblock">Unblock</Select.Option>
//           </Select>
//         </Modal> */}
//       </Form>
//     </Card>
//   );
// }

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import selectors from 'redux/selectors';
// import { onGetAllUsers, onUpdateUser } from 'redux/reducers/action-creators';

// import {
//   Table,
//   Popconfirm,
//   Form,
//   Typography,
//   Select,
//   Button,
//   InputNumber,
//   Input,
//   Card
// } from 'antd';
// import { Data, EditableCellProps } from './types';
// import { User } from 'redux/reducers/types';
// import { StyledTd, CustomSelect } from './styles';

// const EditableCell: React.FC<EditableCellProps> = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'boolean' ? <CustomSelect /> : <Input />;

//   return (
//     <StyledTd {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{ margin: 0 }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`
//             }
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </StyledTd>
//   );
// };

// export default function UserTable() {
//   const [form] = Form.useForm();
//   const [array, setArray] = useState<Data[]>([]);
//   const [editingKey, setEditingKey] = useState(0);
//   const dispatch = useDispatch();

//   const allUsers = useSelector(selectors.getAllUsers);

//   const renderUsers = () => {
//     const oneUser = allUsers.map(user => {
//       return {
//         key: user.id,
//         name: user.name,
//         email: user.email,
//         status: user.isBlocked
//       };
//     });

//     return oneUser;
//   };

//   const data: Data[] = renderUsers();
//   console.log(data);

// useEffect(() => {
//   if (allUsers.length === 0) {
//     dispatch(onGetAllUsers('token'));
//   }
// }, [allUsers.length, dispatch]);

//   const isEditing = (record: Data) => record.key === editingKey;

//   const edit = (record: Partial<Data> & { key: React.Key }) => {
//     form.setFieldsValue({ name: '', email: '', status: false, ...record });
//     setEditingKey(record.key);
//   };

//   const cancel = () => {
//     setEditingKey(0);
//   };

//   const save = async (key: React.Key) => {
//     try {
//       const row = (await form.validateFields()) as Data;

//       const newData = [...array];
//       const index = newData.findIndex(item => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row
//         });
//         setArray(newData);
//         // const { name, email, status } = item;
//         // dispatch(onUpdateUser({ name, email }));
//         console.log(newData);
//         setEditingKey(0);
//       }
//       // } else {
//       //   newData.push(row);
//       //   setArray(newData);
//       //   setEditingKey(0);
//       // }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };

//   const columns = [
//     {
//       title: 'User',
//       dataIndex: 'name',
//       editable: true
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       editable: true
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//       render: (_: any, record: Data) => {
//         const editable = isEditing(record);
//         // console.log(record);
//         function handleChange(value: string) {
//           if (value === 'Block') {
//             return record.status === true;
//           }
//           return false;
//         }
//         return (
//           <CustomSelect
//             defaultValue={record.status ? 'Block' : 'Unblock'}
//             disabled={!editable}
//             onChange={handleChange}
//             // getPopupContainer={trigger => trigger.parentNode}
//           >
//             <Select.Option value="Block">Block</Select.Option>
//             <Select.Option value="Unblock">Unblock</Select.Option>
//           </CustomSelect>
//         );
//       }
//     },
//     {
//       title: 'Operation',
//       dataIndex: 'operation',
//       render: (_: any, record: Data) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{ marginRight: 8 }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link
//             disabled={editingKey !== 0}
//             onClick={() => edit(record)}
//           >
//             Edit
//           </Typography.Link>
//         );
//       }
//     },
//     {
//       title: '',
//       dataIndex: 'sendPassword',
//       render: () => {
//         return <Button>Send password</Button>;
//       }
//     }
//   ];

//   const mergedColumns = columns.map(col => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record: Data) => ({
//         record,
//         inputType: col.dataIndex === 'status' ? 'boolean' : 'text',
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record)
//       })
//     };
//   });

//   return (
//     <Card bordered={false}>
//       <Form form={form} component={false}>
//         <Table
//           components={{
//             body: {
//               cell: EditableCell
//             }
//           }}
//           bordered
//           dataSource={array}
//           columns={mergedColumns}
//           pagination={{
//             onChange: cancel
//           }}
//         />
//       </Form>
//     </Card>
//   );
// }

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { onGetAllUsers } from 'redux/reducers/action-creators';
import selectors from 'redux/selectors';

import { Table } from 'antd';
import { columns } from './consts';

export default function UserTable(): JSX.Element {
  const dispatch = useDispatch();

  const allUsers = useSelector(selectors.getAllUsers);

  const renderUsers = allUsers.map(user => {
    return {
      key: user.id,
      name: user.name,
      email: user.email,
      status: user.isBlocked ? 'Block' : 'Unblock'
    };
  });

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(onGetAllUsers('token'));
    }
  }, [allUsers.length, dispatch]);

  return <Table columns={columns} dataSource={renderUsers} />;
}
