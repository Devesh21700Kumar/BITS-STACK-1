import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../constant-style.scss'

const useStyles = makeStyles({
    body: {
      height: '30vh',
      marginBottom: '1.5rem',
    },
    container: {
      margin: '1.5rem',
      display: 'flex',
      height: '95%',
    },    
    postQuestionContainer: {
        margin: '1.5rem',
        maxHeight: '100%',
        backgroundColor: styles.primaryColor,
        flexGrow: 50,
        maxWidth: '90%',
        '@media(max-width: 950px)': {
          maxWidth: '100%',
        },
      },
    titleContainer: {
      backgroundColor: styles.secondaryColor,
      padding: '1rem',
      paddingLeft: '1.5rem',
    },
    bigTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    smallTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    text: {
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: '1rem',
    },
    block: {
      padding: '2rem',
      paddingLeft: '1.5rem',
      maxHeight: '100%',
    },
  });

export default useStyles;