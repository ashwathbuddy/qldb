  import React, { useState } from "react";
  import { useNavigate } from 'react-router-dom';
  import {useLocation} from 'react-router-dom';
  import './AddNewBatch.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome } from '@fortawesome/free-solid-svg-icons';
  
  function Logistics() {
    const location = useLocation();
    const message = location.state.name;
    const navigate = useNavigate();
  
    const handleRedirect = (path) => {
      navigate(path);
      console.log('data',fileInputs);
      console.log('dateInputs',dateInputs);
      console.log('textInputs',textInputs)
    };
  
    const [fileInputs, setFileInputs] = useState({
      shippingFile: null,
      deliveryFile: null,
    });
  
    const [textInputs, setTextInputs] = useState({
      supplier: '',
      associatedPo: '',
    });
  
    const [dateInputs, setDateInputs] = useState({
      shippedDate: '',
      receivedDate: '',
    });
  
    // const handleFileUpload = (event) => {
    //   const file = event.target.files[0];
  
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = handleFileLoad;
    //     reader.readAsText(file);
    //   }
    // };
  
    // const handleFileLoad = (event) => {
    //   const pdfContent = event.target.result;
    //   console.log('PDF Content:', pdfContent);
    // };
    // const [selectedOption, setSelectedOption] = useState('');

    const [selectedOptions, setSelectedOptions] = useState({
      dropdown1: '',
      dropdown2: '',
      dropdown3: '',
      dropdown4: '',
    });
    
  
    
    const handleFileChange = (event, inputName) => {
      setFileInputs({ ...fileInputs, [inputName]: event.target.files[0] });
    };
    const handleDropdownChange = (event, dropdownName) => {
      setSelectedOptions({ ...selectedOptions, [dropdownName]: event.target.value });
    };
  
    const handleTextChange = (event, inputName) => {
      setTextInputs({ ...textInputs, [inputName]: event.target.value });
    };
  
    const handleDateChange = (event, inputName) => {
      setDateInputs({ ...dateInputs, [inputName]: event.target.value });
    };
  
    // const handleSelectChange = (event) => {
    //   setSelectedOption(event.target.value);
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Handle form submission logic
    // };
  
      return (
        <div>
           <div className="maincontainerbiomass">
            <div className="upwelltitle" style={{display:'flex'}}><img src="./upwelllogo.png" alt="upwell" className="logoStyling" />
             <span className="addTitle">Batch details: Logistics Supplier to SFE tolling</span></div>
        
              <div className="biomassContainer">
              {/* <div className="addTitle">Batch Details: Raw Biomass</div> */}
                <div className="biomassDiv">
                {/* <form onSubmit={handleSubmit}> */}
                <div className="batchNoStyling">Batch Number: {message} </div>
  
                  <div className="displayFlex marginStyle">
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Supplier:</legend>
                   <select className="dropdownStyle" value={selectedOptions.dropdown1} onChange={(e) => handleDropdownChange(e, 'dropdown1')}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                 </fieldset>
                    </div>
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Shipped to:</legend>
                   <select className="dropdownStyle" value={selectedOptions.dropdown2} onChange={(e) => handleDropdownChange(e, 'dropdown2')}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                 </fieldset>
                    </div>
                  </div>
  
                  <div className="marginStyle">
                  <fieldset  >
                   <legend className="scheduler-border">Supplier batch #s:</legend>
                   <input type="text" id="SupplierBatch" value={textInputs.supplier}
          onChange={(e) => handleTextChange(e, 'supplier')}
          placeholder="" className="inputStyle"/>
                 </fieldset>
                  </div>

                  <div className="marginStyle">
                  <fieldset  >
                   <legend className="scheduler-border">Associated PO #:</legend>
                   <input type="text" id="associatedPo" value={textInputs.associatedPo}
          onChange={(e) => handleTextChange(e, 'associatedPo')}
          placeholder="" className="inputStyle"/>
                 </fieldset>
                  </div>

                  <div className="displayFlex marginStyle">
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Shipper:</legend>
                   <select className="dropdownStyle" value={selectedOptions.dropdown3} onChange={(e) => handleDropdownChange(e, 'dropdown3')}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                 </fieldset>
                    </div>
                    <div className="flexAuto">
                    <fieldset  >
                   <legend className="scheduler-border">Air/Sea:</legend>
                   <select className="dropdownStyle" value={selectedOptions.dropdown4} onChange={(e) => handleDropdownChange(e, 'dropdown4')}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                 </fieldset>
                    </div>
                  </div>

                  <div className="displayFlex marginStyle">
                    <div className="flexAuto">
                    <fieldset  >
                      <legend className="scheduler-border">Shipped:</legend>
                      <input type="date" id="shipped" value={dateInputs.shippedDate}
                       onChange={(e) => handleDateChange(e, 'shippedDate')} className="inputStyle"/>
                    </fieldset>
                    </div>
                    <div className="flexAuto">
                      <fieldset  >
                      <legend className="scheduler-border">Shipping manifest:</legend>
                      <div className="file-input-container">
                          <label htmlFor="file-input4" className="custom-file-label">
                            {fileInputs.shippingFile ? fileInputs.shippingFile.name : 'Choose File'}
                          </label>
                          <input
                            type="file"
                            id="file-input4"
                            onChange={(e) => handleFileChange(e, 'shippingFile')}
                            style={{ display: 'none' }}
                          />
                      </div>
                      </fieldset>
                    </div>

                </div>

                <div className="displayFlex marginStyle">
                  <div className="flexAuto">
                    <fieldset  >
                  <legend className="scheduler-border">Received: </legend>
                  <input type="date" id="received" value={dateInputs.receivedDate}
                    onChange={(e) => handleDateChange(e, 'receivedDate')} className="inputStyle"/>
                </fieldset>
                  </div>
                  <div className="flexAuto">
                <fieldset  >
                 <legend className="scheduler-border">Proof of delivery:</legend>
                 <div className="file-input-container">
                    <label htmlFor="file-input5" className="custom-file-label">
                      {fileInputs.deliveryFile ? fileInputs.deliveryFile.name : 'Choose File'}
                    </label>
                    <input
                      type="file"
                      id="file-input5"
                      onChange={(e) => handleFileChange(e, 'deliveryFile')}
                      style={{ display: 'none' }}
                    />
                 </div>
               </fieldset>
                </div>

                </div>


                  {/* <button type="submit">submit</button> */}
                  {/* </form> */}
                 {/* <div className="paddingTop">
                    <FontAwesomeIcon icon={faHome} onClick={() => handleRedirect('/')} className="homeButton"/>
                            
                    <button type="button" onClick={() => handleRedirect()} className="loginbuttonStyle">ADD SUPPLIER</button>
                    
                    <button type="button" onClick={() => handleRedirect('/add')} className="loginbuttonStyle">BACK</button>
        
                    <button type="submit" onClick={() => handleRedirect('/products')} className="loginbuttonStyle">NEXT</button>
  
                </div> */}
                {/* </form> */}
                </div>
                <div className="paddingTop">
                    <FontAwesomeIcon icon={faHome} onClick={() => handleRedirect('/')} className="homeButton"/>
                    {/* <button type="button" onClick={() => handleRedirect('/rawbiomass')} className="loginbuttonStyle">Home</button> */}
                            
                    <button type="button" onClick={() => handleRedirect()} className="loginbuttonStyle">ADD SUPPLIER</button>
                    
                    <button type="button" onClick={() => handleRedirect('/add')} className="loginbuttonStyle">BACK</button>
        
                    <button type="submit" onClick={() => handleRedirect('/products')} className="loginbuttonStyle">NEXT</button>
  
                </div>
              </div>
              
              </div>
        </div>
      );
    }
    
    export default Logistics;