import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import selectors from 'redux/selectors';
import { onGetAllUsers } from 'redux/reducers/action-creators';

import {
  Table,
  Popconfirm,
  Form,
  Typography,
  Select,
  Button,
  InputNumber,
  Input,
  Card
} from 'antd';
import { data } from './consts';
import { Data, EditableCellProps } from './types';
import { StyledTd, CustomSelect } from './styles';

const originData: Data[] = [];

for (let i = 0; i < 100; i++) {
  originData.push(...data);
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <StyledTd {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </StyledTd>
  );
};

export default function UserTable() {
  const [form] = Form.useForm();
  const [array, setArray] = useState<Data[]>([]);
  const [editingKey, setEditingKey] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAllUsers('token'));
  }, [dispatch]);

  const allUsers = useSelector(selectors.getAllUsers);

  const renderUsers = () => {
    const oneUser = allUsers.map(user => {
      return {
        key: user.id,
        name: user.name,
        email: user.email,
        status: user.isBlocked
      };
    });

    return oneUser;
  };

  const dadadadada = renderUsers();

  const isEditing = (record: Data) => record.key === editingKey;

  const edit = (record: Partial<Data> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', email: '', status: false, ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey(0);
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Data;

      const newData = [...array];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        setArray(newData);
        setEditingKey(0);
      } else {
        newData.push(row);
        setArray(newData);
        setEditingKey(0);
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      editable: true
    },
    {
      title: 'Email',
      dataIndex: 'email',
      editable: true
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_: any, record: Data) => {
        const editable = isEditing(record);
        console.log(record);
        return (
          <CustomSelect
            defaultValue={record.status ? 'Block' : 'Unblock'}
            disabled={!editable}
            // getPopupContainer={trigger => trigger.parentNode}
          >
            <Select.Option value="Block">Block</Select.Option>
            <Select.Option value="Unblock">Unblock</Select.Option>
          </CustomSelect>
        );
      }
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_: any, record: Data) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== 0}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      }
    },
    {
      title: '',
      dataIndex: 'sendPassword',
      render: () => {
        return <Button>Send password</Button>;
      }
    }
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Data) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  return (
    <Card bordered={false}>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell
            }
          }}
          bordered
          dataSource={dadadadada}
          columns={mergedColumns}
          pagination={{
            onChange: cancel
          }}
        />
      </Form>
    </Card>
  );
}
