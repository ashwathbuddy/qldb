  import React, { useState } from "react";
  import { useNavigate } from 'react-router-dom';
  import {useLocation} from 'react-router-dom';
  import './AddNewBatch.css';
  
  function RawBiomass() {
    const location = useLocation();
    const message = location.state.name;
    const navigate = useNavigate();
  
    const handleRedirect = (path) => {
      console.log('batchNo:', batchNo);
      console.log('startDate:', startDate);
      console.log('endDate:', endDate);
      console.log('startedBy:', startedBy);
      console.log('closedBy:', closedBy);
      navigate(path, { state: { name: batchNo}});
    };
  
    const [batchNo, setBatchNo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startedBy, setstartedBy] = useState('');
    const [closedBy, setClosedBy] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleBatchNoChange = (event) => {
      setBatchNo(event.target.value);
    };
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
    };
  
    const handleEndDateChange = (event) => {
        setSelectedFile(event.target.files[0]);
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
          <div className="addTitle">Batch details: Raw biomass</div>
              <div className="biomassContainer">
                <div className="biomassDiv">
                {/* <form onSubmit={handleSubmit}> */}
                <div>Batch Number: {message} </div>

                  <div className="displayFlex marginStyle">
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Supplier:</legend>
                   <input type="text" id="startDate" value={startDate} onChange={handleStartDateChange} className="inputStyle" />
                 </fieldset>
                    </div>
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Supplier CoA:</legend>
                   <input type="file" id="endDate" onChange={handleEndDateChange} className="inputStyle"/>
                 </fieldset>
                    </div>
                  </div>

                  <div className="displayFlex marginStyle">
                  <div className="flexAuto">
                  <fieldset  >
                   <legend className="scheduler-border">Supplier batch #:</legend>
                   <input type="text" id="startedBy" value={startedBy} onChange={handleStartedByChange} className="inputStyle"/>
                 </fieldset>
                  </div>
                  <div className="flexAuto">
                  <fieldset  >
                   <legend className="scheduler-border">Supplier Pesticides:</legend>
                   <input type="file" id="closedBy" value={closedBy} onChange={handleClosedByChange} className="inputStyle"/>
                 </fieldset>
                  </div>
                  </div>
                  <div className="displayFlex marginStyle">
                  <div className="flexAuto">
                  <fieldset  >
                   <legend className="scheduler-border">Associated PO #:</legend>
                   <input type="text" id="startedBy" value={startedBy} onChange={handleStartedByChange} className="inputStyle"/>
                 </fieldset>
                  </div>
                  <div className="flexAuto">
                  <fieldset  >
                   <legend className="scheduler-border">Upwell CoA:</legend>
                   <input type="file" id="closedBy" value={closedBy} onChange={handleClosedByChange} className="inputStyle"/>
                 </fieldset>
                  </div>
                  </div>
                  <div className="marginStyle">
                <fieldset  >
                 <legend className="scheduler-border">Shipped:</legend>
                 <input type="date" id="batchNo" value={batchNo} onChange={handleBatchNoChange} className="inputStyle"/>
               </fieldset>
                </div>
                <div className="marginStyle">
                <fieldset  >
                 <legend className="scheduler-border">Received: </legend>
                 <input type="date" id="batchNo" value={batchNo} onChange={handleBatchNoChange} className="inputStyle"/>
               </fieldset>
                </div>
                <div className="marginStyle">
                <fieldset  >
                 <legend className="scheduler-border">Shipping manifest:</legend>
                 <input type="file" id="batchNo" value={batchNo} onChange={handleBatchNoChange} className="inputStyle"/>
               </fieldset>
                </div>
                <div className="marginStyle">
                <fieldset  >
                 <legend className="scheduler-border">Proof of delivery:</legend>
                 <input type="file" id="batchNo" value={batchNo} onChange={handleBatchNoChange} className="inputStyle"/>
               </fieldset>
                </div>

                  {/* <button type="submit">submit</button> */}
                  {/* </form> */}
                 <div className="paddingTop">
  
                    <button type="button" onClick={() => handleRedirect('/rawbiomass')} className="loginbuttonStyle">Home</button>
                            
                    <button type="button" onClick={() => handleRedirect('/extraction')} className="loginbuttonStyle">ADD SUPPLIER</button>
                    
                    <button type="button" onClick={() => handleRedirect('/logistics')} className="loginbuttonStyle">BACK</button>
        
                    <button type="submit" onClick={() => handleRedirect('/products')} className="loginbuttonStyle">NEXT</button>
  
                </div>
                {/* </form> */}
                </div>
              </div>
        </div>
      );
    }
    
    export default RawBiomass;