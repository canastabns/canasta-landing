import styles from './body.module.scss';
import BodyCta from "./components/BodyCta";
import BodyDescriptionLeft from './components/BodyDescriptionLeft';
import BodyDescriptionCenter from './components/BodyDescriptionCenter';
import BodyDescriptionRight from './components/BodyDescriptionRight';
import BodyComputers from './components/BodyComputers';
import BodyFaqs from './components/BodyFaqs';
import BodyFindUs from './components/BodyFindus';
import BodyDescriptionCenterBox from './components/BodyDescriptionCenterBox';
import BodyDescriptionSocials from './components/BodyDescriptionSocials';

const Body = () => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.content}>
        <BodyCta />
      </div>


      <BodyComputers />

      <BodyDescriptionLeft />

      <BodyFindUs />

      <BodyDescriptionRight />

      <BodyDescriptionCenter />

      <BodyDescriptionCenterBox/>

      <BodyDescriptionSocials />

    </main>
  )
}

export default Body;