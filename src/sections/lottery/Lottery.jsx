import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { CheckCircleOutlined  } from '@ant-design/icons';
import { CreateEventStep } from './lottery-steps/CreateEventStep';

export const Lottery = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const steps = [
        'Evento/Sorteo', 
        'Lotería', 
        'Valor',
        'Imágen', 
      ];

    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 10,
          left: 'calc(-50% + 16px)',
          right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EA8082',
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#EA8082',
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#002B5A',
          borderTopWidth: 5,
          borderRadius: 1,
        },
      }));
    

      const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#002B5A',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        border: '1px solid #002B5A',
        borderRadius: '20px',
        padding: '5px',
        ...(ownerState.active && {
          color: '#EA8082',
          border: '1px solid #EA8082',
        }),
        ...(ownerState.completed && { 
          border: 'none', 
        }),
        '& .QontoStepIcon-completedIcon': {
          color: 'white',
          zIndex: 1,
          fontSize: 18,
          backgroundColor: '#EA8082',
          borderRadius: '20px',
        },
        '& .QontoStepIcon-circle': {
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: 'currentColor',
        },
      }));

      function QontoStepIcon(props) {
        const { active, completed, className } = props;
      
        return (
          <QontoStepIconRoot ownerState={{ active }} className={`${className} ${completed ? 'border-0' : ''}`} >
            {completed ? (
              <CheckCircleOutlined className="QontoStepIcon-completedIcon border-0" />
            ) : (
              <div className="QontoStepIcon-circle" />
            )}
          </QontoStepIconRoot>
        );
      }

      QontoStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
      };

      const totalSteps = () => {
        return steps.length;
      };
    
      const completedSteps = () => {
        return Object.keys(completed).length;
      };
    
      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };
    
      const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
      };
    
      const handleNext = () => {
        const newActiveStep =
          isLastStep() && !allStepsCompleted()
            ? steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        window.scrollTo(0,0);
        setActiveStep(newActiveStep);
      };

    const handleStep = (step) => () => {
    window.scrollTo(0,0);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
          return <CreateEventStep handleComplete={handleComplete} />
        case 1:
          return <> Hola 2 </> 
        case 2:
          return <> Hola 3 </> 
        case 3:
          return <> Hola 4 </> 
      }
  };

  return (
    <>
      <div className="container pt-5 text-vitxo bg-grey-medium my-5 rounded-4">
        <div className="col-12 col-md-8 mx-auto">
          <Stepper alternativeLabel activeStep={activeStep} className='text-vitxo'  connector={<QontoConnector />}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepLabel StepIconComponent={QontoStepIcon} onClick={handleStep(index)}>
                  <span className={`${completed[index] ? 'fw-bolder text-light-red text-vitxo fs-2' : 'text-vitxo text-dark-blue fw-bolder fs-6'}`}>
                    {label}
                  </span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="py-5">
          {
            getStepContent(activeStep)
          }
        </div>
      </div>
    </>
  )
}
