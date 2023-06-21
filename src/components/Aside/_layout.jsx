import styles from "./aside.module.css";
import "../../app/globals.css";
import "material-icons/iconfont/material-icons.css";

const Aside = () => {
  const {
    aside,
    logo,
    title,
    nav_items,
    nav_item,
    active_nav,
    add_board,
    toggler,
    theme,
    toggle_aside,
    action_btns,
  } = styles;
  return (
    <div className={aside}>
      <nav>
        <h1 className={logo}>Kanban</h1>
        <p className={title}>
          All Boards <span>(8)</span>
        </p>
        <ul className={nav_items}>
          <li className={`${active_nav} ${nav_item}`}>
            <span className="material-icons">description</span>Platform Launch
          </li>
          <li className={nav_item}>
            <span className="material-icons">description</span>Marketing Plan
          </li>
          <li className={nav_item}>
            <span className="material-icons">description</span>Roadmap
          </li>
        </ul>
        <button className={add_board}>
          <span className="material-icons">add_box</span>create new board
        </button>
      </nav>

      <div className={action_btns}>
        <div className={theme}>
          <span className="material-icons">light_mode</span>
          <div className={toggler}>
            <span className="dot"></span>
          </div>
          <span className="material-icons">dark_mode</span>
        </div>
        <div className={toggle_aside}>
          <span className="material-icons">visibility_off</span>
          Hide Sidebar
        </div>
      </div>
    </div>
  );
};

export default Aside;
