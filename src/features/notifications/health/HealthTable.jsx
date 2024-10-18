import Table from "../../../ui/Table";
import HealthRow from "./HealthRow";

function HealthTable({ data }) {
  return (
    <Table>
      <Table.Header>
        <Table.Cell isHeader>التاريخ</Table.Cell>
        <Table.Cell isHeader>اليوم</Table.Cell>
        <Table.Cell isHeader>الوزن</Table.Cell>
        <Table.Cell isHeader>السعرات المستهلكه</Table.Cell>
        <Table.Cell isHeader>البروتينات المستهلكه</Table.Cell>
        <Table.Cell isHeader>الكارب المستهلكه</Table.Cell>
        <Table.Cell isHeader>الدهون المستهلكه</Table.Cell>
        <Table.Cell isHeader>النوم متموسط</Table.Cell>
        <Table.Cell isHeader>جوده النوم متوسط</Table.Cell>
        <Table.Cell isHeader>التوتر متوسط</Table.Cell>
        <Table.Cell isHeader>الارهاق متوسط</Table.Cell>
        <Table.Cell isHeader>شرب الماء متوسط</Table.Cell>
        <Table.Cell isHeader>الخطوات متوسط</Table.Cell>
        <Table.Cell isHeader>الجوع متوسط</Table.Cell>
        <Table.Cell isHeader>كيف تمرينك؟</Table.Cell>
        <Table.Cell isHeader>مشاكل في الدوره</Table.Cell>
      </Table.Header>
      <Table.Body
        data={data}
        render={(item) => <HealthRow item={item} key={item?.date} />}
      />
    </Table>
  );
}

export default HealthTable;
