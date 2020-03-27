import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../styles/js/global/colors';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.bgColor,
    boxSizing: 'border-box',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    padding: 15,
    borderLeft: `1px solid ${colors.altFontColor}`,
  },
}));
export default useStyles;
