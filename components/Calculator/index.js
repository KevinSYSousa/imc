import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import styles from "./Calculator.module.scss";

function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState();

  const calculateImc = () => {
    const heightMeters = height / 100;
    setImc((weight / (heightMeters * heightMeters)).toFixed(2));
  };

  const verifyImc = () => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 28.4) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau 1";
    if (imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  return (
    <div className={styles.calculator}>
      <Container maxWidth="xs">
        <Typography variant="h3">Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Height (cm)"
              variant="filled"
              fullWidth
              type="number"
              value={height}
              onChange={({ target }) => setHeight(target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Weight (Kg)"
              variant="filled"
              fullWidth
              type="number"
              value={weight}
              onChange={({ target }) => setWeight(target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => calculateImc()}
            >
              Calculate
            </Button>
          </Grid>
          {imc && (
            <Grid item>
              <Typography>
                O seu IMC é: {imc} kg/m2 - {verifyImc()}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Calculator;
