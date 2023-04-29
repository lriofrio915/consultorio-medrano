import cn from "classnames";
import Icon from "../Icon";
import styles from "./author.module.css";

const Author = () => {
  return (
    <a href="https://web.whatsapp.com/send?phone=593982678350" target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <Icon
          className={styles.icon}
          name="tag"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <p className={cn("caption-2-bold", styles.title)}>WhatsApp</p>
      </div>
    </a>
  );
};

export default Author;
