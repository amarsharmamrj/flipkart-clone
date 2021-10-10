import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

import SearchBar from './SearchBar'

const useStyles = makeStyles({
    header: {
        backgroundColor: '#2874f0',
        height: '55px',
        paddingLeft: '138px',
        padding: '0px',
        justifyContent:'center'
    },
    logo: {
        maxHeight: '30px',
        width: '102px'
    }
})

const Header = () => {
    const classes = useStyles();
    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png'
    
    return (
            <AppBar className={classes.header} >
                <Toolbar>
                    <img src={logoUrl} className={classes.logo} alt='logo' />
                    <SearchBar />
                </Toolbar>
            </AppBar>
    )
}

export default Header;