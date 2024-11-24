import { useUserNotifications } from "../../queries/useUserNotifications";
import Container from "../../ui/Container";
import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/Empty";

function MainNotifications() {
  const { isLoading, notifications } = useUserNotifications();

  if (isLoading) return <Spinner />;
  if (!notifications) return <Empty message={"فشل في عرض البيانات."} />;

  return <Container>MainNotifications</Container>;
}

export default MainNotifications;
