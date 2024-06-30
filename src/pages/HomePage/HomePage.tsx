import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Гоночн​ое такси</h1>
      <p className={styles.paragraph}>
        Гоночн​ое такси – отличная возможность насладиться скоростью и
        мастерством гонщика, сидя на месте штурмана, и стать свидетелем
        настоящего мастерства профессиональных инструкторов Сочи Автодрома, в
        полной мере ощутив крутые виражи на самой современной гоночной трассе
        России.
      </p>
    </article>
  );
};
