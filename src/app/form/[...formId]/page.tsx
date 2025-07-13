import UserSubmitForm from "@/components/UserSubmitForm/UserSubmitForm";
import UserSubmitFormFooter from "@/components/UserSubmitForm/UserSubmitFormFooter";

interface PageProps {
  params: {
    formId: string;
  };
}

const Page = ({ params }: PageProps) => {
  const formId = params.formId;

  return (
    <div className="bg-gray-200 min-h-screen w-full px-6">
      <div className="w-full max-w-2xl mx-auto pt-4">
        <UserSubmitForm formId={formId} />
        <UserSubmitFormFooter />
      </div>
    </div>
  );
};

export default Page;
