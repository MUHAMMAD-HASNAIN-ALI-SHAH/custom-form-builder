import UserSubmitForm from "@/components/UserSubmitForm/UserSubmitForm";
import UserSubmitFormFooter from "@/components/UserSubmitForm/UserSubmitFormFooter";

interface PageProps {
  params: {
    formId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const formId = await params.formId;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full 2xl:w-[1200px] flex flex-col items-center min-h-screen pt-20 px-5 md:px-0">
        <UserSubmitForm formId={formId} />
        <UserSubmitFormFooter />
      </div>
    </div>
  );
};

export default Page;
