import FormHeader from "./FormHeader";
import AddFormNavbar from "./AddFormNavbar";
import AddQuestion from "./AddQuestion";
import QuestionsBox from "./Questions/QuestionsBox";
import AddFormWrapper from "./AddFormWrapper";

export default function AddForm() {
  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-10">
      <AddFormNavbar />

      <div className="mt-5">
        <AddFormWrapper />

        <FormHeader />

        <QuestionsBox />

        <AddQuestion />
      </div>
    </div>
  );
}
