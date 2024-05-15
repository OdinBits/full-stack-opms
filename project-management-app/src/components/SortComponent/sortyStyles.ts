

export const sortStyles = {
    sortIconButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 300,
        transform: 'translate(-50%, 0%)',
        width: '100%',
        bgcolor: 'white',
        boxShadow: '2px 3px 5px rgba(70, 130, 180, 0.2)',
        borderRadius: '8px',
        padding: '16px',
    },
    sortOptions: {
        margin: '32px 0',
        textAlign: 'left',
        marginLeft: '40px',
        lineHeight: '30px',
        paddingTop: '30px'
    },
    sortViewMessage: {
        textAlign: 'left',
        marginRight: '10px',
        paddingLeft: '20px',
        fontSize: '25px',
        fontWeight: 'bold',
        width: '300px',
        color: 'black'
    },
    sortIconCloseStyle: {
        position: 'absolute',
        top: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    sortDesktopContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    sortDesktopText:{
        color:'#96A1A9',
        fontSize:'16px' , 
        fontFamily:'Nunito Sans', 
        width:'65px',
        height:'100%',
        paddingTop:'15px',
    },
    sortDesktopSelect: {
        minWidth: 110,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none', 
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        color: '#3F3F3F',
        fontSize: '16px',
        fontWeight:'bold'
    }
}
