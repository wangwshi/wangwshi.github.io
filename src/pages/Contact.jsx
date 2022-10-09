import React from "react";

function Contact() {
  const styleHeader = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
const styleContent = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
fontSize: '1.5em',
};
  return (
<div >
    <div  style={styleHeader}
         className="Contact">
      <h1>Contact</h1>
    </div>
    <div  style={styleContent}
         className="Contact">
<p>hanglowan@gmail.com</p>
    </div>
    <div  style={styleContent}
         className="Contact">
<p>469-740-1402</p>
    </div>
    <div  style={styleContent}
         className="Contact">
<p>@refinedchili on Instagram</p>
    </div>
    </div>
  );
}

export default Contact;
