import './App.css';

function App() {


  return (
    <div className="App">
      <header className='head'>
        <nav>
        <ul type="None">
        <li><a href="https://www.google.com" className='navLinks'> support </a></li>
        <li><a href="https://www.google.com" className='navLinks'> Contact </a></li>
        <li><a href="https://www.google.com" className='navLinks'> About </a></li>
        </ul>
        </nav>
        <h2 className='logo'><b>JOB</b></h2>
      </header>
      <body className='body-site'>
        <div>
      <p className='formHeader'><b> Job Application </b></p>
        <div className='body-div' > 
          <form className='formClass'> 
            <label>Name:</label><input type='text'/><br/>
            <label>email:</label><input type='email'/><br/>
            <label>Education:</label>
              <select>
                <option value="B.tech">B.tect</option>
                <option value="M.tech">M.tect</option>
                <option value="12th">12th</option>
                <option value="Diploma">dimploma</option>
              </select>
            <br/>
            <label>Grades:</label><input type='float'/><br/>
            <label>Phone number:</label><input type='number'/><br/>
            <label>address:</label><input type='text'/><br/>
            <label>role:</label>
              <select>
                <option value="WD">web Devele</option>
                <option value="AI and ML">AI and ML</option>
                <option value="data scientest">12th</option>
                <option value="Diploma">dimploma</option>
              </select>
            <br/>
            <input type='submit'/>
          </form>           
        </div>
        </div>        
      </body>
    </div>
  );
}

export default App;
