import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import data from "./DummyData.json";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {

  console.log(data)

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Men" {...a11yProps(0)} />
          <Tab label="Women" {...a11yProps(1)} />
          <Tab label="Kids" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Enter Title"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <button> Search </button>
              ) : (
                <button id="clearBtn" onClick={clearInput}>Close</button>
              )}
            </div>
          </div>
          {
            filteredData.length > 0 ? 
            <div className="dataResult">
              {filteredData.map((value, key) => {
                return (
                  <>
                    <div class="card" style={{width: "18rem"}}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <h5 class="card-title">{value.country}</h5>
                        <p class="card-text">{value.author}</p>
                        <p class="card-text">{value.pages}</p>
                        <a href="#" class="btn btn-primary">{value.link}</a>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> :
              <div className="dataResult">
                {data.map((value, key) => {
                  return (
                    <>
                      <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{value.title}</h5>
                          <h5 class="card-title">{value.country}</h5>
                          <p class="card-text">{value.author}</p>
                          <p class="card-text">{value.pages}</p>
                          <a href="#" class="btn btn-primary">{value.link}</a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Enter Title"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <button> Search </button>
              ) : (
                <button id="clearBtn" onClick={clearInput}>Close</button>
              )}
            </div>
          </div>
          {
            filteredData.length > 0 ? 
            <div className="dataResult">
              {filteredData.map((value, key) => {
                return (
                  <>
                    <div class="card" style={{width: "18rem"}}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <h5 class="card-title">{value.country}</h5>
                        <p class="card-text">{value.author}</p>
                        <p class="card-text">{value.pages}</p>
                        <a href="#" class="btn btn-primary">{value.link}</a>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> :
              <div className="dataResult">
                {data.map((value, key) => {
                  return (
                    <>
                      <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{value.title}</h5>
                          <h5 class="card-title">{value.country}</h5>
                          <p class="card-text">{value.author}</p>
                          <p class="card-text">{value.pages}</p>
                          <a href="#" class="btn btn-primary">{value.link}</a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Enter Title"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <button> Search </button>
              ) : (
                <button id="clearBtn" onClick={clearInput}>Close</button>
              )}
            </div>
          </div>
          {
            filteredData.length > 0 ? 
            <div className="dataResult">
              {filteredData.map((value, key) => {
                return (
                  <>
                    <div class="card" style={{width: "18rem"}}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <h5 class="card-title">{value.country}</h5>
                        <p class="card-text">{value.author}</p>
                        <p class="card-text">{value.pages}</p>
                        <a href="#" class="btn btn-primary">{value.link}</a>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> :
              <div className="dataResult">
                {data.map((value, key) => {
                  return (
                    <>
                      <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{value.title}</h5>
                          <h5 class="card-title">{value.country}</h5>
                          <p class="card-text">{value.author}</p>
                          <p class="card-text">{value.pages}</p>
                          <a href="#" class="btn btn-primary">{value.link}</a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
          }
        </div>
      </TabPanel>
    </Box>
  );
}
