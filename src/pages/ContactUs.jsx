import ContactUsForm from "../features/contactUs/ContactUsForm";
import Container from "../ui/Container";
import MainSection from "../ui/MainSection";

export default function ContactUs() {
  return (
    <MainSection>
      <Container>
        <div className="h-fit max-h-[70vh] overflow-y-scroll rounded-lg bg-[#000] p-[20px]">
          <div className="mb-[30px] text-center">
            <h1 className="text-[24px] font-[700] leading-[24px]">
              تواصل معنا
            </h1>
          </div>

          <ContactUsForm />
        </div>
      </Container>
    </MainSection>
  );
}
