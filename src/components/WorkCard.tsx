import { FC } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  repoLink: string;
  index: number;
}

const WorkCard: FC<Props> = ({
  title,
  techTitle,
  description,
  repoLink,
  index,
}: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: isTabletOrMobile
          ? { x: index % 2 === 0 ? -30 : 30, opacity: 0 }
          : { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      }}
      transition={{
        duration: 0.8,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      viewport={{ once: true }}

    >
      <p >
        {techTitle}
      </p>
      <p >{title}</p>
      <p >{description}</p>
      <div >
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 255, 0.15), rgba(196,80,196, 0.15))",
          }}
        >
          Repository
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;
