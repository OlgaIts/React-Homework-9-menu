import {NavLink} from "react-router-dom";
import styles from "./Menu.module.scss";

export const Menu = () => {
  const navItems = [
    {label: "Главная", link: "/"},
    {label: "Дрифт-такси", link: "/drift"},
    {label: "Time Attack", link: "/timeattack"},
    {label: "Forza Karting", link: "/forza"},
  ];

  return (
    <nav className={styles.menu}>
      {navItems.map(({label, link}) => (
        <NavLink
          key={label}
          to={link}
          className={({isActive}: {isActive: boolean}) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
