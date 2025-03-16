import Rating from "./Rating";

interface Question {
  id: number;
  title: string;
  ratings: Rating[];
}
export default Question;