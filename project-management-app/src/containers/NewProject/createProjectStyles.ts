
export const createProjectStyles = {
    defaultSaveButton : {
        display: { 
            xs: 'none', 
            sm: 'none', 
            md: 'block', 
            lg: 'block', 
            xl: 'block' },
    height:' 36px',
    width: '153px',
    cursor: 'pointer',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: 500,
    },
    mobileViewSaveButton : {
        display: { 
            xs: 'block', 
            sm: 'block', 
            md: 'none', 
            lg: 'none', 
            xl: 'none' },
    height:' 36px',
    width:{
        xs:'290px',
        sm:'250px',
        md:'200px',
        lg:'200px',
        xl:'200px'
    },
    borderRadius: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontFamily: 'Nunito Sans',
    fontSize: '16px',
    fontWeight: 500,
    '&:hover': 
    {
    backgroundColor: 'darkblue',
    },
    },
    formStyles : {
    width: '98%', 
    margin: 'auto', 
    height:{
        md:'560px',
        lg:'600px',
        xl:'600px'
    }
    },
    mainGridContainer : {
    borderRadius:'10px', 
    width: '100%', 
    padding:{xl:'25px',lg:'25px',md:'10px',sm:'5px',xs:'5px'},
    background: 'white',
    marginBottom:'55px',
    boxShadow:'0 7px 18px 0 rgba(2,118,179,0.13)',
    },
    textAreaContainer : {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    innerTextAreaContainer : {
        margin: '5px', 

    width: 
    { 
        xs: '100%', 
        sm: '100%', 
        lg: '40%', 
        xl: '50%', 
        md: '40%' 
    },
    
    },
    textArea : {
    height: '10vh', 
    width: '90%', 
    margin: '4px', 
    padding: '10px', 
    fontFamily: 'Nunito Sans', 
    fontSize: '16px', 
    borderRadius: '10px'
    },
    dropDownAndDateContainer : {
        direction: 'row',
        padding:{xl:'10px',lg:'10px',md:'10px',sm:'5px',xs:'5px'},
    width:
        { 
            lg: '100%', 
            xl: '85%', 
            md: '100%' 
        }
    },
    dropDownAndDateOutliner : {
        width: 
    { 
        xs: '100%', 
        sm: '100%', 
        lg: '330px', 
        xl: '390px', 
        md: '240px' 
    }, 
    margin: '5px'
    },
    registerIndicatorContainer :{
        margin: '8px', 
        position: 'relative', 
    },
    registerInnerContainer : {
    display: 'flex', 
    alignItems: 'center', 
    // float:{
    //     md:'right',
    //     lg:'right',
    //     xl:'right'
    // },
    // paddingRight: {
    //     md:'110px',
    //     lg:'320px',
    //     xl:'320px'
    // }, 
    borderRadius: '8px',
    marginTop:'20px'
    },
    registerStatus : {
        margin: '0', 
    marginRight: '10px', 
    color: ' #3F3F3F',
    fontFamily:'Nunito Sans',
    fontSize:'17px',
    alignText:'right',
    },
    registerValue : {
        margin: '0',  
    color: '#3F3F3F',
    fontWeight:'bold',
    fontFamily:'Nunito Sans',
    fontSize: '20px',
    },
    selectPlaceHolder : {
        color:' #3F3F3F',
    fontFamily:'Nunito Sans',
    fontSize:'17px',
    },
    inputTitles : {
        color:'#767676',
    fontFamily:'Nunito Sans',
    fontSize:'18'
    },
    mobileViewButtonContainer : {
    paddingTop:'10px',
    paddingBottom:'20px', 
    display:'flex', 
    justifyContent:'center' 
    },
    inputGrid : {
        margin:'2px',

    },
    alertStyle : {
        width :'20%' , 
        textAlign:'center' , 
        fontSize:'25px'
    }
}
