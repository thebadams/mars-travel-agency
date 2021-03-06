import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { getMarsPhotos } from '../../utils/API';
import { useEffect, useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({

  root: {
      maxWidth: 400,
    flexGrow: 1,
    marginRight: '10%',
    marginTop: '5%',
    fontFamily: 'Roboto-Regular, HelveticaNeue, Arial, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 320,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },

  pictureNav: {
    opacity: '0.35',
    height: 50,
  },

  arrow:{
    marginBottom: 20,
    fontSize: 40,
  }


}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [photoState, setPhotoState ] = useState([]);
  useEffect(() => {
   getMarsPhotos()
   .then(data => {
       setPhotoState(data.data.photos)
     console.log(data.data.photos)
   })
  }, [])

  const maxSteps = photoState.length;
 

  // return (
  //   <div>
  //     {photoState.map(element => <img src={element.img_src}></img>)}
  //   </div>
  
  // )
 
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {photoState.map((step, index) => (
        
         
          <div key={step.camera.ful_name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.img_src} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      className={classes.pictureNav} 
        steps={maxSteps}
        position="static"
        variant="none"
        activeStep={activeStep}
        nextButton={
          <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft className={classes.arrow} /> : <KeyboardArrowRight className={classes.arrow} />}
          </Button>
        }
        backButton={
          <Button  onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight className={classes.arrow} /> : <KeyboardArrowLeft className={classes.arrow} />}
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
