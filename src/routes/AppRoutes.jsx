import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "../ui/spinner/Spinner";
import Diet from "../pages/Diet";
import Subscriptions from "../pages/Subscriptions";
import ProtectedRoute from "../ui/ProtectedRoute";
import SingleSubscription from "../pages/SingleSubscription";
import NotificationPopup from "../features/notifications/NotificationPopup";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));

const Notifications = lazy(
  () => import("../pages/notifications/Notifications"),
);
const DailyNotification = lazy(
  () => import("../pages/notifications/DailyNotification"),
);
const WeeklyNotifications = lazy(
  () => import("../pages/notifications/WeeklyNotifications"),
);
const WeightDevelopmentAndPhysicalHealth = lazy(
  () => import("../pages/notifications/WeightDevelopmentAndPhysicalHealth"),
);
const MeasurementsAndPictures = lazy(
  () => import("../pages/notifications/MeasurementsAndPictures"),
);
const WeightsDevelopment = lazy(
  () => import("../pages/notifications/WeightsDevelopment"),
);

const Exercise = lazy(() => import("../pages/exercise/Exercise"));
const TodayExercise = lazy(() => import("../pages/exercise/TodayExercise"));
const ExerciseDetails = lazy(() => import("../pages/exercise/ExerciseDetails"));

function AppRoutes() {
  return (
    <main className="mt-[64px] min-h-[calc(100vh-64px)] bg-bg_color">
      <NotificationPopup />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="*" element={<NotFound />} />
          <Route index path="/" element={<Home />} />
          <Route index path="/signUp" element={<SignUp />} />
          <Route index path="/login" element={<Login />} />

          <Route
            path="notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="daily" />} />
            <Route path="daily" element={<DailyNotification />} />
            <Route path="weekly" element={<WeeklyNotifications />} />
            <Route
              path="health"
              element={<WeightDevelopmentAndPhysicalHealth />}
            />
            <Route path="measurements" element={<MeasurementsAndPictures />} />
            <Route path="weights" element={<WeightsDevelopment />} />
          </Route>

          <Route
            path="exercise"
            element={
              <ProtectedRoute>
                <Exercise />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="today" />} />
            <Route path="today" element={<TodayExercise />} />
            <Route path="details/:exerciseId" element={<ExerciseDetails />} />
          </Route>

          <Route
            index
            path="/diet"
            element={
              <ProtectedRoute>
                <Diet />
              </ProtectedRoute>
            }
          />
          <Route index path="/subscriptions" element={<Subscriptions />} />
          <Route
            index
            path="/subscriptions/:id"
            element={<SingleSubscription />}
          />
        </Routes>
      </Suspense>
    </main>
  );
}

export default AppRoutes;
