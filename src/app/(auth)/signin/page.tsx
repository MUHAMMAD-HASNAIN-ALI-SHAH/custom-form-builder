import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import { GithubSignIn } from "@/components/auth/GithubSignIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="w-full max-w-sm mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Signin to continue
          </h1>

          <GoogleSignIn />
          <GithubSignIn />

          <div className="text-center">
            <Button asChild variant="link">
              <Link href="/signup">Don&apos;t have an account? Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
