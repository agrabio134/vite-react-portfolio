import image from '../extras/aboutme-img.png';

const AboutPage = () => {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="about-item-container">
          <div className="about-item">
            <img className="about-img" src={image} alt="image" />
          </div>
          <div className="about-item">
            <h1>Lorem ipsum dolor sit amet cptatum? </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel,
              repellat at voluptatibus placeat deleniti natus, fuga to tam harum
              nemo ducimus, architecto sequi enim blanditiis ullam dolor voluptatum
              repellendus ea?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel,
              repellat at voluptatibus placeat deleniti natus, fuga to tam harum
              nemo ducimus, architecto sequi enim blanditiis ullam dolor voluptatum
              repellendus ea?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
