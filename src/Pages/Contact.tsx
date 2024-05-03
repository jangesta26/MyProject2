import { Accordion } from "../Components/Accordion";

export const Contact = () => {

  return (
    <div className="flex items-center justify-center">
    <div className='sm:w-[50%] mt-10 p-4 bg-gray-200 rounded-lg flex flex-col py-10'>
      <Accordion 
      title='Do you prefer iOS or Android' 
      answer='I like to use Android'/>

      <Accordion 
      title='Do you prefer writing CSS or Tailwindcss' 
      answer='I like to use Tailwind'/>

      <Accordion 
      title='Firebase or Supabase' 
      answer='I like to use Firebase'/>
    </div>
    </div>
  );
}
