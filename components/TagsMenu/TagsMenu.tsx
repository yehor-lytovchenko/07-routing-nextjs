import SidebarNotes from "@/app/notes/filter/[...slug]/@sidebar/defaults";
import css from "./TagsMenu.module.css";

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <SidebarNotes />
    </div>
  );
}
