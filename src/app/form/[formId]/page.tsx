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
    <div className="bg-gray-200 min-h-screen w-full">
      <div className="w-full max-w-2xl mx-auto pt-4">
        <UserSubmitForm formId={formId} />
        <UserSubmitFormFooter />
      </div>
    </div>
  );
};

export default Page;
