import { ThreeDots } from 'react-loader-spinner';

const LoadingSpinners = ({three_Dots} : any) => {
    return (
        <div className="container">
         <div className='error-container'>
        {three_Dots && <ThreeDots
        height="30"
        color="#ccc"
        ariaLabel="three-dots-loading"
        visible={true}
      /> }
        </div>
        </div>
    );
  };
  
  export default LoadingSpinners;