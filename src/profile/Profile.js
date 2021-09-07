import React from 'react'
import PropTypes from "prop-types";
import TheMe from './cv.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    myprofile: {
    display: 'flex',
    justifyContent: "center",
    height:"350px",
    

  },
  imname: {
    width: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"space-around",
      alignItems :'center',
      backgroundColor: "#66ff33",
      
      
      
      
  },
  myimage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',

  },
  Bio: {
    width:"450px",
    backgroundColor:"white",
  },
  Profession:{
      width:"300px",
      backgroundColor:"#66ff33",
  }
}))
  


const Profile = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.myprofile}>
            <div  className={classes.imname}>
            
            <div style={{color:"white"}}>
               
               {props.hundleName(`${props.fullname}`)}
                <h2>{props.fullname}</h2>
                
     
            </div>
            <img src={TheMe} alt='my photo' className={classes.myimage}/>
            <button>Follow me</button>
            </div>
            
            
            
            <div className={classes.Bio}>
                <h3>{props.head}</h3>
                <p>{props.bio}</p>
            </div>
            
            <div className={classes.Profession}>
            <h3>{props.headpro}</h3>
                {props.profession}
            </div>
            
            <br/>
            {props.children}
            <br/>
            
        </div>
    )
}

Profile.defaultProps = {
    fullname: "Tajouri Nawel",
}

Profile.propTypes ={
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired
};


export default Profile