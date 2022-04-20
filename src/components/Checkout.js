import Axios from 'axios';


//let size,crust,cheese, vegtoppings, nonvegtoppings;
let sizeCost, crustCost,cheeseCost, vegtoppingsCost, nonvegtoppingsCost,totalCost;
let amount;
function Checkout() {

    const total =(cost) => {
          amount = cost;
    }

    const showSummary = () => {
        Axios.get("http://localhost:3001/checkout", {
            params: {
                id:1
            }
        })
          .then(response => {
              console.log(response); 
              switch(response.data[0].size){
                  case 'small':
                      sizeCost = 100;
                      break;
                  case 'medium':
                      sizeCost = 125;
                      break;
                   default:
                       sizeCost = 150;
                       break;       
              }
              switch(response.data[0].crust){
                  case 'pan' :
                      crustCost = 0;
                      break;
                  case 'thincrust':
                      crustCost = 25;
                      break;
                   default:
                       crustCost = 50;
                       break;       
              }
              switch(response.data[0].cheese){
                  case 'mozzarella':
                      cheeseCost =0;
                      break;
                  case 'asiago' :
                      cheeseCost = 40;
                      break;
                  case 'parmesan' :
                        cheeseCost = 40;
                        break;
                  default :
                        cheeseCost = 40;
                         break;         

              }
              vegtoppingsCost = 40;
              if(response.data[0].nonvegtoppings !== 0)
              nonvegtoppingsCost = 40;

              totalCost = sizeCost + crustCost +cheeseCost + vegtoppingsCost + nonvegtoppingsCost;
              console.log(totalCost);
              total(totalCost);

          })
    }
    return(
        <div className="p-5">
           <h3>Order Summary</h3>
           
           <button onClick={showSummary}>Calculate</button>
           
       
           <h2>{amount}</h2>
    {/*<button className="btn btn-danger">please Login to purchase</button> */}
    <button className="btn btn-success">Place order</button>
    {/*<a href="#">View previous Orders</a>*/}
    </div>
    );
}

export default Checkout;