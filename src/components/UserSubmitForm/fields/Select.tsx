import useSubmitFormStore from '@/store/useSubmitFormStore';
import React from 'react'

const Select = ({
  question,
  getInputClasses,
  index,
}: {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    required: boolean;
    options: string[];
  };
  getInputClasses: (index: number) => string;
  index: number;
}) => {
  const { form, handleStringsInputChange } = useSubmitFormStore();
  return (
    <div>
      
    </div>
  )
}

export default Select
