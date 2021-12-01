export interface Data {
  key: number;
  name: string;
  email: string;
  status: boolean;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Data;
  index: number;
  children: React.ReactNode;
}
