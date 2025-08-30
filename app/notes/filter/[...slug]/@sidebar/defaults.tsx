import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function SidebarNotes() {
  const tagsList = [
    "All notes",
    "Todo",
    "Work",
    "Meeting",
    "Personal",
    "Shopping",
  ];

  return (
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
  );
}
