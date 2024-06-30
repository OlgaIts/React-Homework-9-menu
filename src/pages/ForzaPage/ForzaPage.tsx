import styles from "./ForzaPage.module.scss";

export const ForzaPage = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Forza Karting Sochi</h1>
      <p className={styles.paragraph}>
        В Олимпийском парке работает новый открытый развлекательный картинг
        центр мирового уровня!
      </p>
      <p className={styles.paragraph}>
        Вас ждут большая, широкая, безопасная трасса и супер современные карты
        европейского производства c двигателями мощностью 13 л.с. Трасса длинной
        более 500 метров оборудована системой хронометража, фиксирующей данные
        заезда в режиме реального времени. По окончании заезда каждый пилот
        получает распечатку со своими результатами.
      </p>
    </article>
  );
};
