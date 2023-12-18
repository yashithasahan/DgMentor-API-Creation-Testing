import Banner from "./Banner";
import imageComputer from "../../../assets/Images/imageComputer.png";
import imageSearch from "../../../assets/Images/imageSearch.png";
import APITestinHome from "../APITesting/APITestinHome";

const posts = [
  {
    id: 1,
    title: "Training Audit and Impact Evaluation",
    info: "DgMentor provides the functionality to assess participants before the training and it evaluates the impact after the training completion.",
    image: imageComputer,
  },
  {
    id: 2,
    title: "Digital Learning Platform",
    info: "DgMentor allows you to provide training 100% digitally, it includes all types of training contents (such as Texts, Audio, Video, PowerPoint Presentations, Word Documents). It works on all devices – Mobile (Android/Ios), Tablet, Laptop, Desktop. DgMentor has both mobile and web interfaces.",
    image: imageSearch,
  },
];

const Home = () => {
  return (
    <div>
      <Banner />
      <APITestinHome />
      {/* {posts.map((post) => (
        <NewsBox post={post} key={post.id} />
      ))} */}
    </div>
  );
};

export default Home;
