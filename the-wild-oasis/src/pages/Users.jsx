import Heading from "../ui/Heading";
import SigupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SigupForm />
    </>
  );
}

export default NewUsers;
