import Category from "../models/Category";
import Form from "../models/Form";
import Group from "../models/Group";
import Question from "../models/Question";
import Rating from "../models/Rating";

export const ratingData: Rating[] = [
  {
    id: 1,
    text: "Rating 1",
    value: 1
  },
  {
    id: 2,
    text: "Rating 2",
    value: 2
  },
  {
    id: 3,
    text: "Rating 3",
    value: 3
  },
  {
    id: 4,
    text: "Rating 4",
    value: 4
  },
  {
    id: 5,
    text: "Rating 5",
    value: 5
  },
];

export const questionData: Question[] = [
  {
    id: 1,
    title: "Question 1",
    ratings: ratingData
  },
  {
    id: 2,
    title: "Question 2",
    ratings: ratingData
  },
];

export const categoryData: Category[] = [
  {
    id: 1,
    title: "Category 1",
    questions: questionData
  },
  {
    id: 2,
    title: "Category 2",
    questions: questionData
  },
  {
    id: 3,
    title: "Category 3",
    questions: questionData
  },
  {
    id: 4,
    title: "Category 4",
    questions: questionData
  },
];

export const groupData: Group[] = [
  {
    id: 1,
    title: "Group 1",
    categories: categoryData.slice(0, 2)
  },
  {
    id: 2,
    title: "Group 2",
    categories: categoryData.slice(2,4)
  },
];

export const formData: Form[] = [
  {
    id: 1,
    groups: groupData
  },
];