import FormDetailsNavbar from "@/components/FormDetails/Navbar/FormDetailsNavbar";

interface PageProps {
  params: {
    formId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const formId = await params.formId;
  return (
    <div className="bg-gray-200 w-full">
      <FormDetailsNavbar />
    </div>
  );
};

export default Page;
