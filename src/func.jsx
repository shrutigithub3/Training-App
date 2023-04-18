import FancyBorder from 'react';
function WelcomeDialog(){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thankyou for visiting our spacecraft!!
            </p>
        </FancyBorder>
    );
}
export default WelcomeDialog;