import Link from "next/link";
import css from "./TagsMenu.module.css";

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuItem}>
          <Link
            href={`url до сторінки за відповідним тегом`}
            className={css.menuLink}
          >
            Назва тегу
          </Link>
        </li>
      </ul>
    </div>
  );
}
