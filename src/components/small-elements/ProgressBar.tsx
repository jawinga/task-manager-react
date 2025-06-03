import React from 'react'

interface ProgressBarProps {

    progress:number;

}

const ProgressBar = ({progress}:ProgressBarProps) => {

    let styleBar = '';
    
    if(progress <= 25){

        styleBar = 'bg-danger';
    }else if(progress <= 50){
        styleBar = 'bg-warning';

    }else if(progress <= 75){

                styleBar = 'bg-info';
    }
    else{
        styleBar = 'bg-success';

    }

  return (

    <div className='progress'>

      <div className={`progress-bar progress-bar-striped ${styleBar}`} role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>



    </div>


  )
}

export default ProgressBar