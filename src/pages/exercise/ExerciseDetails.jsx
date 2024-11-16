import { useParams } from "react-router-dom";
import ExerciseDetailsSection from "../../features/exercise/ExerciseDetailsSection";
import Container from "../../ui/Container";
import Spinner from "../../ui/spinner/Spinner";
import { useUserExercisesByMuscle } from "../../queries/useUserExercisesByMuscle";

function ExerciseDetails() {
  const { exerciseId } = useParams();
  const { exerciseDetails, isLoading } = useUserExercisesByMuscle(exerciseId);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <ExerciseDetailsSection exerciseDetails={exerciseDetails} />
    </Container>
  );
}

export default ExerciseDetails;
