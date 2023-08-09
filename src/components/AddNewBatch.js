import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AddNewBatch.css';

function AddBatch() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    const newErrors = {};
    console.log('batchNo:', batchNo);
    console.log('startDate:', startDate);
    console.log('endDate:', endDate);
    console.log('startedBy:', startedBy);
    console.log('closedBy:', closedBy);
    navigate(path, { state: { name: batchNo}});
    // if(!batchNo){
    //   newErrors.errMesgs = 'Username is required';
    //   console.log('Username is required:', newErrors.errMesgs);
    //   navigate(path, { state: { name: batchNo}});
    // }else{
    //   console.log('Username is required:', newErrors.errMesgs);
    //   newErrors.errMesgs = 'Username is required';
    // }
  };

  const [batchNo, setBatchNo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startedBy, setstartedBy] = useState('');
  const [closedBy, setClosedBy] = useState('');
  const [errors, setErrors] = useState({
    errMesgs: ''
  });

  const handleBatchNoChange = (event) => {
    setBatchNo(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartedByChange = (event) => {
    setstartedBy(event.target.value);
  };

  const handleClosedByChange = (event) => {
    setClosedBy(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('batchNo:', batchNo);
  //   console.log('startDate:', startDate);
  //   console.log('endDate:', endDate);
  //   console.log('startedBy:', startedBy);
  //   console.log('closedBy:', closedBy);
  //   // Add your registration logic here
  // };
    return (
      <div>
        <div className="addTitle">New Batch Details</div>
            <div className="containerStyle">
              <div>
              {/* <form onSubmit={handleSubmit}> */}
              <div className="marginStyle">
                <fieldset  >
                 <legend className="scheduler-border">Batch Number:</legend>
                 <input type="text" id="batchNo" value={batchNo} onChange={handleBatchNoChange} className="inputStyle"/>
               </fieldset>
                </div>
                <div className="displayFlex marginStyle">
                  <div className="flexAuto">
                  <fieldset  >
                 <legend className="scheduler-border">Start Date:</legend>
                 <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} className="inputStyle" placeholder="MM/DD/YYYY"/>
               </fieldset>
                  </div>
                  <div className="flexAuto">
                  <fieldset  >
                 <legend className="scheduler-border">End Date:</legend>
                 <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} className="inputStyle" placeholder="MM/DD/YYYY"/>
               </fieldset>
                  </div>
                </div>
                <div className="displayFlex marginStyle">
                <div className="flexAuto">
                <fieldset  >
                 <legend className="scheduler-border">Started by:</legend>
                 <input type="text" id="startedBy" value={startedBy} onChange={handleStartedByChange} className="inputStyle"/>
               </fieldset>
                </div>
                <div className="flexAuto">
                <fieldset  >
                 <legend className="scheduler-border">Closed by:</legend>
                 <input type="text" id="closedBy" value={closedBy} onChange={handleClosedByChange} className="inputStyle"/>
               </fieldset>
                </div>
                </div>
                {/* <button type="submit">submit</button> */}
                {/* </form> */}
                <div>{errors.username && <span className="error">{errors.username}</span>}</div>
               <div className="paddingTop">

            <button type="submit" onClick={() => handleRedirect('/rawbiomass')} className="buttonStyle">RAW BIOMASS</button>
                    
            <button type="submit" onClick={() => handleRedirect('/extraction')} className="buttonStyle1">EXTRACTION</button>
            
            <button type="submit" onClick={() => handleRedirect('/logistics')} className="buttonStyle2">LOGISTICS</button>

            <button type="submit" onClick={() => handleRedirect('/products')} className="buttonStyle3">PRODUCTS</button>

              </div>
              {/* </form> */}
              </div>
            </div>
      </div>
    );
  }
  
  export default AddBatch;