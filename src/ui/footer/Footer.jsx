import Container from "../Container";
import MoreInformationDetails from "./MoreInformationDetails";

const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="flex min-h-[15vh] items-center justify-center bg-primary py-4 text-white sm:py-6">
      <Container>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-[30px] sm:flex-row sm:gap-[10px]">
          <p>جميع الحقوق محفوظة &copy; {currentYear}</p>
          <MoreInformationDetails />
        </div>
      </Container>
    </footer>
  );
}
