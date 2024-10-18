import Table from "../../../ui/Table";

function HealthRow({ item }) {
  return (
    <Table.Row key={item?.date}>
      <Table.Cell>{item?.date}</Table.Cell>
      <Table.Cell>{item?.day}</Table.Cell>
      <Table.Cell>{item?.weight}</Table.Cell>
      <Table.Cell>{item?.caloriesConsumed}</Table.Cell>
      <Table.Cell>{item?.consumedProteins}</Table.Cell>
      <Table.Cell>{item?.carpConsumption}</Table.Cell>
      <Table.Cell>{item?.fatsConsumed}</Table.Cell>
      <Table.Cell>{item?.averageSleep}</Table.Cell>
      <Table.Cell>{item?.sleepQualityIsAverage}</Table.Cell>
      <Table.Cell>{item?.mediumTension}</Table.Cell>
      <Table.Cell>{item?.averageStress}</Table.Cell>
      <Table.Cell>{item?.drinkingWaterIsAverage}</Table.Cell>
      <Table.Cell>{item?.stepsAverage}</Table.Cell>
      <Table.Cell>{item?.hungerIsAverage}</Table.Cell>
      <Table.Cell>{item?.howIsYourWorkout}</Table.Cell>
      <Table.Cell>{item?.menstrualProblems}</Table.Cell>
    </Table.Row>
  );
}

export default HealthRow;
