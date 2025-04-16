import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "../../shared/type";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { BenefitType } from "../../shared/type";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Train in an environment built for excellence. From cutting-edge equipment to sleek, modern studios, every detail is designed to elevate your fitness journey.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "From high-intensity workouts to mind-body balance, explore a wide range of classes tailored to every fitness level and goal. There’s something for everyone—find your perfect fit.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Train with the best. Our certified professionals bring experience, motivation, and personalized guidance to help you crush your goals and unlock your full potential.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Beneefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm ">
            We&#39;re a community, a lifestyle, and a space where transformation
            happens. With expert-led training, state-of-the-art equipment, and
            unmatched energy, we&#39;re here to help you push past limits and
            achieve your best self.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitPageGraphic}
            alt="benefit-page-graphic"
            className="mx-auto "
          />

          {/* desc */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] abstract">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Join a thriving global community that&#39;s transforming lives
                every day. From first-timers to fitness pros, our members are
                achieving real results—and loving every step of the journey.
              </p>
              <p className="mb-5">
                With expert support, cutting-edge programs, and a motivating
                atmosphere, your goals are within reach. Be part of the
                movement. Be part of the success.
              </p>
            </motion.div>

            {/* btn */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Beneefits;
