import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const UserList = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <ul className={styles.user_list}>
      {users.map((user, index) => (
        <li key={index} className={styles.user_list_item}>
          <strong>{user.name}</strong> : {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
