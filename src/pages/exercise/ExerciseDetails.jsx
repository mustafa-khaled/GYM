import { useParams } from "react-router-dom";
import { useUserExercisesByMuscle } from "../../queries/useUserExercisesByMuscle";
import ExerciseDetailsSection from "../../features/exercise/ExerciseDetailsSection";
import Container from "../../ui/Container";
import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/Empty";

function ExerciseDetails() {
  const { exerciseId } = useParams();
  const { exerciseDetails, isLoading } = useUserExercisesByMuscle(exerciseId);

  if (isLoading) return <Spinner />;
  if (!exerciseDetails) return <Empty message={"فشل في عرض البيانات."} />;

  return (
    <Container>
      <ExerciseDetailsSection exerciseDetails={exerciseDetails} />
    </Container>
  );
}

export default ExerciseDetails;
