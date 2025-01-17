import styles from "./DriftPage.module.scss";

export const DriftPage = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Дрифт-такси</h1>
      <p className={styles.paragraph}>
        Только ​на Сочи Автодроме вас ждет уникальная возможность промчаться по
        трассе Формулы 1 на максимально возможной скорости в управляемом заносе
        на легендарной «королеве дрифта» Nissan Silvia!
      </p>
      <p className={styles.paragraph}>
        Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального кубка по
        дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и испытайте на
        себе, что значат скоростные постановки и эффектные заносы!
      </p>
    </article>
  );
};
