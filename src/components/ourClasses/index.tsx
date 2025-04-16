import { SelectedPage } from "../../shared/type";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { ClassType } from "../../shared/type";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, boost endurance, and sculpt your body with expert-led weight training sessions. Whether you're a beginner or a seasoned lifter, our classes help you lift smarter and train harder.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your balance, improve flexibility, and connect mind and body in our expertly guided yoga sessions. Whether you're seeking calm, strength, or a reset—there's a mat waiting for you.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core, tone your midsection, and boost overall stability with targeted ab workouts. These high-energy classes are designed to help you build a solid foundation—one rep at a time.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Step out of the ordinary and challenge yourself with our adventure-themed classes. Whether it's obstacle courses, climbing, or outdoor-inspired workouts, these classes bring excitement and adventure to your fitness routine.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Transform your body and mind with our wide range of fitness classes. From high-intensity intervals to endurance training, we've got something for every goal, level, and style. Get ready to push your limits and see real results.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unlock your full potential with our expertly designed training classes. Whether you're aiming for strength, flexibility, or endurance, our personalized coaching and supportive environment will guide you every step of the way.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              From strength training and cardio to yoga and dance, our classes
              are designed to challenge, inspire, and transform. No matter your
              fitness level, there’s a perfect fit waiting for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
