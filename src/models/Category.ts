import Question from "./Question";

interface Category {
  id: number;
  title: string;
  questions: Question[];
}
export default Category;