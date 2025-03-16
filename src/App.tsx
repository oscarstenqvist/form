import { formData } from "./data/Formdata"
import FormView from "./FormView"

function App() {
  return (
    <FormView form={formData[0]} />
  )
}
export default App