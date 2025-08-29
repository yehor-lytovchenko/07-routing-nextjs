import Link from "next/link";
import css from "./TagsMenu.module.css";

export default function TagsMenu() {
  const tagsList = [
    "All notes",
    "Todo",
    "Work",
    "Meeting",
    "Personal",
    "Shoping",
  ];

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {tagsList.map((tag) => {
          return (
            <li className={css.menuItem} key={tag}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
