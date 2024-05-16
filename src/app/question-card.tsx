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

type QuestionCardProps = {
  question: any;
  index: number;
};

function QuestionCard({ question, index }: QuestionCardProps) {
  let answers = [...question.incorrectAnswers, question.correctAnswer];
  return (
    <>
      <div className='p-6'>
        <Card>
          <CardHeader>
            <CardTitle>{question.question.text}</CardTitle>
            <CardDescription>Question {index + 1}</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {answers.map((answer, i) => {
                return (
                  <div className="flex gap-4">
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
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default QuestionCard;
