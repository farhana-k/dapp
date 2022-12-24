import {
  Button,
  Tabs,
  Tab,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import  Items from "./components/items.js"
import  History from "./components/history.js"
import  BurnHistory from "./components/burnhistory.js"
import  BuyerHistory from "./components/buyerhistory.js"
import './App.css';
import myContract from './contract.js'
import Balance from "./components/balance.js";
import Sales from "./components/sales.js";
import Sale from "./components/sale.js";
import SBalance from "./components/sbt.js";
import Credit from "./components/credit.js";
import Verifiers from './components/verifiers.js'

function App() {

  useEffect(()=>{
    enableMetaMask();
  },[])

  const ethereum = window.ethereum;

  var Web3 = require('web3')
  const web3 = new Web3('http://localhost:8545');

  const [state, setstate] = useState({data:""})
  const [state1, setstate1] = useState({data:""})
  const [state2, setstate2] = useState({data:""})
  const [state3, setstate3] = useState({data:""})
  const [state4, setstate4] = useState({data:""})
  const [state5, setstate5] = useState({data:""})
  const [state6, setstate6] = useState({data:""})
  const [state7, setstate7] = useState({data:""})
  const [state8, setstate8] = useState({data:""})
  const [state9, setstate9] = useState({data:""})
  const [state10, setstate10] = useState({data:""})
  
  const changeState = () => {  
      setstate({data: data}); 
  }; 

  const changeState1 = () => {  
  setstate1({data: data1}); 
  };      

  const changeState2 = () => {  
    setstate2({data: data2}); 
  }; 

  const changeState3 = () => {  
    setstate3({data: data3}); 
  }; 

  const changeState4 = () => {  
    setstate4({data: data4}); 
  }; 

  const changeState5 = () => {  
    setstate5({data: data5}); 
  }; 

  const changeState6 = () => {  
    setstate6({data: data6}); 
  }; 

  const changeState7 = () => {  
    setstate7({data: data7}); 
  }; 

  const changeState8 = () => {  
    setstate8({data: data8}); 
  }; 

  const changeState9 = () => {  
    setstate9({data: data9}); 
  }; 

  const changeState10 = () => {  
    setstate10({data: data10}); 
    }; 

  const enableMetaMask = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
  };

  const claimToken = async () => {
    let token = document.getElementById("token").value;
    enableMetaMask();
    const infoValue = await myContract.methods
      .claimCarbonToken(token)
      .send({ from: ethereum.selectedAddress })
  };

  const getItemDetails = async () => {
    let results = []
    const result = await myContract.getPastEvents('Claim',{
      fromBlock:0,
      toBlock: 'latest'
    });
    results.push(result);
    return results;
  }

  const getHistory = async () => {
    let results = []
    const result = await myContract.getPastEvents('Approve',{
      fromBlock:0,
      toBlock: 'latest'
    });
    results.push(result);
    return results;
  }

  const getBurnHistory = async () => {
    let results = []
    const result = await myContract.getPastEvents('Burn',{
      fromBlock:0,
      toBlock: 'latest'
    });
    results.push(result);
    return results;
  }

  const getBuyerHistory = async () => {
    let results = []
    const result = await myContract.getPastEvents('Buy',{
      fromBlock:0,
      toBlock: 'latest'
    });
    results.push(result);
    return results;
  }

  const listVerifiers = async () => {
    let results = []
    const result = await myContract.getPastEvents('Verifier',{
      fromBlock:0,
      toBlock: 'latest'
    });
    results.push(result);
    return results;
  }

const getSaletokens = async () => {
  let results = []
  const result = await myContract.getPastEvents('Sale',{
    fromBlock:0,
    toBlock: 'latest'
  });
  results.push(result);
  return results;
}

const burn = async () => {
  enableMetaMask();
  let amount = document.getElementById('tokentoBurn').value;
  let address = document.getElementById('burnAddress').value;
  const result = await myContract.methods.burnToken(address, amount).send({from: ethereum.selectedAddress})
}

const addVerifier = async () => {
  enableMetaMask();
  if(document.getElementById('vAddress') != null){
    let address = document.getElementById('vAddress').value;
    const result = await myContract.methods.addVerifiers(address).send({from: ethereum.selectedAddress})
  }
  }
  
const getSBTBalance = async () => {
  let res = [];
  const r = await myContract.methods.sbtBalance(ethereum.selectedAddress).call()
  res.push(r);
  return res;
}

const checkSaleBalance = async () => {
  let res = [];
  let address = ethereum.selectedAddress;
  const r = await myContract.methods.checkSalesbalance(address).call()
  res.push(r);
  return res;
}

const getBalance = async () => {
  let res = [];
  const r = await myContract.methods.balanceOf(ethereum.selectedAddress).call()
  res.push(r);
  return res;
}

const onSale = async () => {
  enableMetaMask();
  let amount = document.getElementById('tosale').value;
  const sale = await myContract.methods.onSale(amount).send({from:ethereum.selectedAddress})
}

const checkSale = async () => {
  let res = [];
  if(document.getElementById('sAddress') != null ){
  let sAddress = document.getElementById('sAddress').value;
  const r = await myContract.methods.checkSalesbalance(sAddress).call()
  res.push(r);
  return res;
  }
}

const checkReward = async () => {
  let res = [];
  let address = ethereum.selectedAddress;
  const r = await myContract.methods.checkReward(address).call();
  res.push(r);
  return res;
}

let data = [];
  const p = Promise.resolve(getItemDetails());
  p.then(value => {
      for (let i = 0; i < value[0].length ; i++){
          data.push((value[0][i].returnValues))
      }
  })

  let data1 =[];
  const q = Promise.resolve(getBalance());
  q.then(value => {
    for (let i = 0; i < value.length ; i++){
        data1.push((value))
    }
  })    

  let data2 =[];
  const r = Promise.resolve(getSaletokens());
  r.then(value => {
    for (let i = 0; i < value[0].length ; i++){
      data2.push((value[0][i].returnValues))
  }
  })  

  let data3 = [];
  const s = Promise.resolve(checkSale());
  s.then(value => {
    data3.push(value);
  }) 

  let data4 = [];
  const t = Promise.resolve(checkSaleBalance());
  t.then(value => {
    data4.push(value);
  })

  let data5 =[];
  const u = Promise.resolve(getSBTBalance());
  u.then(value => {
    for (let i = 0; i < value.length ; i++){
        data5.push((value))
    }
  })  

  let data6 =[];
  const v = Promise.resolve(checkReward());
  v.then(value => {
    for (let i = 0; i < value.length ; i++){
        data6.push((value))
    }
  })  

  let data7 = [];
  const w = Promise.resolve(getHistory());
  w.then(value => {
      for (let i = 0; i < value[0].length ; i++){
          data7.push((value[0][i].returnValues))
      }
  })
  
  let data8 = [];
  const x = Promise.resolve(getBurnHistory());
  x.then(value => {
      for (let i = 0; i < value[0].length ; i++){
          data8.push((value[0][i].returnValues))
      }
  })

  let data9 = [];
  const y = Promise.resolve(listVerifiers());
  y.then(value => {
      for (let i = 0; i < value[0].length ; i++){
          data9.push((value[0][i].returnValues))
      }
  })

  let data10 = [];
  const z = Promise.resolve(getBuyerHistory());
  z.then(value => {
      for (let i = 0; i < value[0].length ; i++){
          data10.push((value[0][i].returnValues))
      }
  })

  const approve = async () => {
    enableMetaMask();
    let address = document.getElementById('address').value;
    myContract.methods.approveCreditsHeld(address)
    .send({from:ethereum.selectedAddress})
  }

  const reject = async () => {
    enableMetaMask();
    let address = document.getElementById('address').value;
    let amount = document.getElementById('amount').value;
    myContract.methods.rejectCreditsHeld(address,amount)
    .send({from:ethereum.selectedAddress})
    }

  const buyCredits = async () => {
    let address = document.getElementById('seller').value;
      let amount = document.getElementById('Btoken').value;
      let value = web3.utils.toWei(amount) ;
      const sale = await myContract.methods.buyToken(address,amount)
      .send({from:ethereum.selectedAddress, value: value})
  };

  const claimReward = async () => {
    enableMetaMask();
    let address = ethereum.selectedAddress;
    const use = await myContract.methods.claimReward(address).send({from:ethereum.selectedAddress})
  }

  return (
    <div style={{ maxWidth: "99.20%" }}>
      <br />
      <Tabs
        defaultActiveKey="creditHolder"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{ paddingLeft: "10px" }}
      >
        <Tab
          eventKey="creditHolder"
          title="Carbon Offset Holder"
          style={{ paddingLeft: "10px" }}
        >
            <br></br>
            <Row>
              <Col>
                <Card style={{ width: "30rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b>Claim Carbon Offset</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Enter Offset (in Ton)
                    <br></br>
                      <input id="token" placeholder="Amount"></input>
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => claimToken()}
                    >
                      Claim Carbon Offset
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "30rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Check Credit Balance: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <br></br>
                    <Balance data = {state1.data}/>
                    <Button variant="warning" onClick={changeState1} type="button"> Check </Button>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "30rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Check sales Balance: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Sale data = {state4.data}/>
                    <br></br>
                    <Button variant="warning" onClick={changeState4} type="button"> Check </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "30rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Sell Carbon credit: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <input id="tosale" placeholder="enter amount to sell"></input>
                    </Card.Text>
                    <Button variant="warning" onClick={onSale} type="button"> Confirm </Button>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "30rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Check / Claim Rewards: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Credit data = {state6.data}/>
                    <br></br>
                    <Button variant="warning" onClick={changeState6} type="button"> Check </Button>
                    <Button variant="success" onClick={claimReward} type="button"> Claim </Button>
                    </Card.Body>
                </Card>
              </Col>
              </Row>
        </Tab>
        <Tab
          eventKey="Verifier"
          title="Verifier"
          style={{ paddingLeft: "10px" }}
        >
          <Row >
              <Col>
                <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> All Claim Requests</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <Items data={state.data} />   
                    <br></br>
                    <Button variant="warning" onClick={changeState} type="button"> Claim Requests </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <br></br>
              <br></br>
          </Row>
          <br />
          <Row>
          <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Approve / Reject Claim Requests</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <input id="address" placeholder="Address"></input>
                        <br></br>
                        <br></br>
                        <Button variant="success" type="submit" onClick={approve}>Approve</Button>
                        <Button variant="danger" type="submit" onClick={reject}>Reject</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>


              <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Burn Token</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <input id="burnAddress" placeholder="Address"></input>
                        <br></br>
                        <input id="tokentoBurn" placeholder="Amount"></input>
                        <br></br>
                        <Button variant="danger" type="submit" onClick={burn}>Confirm</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Approval history </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <History data= {state7.data} ></History>
                        <br></br>
                        <Button variant="success" type="submit" onClick={changeState7}>Approval History</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              
              <Row>
              <Col>
                <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Sales history </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <BuyerHistory data= {state10.data} ></BuyerHistory>
                        <br></br>
                        <Button variant="success" type="submit" onClick={changeState10}>Sales History</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Burn history </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <BurnHistory data= {state8.data} ></BurnHistory>
                        <br></br>
                        <Button variant="success" type="submit" onClick={changeState8}>Burn History</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> See All Verifiers </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <Verifiers data= {state9.data} ></Verifiers>
                        <br></br>
                        <Button variant="success" type="submit" onClick={changeState9}>List Verifiers</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
              <br></br>
              <Col>
                <Card style={{ width: "34.5rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Add Verifier</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                        <input id="vAddress" placeholder="Address"></input>
                        <br></br>
                        <Button variant="success" type="submit" onClick={addVerifier}>Add</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        </Tab>
        <Tab
          eventKey="Buyer"
          title="Buyer"
          style={{ paddingLeft: "10px" }}
        >
          <Row >
              <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Click here to see available tokens: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <Sales data = {state2.data}/>
                    </Card.Text>
                    <br></br>
                    <Button variant="success" onClick={changeState2} type="button"> See Available tokens </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Buy Carbon Credits: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                  <Card.Text>
                    <input id="seller" placeholder="Address"></input>
                    <br></br>
                    <br></br>
                    <input id="Btoken" placeholder="Amount"></input>
                    <br></br>
                  </Card.Text>
                    <Button variant="success" onClick={buyCredits} type="button"> Buy Carbon Credits </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
              <br></br>
              <br></br>
              <Row>
              <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Check Soulbound Balance: </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <SBalance data = {state5.data}/>
                    <Button variant="success" onClick={changeState5} type="button"> Check </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "35rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Check Sale token availability</b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <input id="sAddress" placeholder="Address"></input>
                    <br></br>
                    <br></br>
                    <Button variant="warning" onClick={changeState3} type="button"> Check </Button>
                    <Sale data={state3.data} />   
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
        </Tab>
        <Tab 
        eventKey="About"
        title="About"
        style={{ paddingLeft: "10px" }}
        >
          <Row>
            <Col>
            <Card style={{ width: "75rem" }}>
                  <Card.Header
                  ><Card.Title>
                  <b> Carbon-Credit Project </b>
                </Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <Sales data = {state2.data}/>
                    </Card.Text>

A platform which integrates carbon offset holders and carbon emitters under one roof to work together for a zero carbon emission goal.

<br></br><br></br>
    The project addresses 3 categories of people: Verifiers, Offset Holders & Buyers.
    <br></br><br></br>
    Verifiers:
    <br></br>
    These are authorities who control the other two. the deployed account will be added as a verifier by default. A verifier can add another account holder as verifier. 
    <br></br>
    Carbon Offset holders:
    <br></br>
    These are people who work towards the absorption of carbon dioxide in the air. There could be some measures to evaluate the credit held by offset holders. 
    Once they are eligible for carbon offset, they raise a claim request to the verifier. 
    <br></br>
    The verifier approves/rejects the claim request by validating the request. If approved, the offset holder receives the credit token to his account equalent to offset claimed. They can put it to sale.
    <br></br>
    Buyers:
    <br></br>
    Buyers are those who emits the carbon dioxide to the atmosphere. In order to reach the goal of zero carbon emission, they need to have carbon credits to emit carbon. So they buy credit tokens from offset holders. During emission, they put it to use. Once a certain amount of carbon are emitted, the verifiers burn their credits and they need to buy it again from offset holders. Buyers are rewarded a soulbound token for every 5 credits they spent.
    <br></br>
    <br></br>         
### functions:
<br></br>
------------------
<br></br>
1. addVerifiers(address verifierAddres)
<br></br>
    to add as verifier. only a verifier can add another verifier. The deployed account is a verifier by default.
    <br></br><br></br>
2. claimCarbonToken(uint credit)
<br></br>
    function to claim carbon offset. used by offset holders. inputs the offset in tons.
    <br></br><br></br>
3. approveCreditsHeld(address _holder, uint amount)
<br></br>
    function to approve the claims raised by offset holders. done by verifiers only. Verifier verifies the offset claim and mint credits to offset holders account.
    <br></br><br></br>
4.  rejectCreditsHeld(address _holder, uint amount) 
<br></br>
    function to reject the claims raised by offset holders. done by verifiers only.
    <br></br><br></br>
5.  onSale(uint tokenCount)
<br></br>
    used by credit holders. the approved credits can be put to sale. credits put to sale will be stored in a mapping. 
    <br></br><br></br>
6.  buyToken(address seller, uint tokenC)
<br></br>
    used by buyers to buy carbon credits. Thier credit balance will increase by the bought amount. the same will be deducted from credit holders balance. Buyers have to pay a price (1 ether per credit in this contract). The seller gets a reward equal to the price of the credit. 
    <br></br><br></br>
7.  claimReward()
<br></br>
    Seller gets a reward every time a buyer buys credit from them. these rewards can be claimed by sellers using this function. The ether will be transfered to sellers wallet.
    <br></br><br></br>
8.  burn(address buyerAddress, uint tokenToBurn)
<br></br>
    verifiers burn the token used by buyers after a period. If the burn token is greater than or equal to 5 credit, the verifier will issue a soulbound token to the buyers address.
    <br></br><br></br>

9. Approve / Sales / Burn  history:
<br></br>
    Event listeners to get approval / burn / sales history.
    <br></br>
    <br></br>
10. Check Soulbound balance    
<br></br>
Function to check soulbound balance of the buyer.
  
    <br></br>
### Authors and acknowledgment:
<br></br>
Farhana K. 



</Card.Body>
                </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;





