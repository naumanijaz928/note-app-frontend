import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/notes_api";

interface SignUpModalProps {
  onDismiss: () => void;
  onSignUpSuccessful: (user: User) => void;
}

const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCredentials>();
  async function onSubmit(credentials: SignUpCredentials) {
    try {
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }
  return <div>SignUpModal</div>;
};

export default SignUpModal;
