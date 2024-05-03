import { useSelector } from "react-redux";
import { motion } from "framer-motion";



export const Home = () => {


  const user_name = useSelector((state: any) => state.user.value.username);
  const user_pass = useSelector((state: any) => state.user.value.password);

  return (
    <div className="flex flex-col items-center justify-center bg-pink-200">
      <motion.h1
      animate={{ fontSize: 50, color: '#ff2994', scale: 1.5}}
      transition={{ duration: 0.5}}
      >Welcome, {user_name} and {user_pass}👍!</motion.h1>
      <a href={"../Assets/resume/1.pdf"} download="../Assets/resume/1.pdf">
      <motion.button
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5}}
      >
        Dwonload CV
      </motion.button>
      </a>
    </div>
  );
}

