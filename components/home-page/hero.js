import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/jake.jpeg'
          alt='An image showing Jake'
          width={300}
          height={300}
        />
      </div>
      <h1>{`Hi, I'm Jake`}</h1>
      <p>
        I blog about web development. Expecially frontend frameworks like React.
      </p>
    </section>
  );
};

export default Hero;
