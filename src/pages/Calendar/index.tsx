import React, {FunctionComponent, useEffect, useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Math from '../../utils/Math';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import * as dateFns from 'date-fns';


const styles = (theme: Theme) => createStyles({
  appName: {
    textShadow: '1px 1px 1px #fff, 2px 2px 1px #fff',
    fontSize: '1.6rem',
    marginLeft: theme.spacing(1)
  },
  logo: {
    fontSize: '1.8em'
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '25px',
    width: '100%',
    height: '90%',
    marginTop: theme.spacing(11)
  },
  calendarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100px',
    width: '100%'
  },
  fabAdd: {
    position: 'absolute',
    bottom: '60px',
    right: '50px',
    color: '#FFF'
  }
});

type AppProps = WithStyles<typeof styles>

const Index: FunctionComponent<AppProps> = ({ classes }) => {
  const [ date, setDate ] = useState<Date>(new Date());
  const history = useHistory();
  console.log(Math.add(2, 2));

  const fetchData = async (): Promise<string> => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});

      }, 3000);
    });

    return (data as any).errors ?? "";
  }

  useEffect(() => {
    fetchData();
  }, []);
  /**
     * Returns the sum of two numbers.
     *
     * @remarks
     * This is our math utilities lib for shared projects.
     *
     * @param x - The first input number
     * @param y - The second input number
     * @returns The sum of `x` and `y`
     */
  // const a = [...undefined]
  // arrow functions to skip binding in constructor
  // wow I love this date library
  // const prevMonth = () => {
  // 	setDate(dateFns.subMonths( date, 1 ));
  // };
  //
  // const nextMonth = () => {
  // 	setDate(dateFns.addMonths( date, 1 ));
  // };
  //
  // const currentMonth = () => {
  //     setDate(new Date());
  // };

  const month = date.toLocaleString( 'en-us', { month: 'long' } );
  const year = dateFns.getYear( date );

  return (
    <div className={ classes.root }>
      <Paper className={ classes.calendar }>
        <AppBar>
          <Toolbar>
            {/* Ideally, official application logo belongs here*/}
            <CalendarTodayIcon />
            <Typography
              className={classes.appName}
              variant='h6'
            >
                            Book Reminder2
            </Typography>
          </Toolbar>
        </AppBar>
        <header className={ classes.calendarHeader }>
          <Button
            variant='outlined'
            color='secondary'
          >
                        Today
          </Button>
          <IconButton aria-label='Last Month' >
            <KeyboardArrowLeftIcon fontSize='large' />
          </IconButton>
          <Typography variant='h3'>
            { month } { year }
          </Typography>
          <IconButton aria-label='Next Month' >
            <KeyboardArrowRightIcon fontSize='large' />
          </IconButton>
        </header>

        <Fab
          aria-label='Add'
          className={classes.fabAdd}
          color='primary'
        >
          <AddIcon />
        </Fab>
        <Button
          onClick={() => history.push('/settings')}
        >
                    Go to settings
        </Button>
      </Paper>
    </div>
  );
};

export default withStyles( styles )( Index );
