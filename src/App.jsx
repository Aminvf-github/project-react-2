import Button from "./Components/common/button/Button";

export const App =()=>{
  return(
    <>
    <Button variant="primary"  buttonType={"outline"}>primary</Button>
    <Button variant="warning" disabled={true}>warning</Button>
    <Button variant="error">error</Button>
    <Button variant="success">success</Button>
    </>
  )
}