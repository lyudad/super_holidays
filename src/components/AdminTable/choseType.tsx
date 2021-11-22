import { Select } from 'antd';

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export default function ChoseType(): JSX.Element {
  return (
    <>
      <Select
        defaultValue="vacation"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="vacation">vacation</Option>
        <Option value="sick day">sick day</Option>
      </Select>
    </>
  );
}
