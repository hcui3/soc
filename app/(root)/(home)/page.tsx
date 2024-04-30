import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";

const questions = [
  {
    _id: "1",
    title: "Integrating TypeScript with React for safer code?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "TypeScript" },
    ],
    author: {
      _id: "1",
      name: "Emily Rata",
      picture: "https://example.com/pic/emilyrata.jpg",
    },
    upvotes: 45,
    views: 230,
    answers: [
      {
        text: "Start by installing TypeScript and adjusting your config for React.",
        authorId: "2",
      },
    ],
    createdAt: new Date("2023-01-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to manage global state in React without Redux?",
    tags: [
      { _id: "3", name: "React" },
      { _id: "4", name: "State Management" },
    ],
    author: {
      _id: "2",
      name: "John Smith",
      picture: "https://example.com/pic/johnsmith.jpg",
    },
    upvotes: 30,
    views: 175,
    answers: [
      {
        text: "Consider using the Context API to provide and consume data where needed.",
        authorId: "3",
      },
    ],
    createdAt: new Date("2023-02-10T00:00:00.000Z"),
  },
  {
    _id: "3",
    title: "Best libraries for animations in React?",
    tags: [
      { _id: "5", name: "React" },
      { _id: "6", name: "Animations" },
    ],
    author: {
      _id: "3",
      name: "Alice Wonderland",
      picture: "https://example.com/pic/alicewonderland.jpg",
    },
    upvotes: 20,
    views: 100,
    answers: [
      {
        text: "Framer Motion and React Spring are both excellent choices for complex animations.",
        authorId: "4",
      },
    ],
    createdAt: new Date("2023-03-15T00:00:00.000Z"),
  },
  {
    _id: "4",
    title: "How do hooks improve React development?",
    tags: [
      { _id: "7", name: "React" },
      { _id: "8", name: "Hooks" },
    ],
    author: {
      _id: "4",
      name: "Bob Lee",
      picture: "https://example.com/pic/boblee.jpg",
    },
    upvotes: 55,
    views: 220,
    answers: [
      {
        text: "Hooks simplify component logic and make sharing stateful logic easier.",
        authorId: "5",
      },
    ],
    createdAt: new Date("2023-04-05T00:00:00.000Z"),
  },
  {
    _id: "5",
    title: "Using Redux with React Hooks: Best Practices?",
    tags: [
      { _id: "9", name: "React" },
      { _id: "10", name: "Redux" },
    ],
    author: {
      _id: "5",
      name: "Clara Oswald",
      picture: "https://example.com/pic/claraoswald.jpg",
    },
    upvotes: 40,
    views: 195,
    answers: [
      {
        text: "Use useSelector to read from the state and useDispatch to dispatch actions.",
        authorId: "6",
      },
    ],
    createdAt: new Date("2023-04-30T00:00:00.000Z"),
  },
  {
    _id: "6",
    title: "React performance optimization techniques?",
    tags: [
      { _id: "11", name: "React" },
      { _id: "12", name: "Performance" },
    ],
    author: {
      _id: "6",
      name: "Dave Marten",
      picture: "https://example.com/pic/davemarten.jpg",
    },
    upvotes: 50,
    views: 250,
    answers: [
      {
        text: "Memoization and lazy loading components are effective for enhancing performance.",
        authorId: "7",
      },
    ],
    createdAt: new Date("2023-05-20T00:00:00.000Z"),
  },
  {
    _id: "7",
    title: "Context API vs. Redux: What to choose for your next React project?",
    tags: [
      { _id: "13", name: "React" },
      { _id: "14", name: "Context API" },
      { _id: "15", name: "Redux" },
    ],
    author: {
      _id: "7",
      name: "Eva Turner",
      picture: "https://example.com/pic/evaturner.jpg",
    },
    upvotes: 35,
    views: 180,
    answers: [
      {
        text: "Context API is great for smaller applications or when you want simpler state management.",
        authorId: "8",
      },
      {
        text: "For larger, more complex applications, Redux provides more robust management tools.",
        authorId: "9",
      },
    ],
    createdAt: new Date("2023-06-10T00:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
