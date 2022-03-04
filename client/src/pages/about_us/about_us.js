import styles from "./about_us.module.scss";
import Container from "../../components/container/container";
import Pizza from "../../images/pizza.jpg";
import About from "../../images/about.jpg";

const AboutUs = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.mainTitle}>About Us</h3>

      <Container className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at,
          commodi consequuntur cumque deleniti dignissimos earum error, impedit
          ipsa laborum minima molestias odio quisquam sit tempore? Eum quae
          repudiandae voluptates.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ad at, commodi consequuntur cumque deleniti
          dignissimos earum error, impedit ipsa laborum minima molestias odio
          quisquam sit tempore? Eum quae repudiandae voluptates.Lo rem ipsum
          dolor sit amet, consectetur adipisicing elit. Ad at, commodi
          consequuntur cumque deleniti dignissimos earum error, impedit ipsa
          laborum minima molestias odio quisquam sit tempore? Eum quae
          repudiandae voluptates.
        </p>

        <div className={styles.images}>
          <img className={styles.image} src={Pizza} alt="" />
          <img className={styles.aboutImage} src={About} alt="" />
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at,
          commodi consequuntur cumque deleniti dignissimos earum error, impedit
          ipsa laborum minima molestias odio quisquam sit tempore? Eum quae
          repudiandae voluptates.
        </p>
      </Container>
    </div>
  );
};
export default AboutUs;
