import OnBoardSvgFour from "@/assets/images/icons/OnboardSvgFour";
import OnBoardSvgOne from "@/assets/images/icons/OnboardSvgOne";
import OnBoardSvgThree from "@/assets/images/icons/OnboardSvgThree";
import OnBoardSvgTwo from "@/assets/images/icons/OnboardSvgTwo";

export const OnBoardScreens = [
  {
    id: 1,
    title: "Search your job",
    description:
      "Figure out your top five priorities whether it is company culture, salary.",
    image: <OnBoardSvgOne style={{ marginTop: -40 }} />,
  },
  {
    id: 2,
    title: "Browse jobs list",
    description:
      "Our job list include several  industries, so you can find the best job for you.",
    image: <OnBoardSvgTwo style={{ marginTop: -100 }} />,
  },
  {
    id: 3,
    title: "Apply to best jobs",
    description:
      "You can apply to your desirable jobs very quickly and easily with ease.",
    image: <OnBoardSvgThree style={{ marginTop: -70 }} />,
  },
  {
    id: 4,
    title: "Make your dream career with job",
    description:
      "We help you find your dream job according to your skillset to build your career.",
    image: <OnBoardSvgFour style={{ marginTop: -40 }} />,
  },
];
