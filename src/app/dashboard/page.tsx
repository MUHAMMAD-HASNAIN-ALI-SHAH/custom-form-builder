import MyForms from "@/components/Dashboard/MyForms/MyForms";
import StarterForm from "@/components/Dashboard/StarterForm/StarterForm";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
    const session = await auth();
  return (
    <div className="w-full flex flex-col">
      <StarterForm session={session} />
      <MyForms />
    </div>
  );
}
