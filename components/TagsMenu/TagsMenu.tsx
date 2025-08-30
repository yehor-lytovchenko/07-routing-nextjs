import css from "./TagsMenu.module.css";
import Link from "next/link";

export default function TagsMenu() {
  const tagsList = [
    "All notes",
    "Todo",
    "Work",
    "Meeting",
    "Personal",
    "Shopping",
  ];

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {tagsList.map((tag) => {
          return (
            <li className={css.menuItem} key={tag}>
              <Link className={css.menuLink} href={`/notes/filter/${tag}`}>
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
