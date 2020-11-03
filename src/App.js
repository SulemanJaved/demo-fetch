import './App.css';
import { AppBar, Button, Grid, Icon, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      flexGrow: 1,
  },
  testButton: {
    backgroundColor: "red",
  }
}));



function App() {
  const classes =  useStyles();

  return (
    <div> 
      Hello World
      <Button variant="contained" color="secondary">Hello Button</Button>
      <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Hello  World 1
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"red"}}>
          Hello  World 2
        </Grid>
        <Grid item xs={8} style={{backgroundColor:"green"}}>h
          Hello  World 3
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"Blue"}}>
          Hello  World 4
        </Grid>
        <Grid item xs={2}>
          Hello  World 5  
        </Grid>
      </Grid>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" className={classes.testButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
      </div>
    </div>
  );
}

export default App;