import SearchIcon from '@mui/icons-material/Search';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'white',
    border: '2px solid white',
    marginRight: theme.spacing(2), 
    marginLeft: 0,
    maxHeight:'32px',
    justifyContent: 'center',
    width: '47% !important',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1.5),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%', 
    position: 'absolute',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    top:'5px',
    right: '0px'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      width: '100% !important',
      color: 'black',
      fontSize: '14px',
      padding: '5px 10px'
    },
  }));

const SearchBar = () => {

    return (  
        <Search>
            <StyledInputBase
              placeholder="Search for product, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth='true'
            />
            <SearchIconWrapper>
              <SearchIcon color="primary"/> 
            </SearchIconWrapper>
          </Search>
    )
}

export default SearchBar;