
import Login from "../../src/components/login/Login";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";

export default function LoginPage() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Login className={classNames(styles.login)}></Login>
        </Paper>
      </Container>
    </div>
    );
}
