"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormEvent, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

type QuestionCardProps = {
  question: any;
};

function QuestionCard({ question }: QuestionCardProps) {
  let answers = [...question.incorrectAnswers, question.correctAnswer];
  const [selectedValue, setSelectedValue] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = (newValue: string) => {
    setSelectedValue(newValue as unknown as SetStateAction<undefined>);
    if (newValue === question.correctAnswer) {
      toast.success("Correct!");
      setIsCorrect(true);
    } else {
      toast.error("Incorrect!");
      setIsCorrect(false);
    }
  };
  let router = useRouter();
  return (
    <>
      <div className='p-6'>
        <Card className='w-full flex flex-col'>
          <CardHeader>
            <CardTitle>{question.question.text}</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col w-full'>
            <RadioGroup value={selectedValue} onValueChange={handleChange}>
              {answers.map((answer, i) => {
                return (
                  <div className='flex gap-4'>
                    <RadioGroupItem
                      id={`${i}${answer}`}
                      key={i}
                      value={answer}
                    />
                    <Label htmlFor={`${i}${answer}`}>{answer}</Label>
                  </div>
                );
              })}
            </RadioGroup>
            <Button
              className='self-end hover:gap-4 transition-all duration-300 gap-2'
              onClick={(e: FormEvent) => {
                router.refresh();
              }}
              disabled={!isCorrect}
            >
              Next Question
              <ArrowRightIcon />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default QuestionCard;
