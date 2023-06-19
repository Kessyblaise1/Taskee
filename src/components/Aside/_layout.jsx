import styles from './aside.module.css'
import '../../app/globals.css'

const Aside = () => {
  const {aside, logo, title, nav_items, nav_item, add_board} = styles
  return (
    <div className={aside}>
      <nav>
        <h1 className={logo}>Kanban</h1>
        <p className={title}>All Boards <span>(8)</span></p>
        <ul className={nav_items}>
          <li className={nav_item}>Platform Launch</li>
          <li className={nav_item}>Marketing Plan</li>
          <li className={nav_item}>Roadmap</li>
        </ul>
        <button className="add_board">+create new board</button>
      </nav>

      <div className="action_buttons">
        <div className="theme"></div>
        <div className="toggle_aside">
          Hide Sidebar
        </div>
      </div>
    </div>
  );
};

export default Aside;
