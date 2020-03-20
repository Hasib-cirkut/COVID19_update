import React, { useState, useEffect } from "react";
import {Row, Col, Container } from "reactstrap";
import AllCountry from "./AllCountry";
import Select from "react-select";
import CardComp from "./CardComp";
import ChartComp from './ChartComp';
import MapComp from './MapComp'

export default function Main() {
  const [selectPanel, setSP] = useState(false);
  const [country, setCountry] = useState([]);
  const [data, setData] = useState({});

  const [selectData, setSData] = useState({});
  const [latlong, setLatlong] = useState({
    lat: 23.685,
    lng: 90.3563
  })


  useEffect(() => {
    async function fetchData() {
      let reData = await fetch(`https://covid19.mathdro.id/api`);
      reData = await reData.json();

      //console.table(reData);

      setData({
        confirm: reData.confirmed.value,
        death: reData.deaths.value,
        recover: reData.recovered.value
      });

      //console.log(data)
    }

    async function fetchCountry() {
      let country = await AllCountry();

      setCountry(country);

      //console.log(country);
    }

    fetchData();
    fetchCountry();
  }, []);

  const selectCountry = async e => {
    //e.preventDefault()

    let reData = await fetch(
      `https://covid19.mathdro.id/api/countries/${e.value}/confirmed`
    );

    reData = await reData.json();

    reData = reData[0]

    //console.log(reData);

    setSData({
      confirm: reData.confirmed,
      death: reData.deaths,
      recover: reData.recovered
    });

    setSP(true);

    setLatlong({
      lat: reData.lat,
      lng: reData.long
    })

    console.log(latlong)
  };

  return (
    <div>
      <div className="logo">
        <img
          style={{ animation: `spin 10s linear infinite` }}
          src="/corona.png"
          alt="img"
        />
      </div>

      <Container>

        <Row>
          <Col>

            <ChartComp data={data}/>
          
          </Col>

          <Col>

        
              <div className="title">
                <h1 className="text-monospace">WORLDWIDE STATS</h1>
              </div>
      

              <CardComp data={data} />


              <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                <Select options={country} onChange={selectCountry} />
              </div>
            
          </Col>
        </Row>

        

    

            {selectPanel && <CardComp data={selectData} />}


            <MapComp data={latlong} data2={selectData}/>


          


      </Container>


      <div class="footer-copyright text-center py-3">Made with ❤️ by 
        <a className="text-decoration-none" href="https://github.com/Hasib-cirkut"> Hasib</a>
      </div>

      <div class="footer-copyright text-center py-3">API credit:  
        <a className="text-decoration-none" href="https://github.com/mathdroid/covid-19-api"> Mathdroid</a>
      </div>
    </div>
  );
}
