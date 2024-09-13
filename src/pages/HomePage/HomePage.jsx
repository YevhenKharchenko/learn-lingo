import { useNavigate } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import mac2x from '../../assets/images/mac.png';
import mac from '../../assets/images/mac.png';
import s from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <DocumentTitle>Learn Lingo</DocumentTitle>
      <Container>
        <section className={s.hero}>
          <div className={s.heroWrapper}>
            <h1 className={s.title}>
              Unlock your potential with the best <span className={s.langSpan}>language</span>{' '}
              tutors
            </h1>
            <p className={s.text}>
              Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your
              language proficiency to new heights by connecting with highly qualified and
              experienced tutors.
            </p>
            <Button
              title="Get started"
              className={s.startBtn}
              onClick={() => navigate('/teachers')}
            />
          </div>
          <div>
            <picture>
              <source srcSet={`${mac} 1x, ${mac2x} 2x`} />
              <img className="nav-img" src={mac} alt="Girl with laptop" width="568" height="530" />
            </picture>
          </div>
        </section>
        <section className={s.advantages}>
          <ul className={s.advantagesList}>
            <li className={s.advItem}>
              <p className={s.count}>32,000 +</p>
              <span className={s.span}>
                Experienced
                <br /> tutors
              </span>
            </li>
            <li className={s.advItem}>
              <p className={s.count}>300,000 +</p>
              <span className={s.span}>
                5-star tutor
                <br /> reviews
              </span>
            </li>
            <li className={s.advItem}>
              <p className={s.count}>120 +</p>
              <span className={s.span}>
                Subjects
                <br /> taught
              </span>
            </li>
            <li className={s.advItem}>
              <p className={s.count}>200 +</p>
              <span className={s.span}>
                Tutor
                <br /> nationalities
              </span>
            </li>
          </ul>
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
