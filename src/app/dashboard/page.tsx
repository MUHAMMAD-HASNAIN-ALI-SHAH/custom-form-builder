import CreateFormButton from "@/components/Dashboard/CreateFormButton/CreateFormButton";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar/DashboardNavbar";
import MyForms from "@/components/MyForms/MyForms";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <>
      <DashboardNavbar />
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto pt-16 pb-8">
          <CreateFormButton session={session} />
          <MyForms />
        </div>
      </div>
    </>
  );
}
