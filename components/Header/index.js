import { Container, Grid, Typography } from "@material-ui/core";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={6} sm={5}>
            <Typography variant="h3" className={styles.header__title}>
              Calcule o seu Imc
            </Typography>
            <Typography>
              O IMC é o indice de Massa Corporal e é utilizado para saber se o
              peso está de acordo com a altura.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5}>
            <img src="/medic.png" alt="Médico e paciente" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
