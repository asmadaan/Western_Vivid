import React, { Component } from 'react';
import {Card,Grid,Button,Input,Select} from 'semantic-ui-react';
 
  
class ItemDisplay extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            items:this.props.content,
            cart:[],
            sortedItems:[],
            dummyPriceMin:0,
            dummyPriceMax:1000,
            priceMax:10000,
            priceMin:0,
            searchResult:''
        }
    }

    pushToCart(item,index)
    {
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        cartitems.push(item)
        itemsList[index].cart=true;
        this.setState({items:itemsList,cart:cartitems});
        console.log(this.state.cart)
    }
    removeFromCart(item,index)
    {
        let cartitems=this.state.cart;
        let itemsList=this.state.items;
        cartitems.splice(cartitems.indexOf(item),1)
        itemsList[index].cart=false;
        this.setState({items:itemsList,cart:cartitems});
        console.log(this.state.cart)
    }
    onModify()
    {
        this.setState({priceMin:this.state.dummyPriceMin,priceMax:this.state.dummyPriceMax})
    }
    render() {
        return (
            <div>
                 
                    
                
            <Grid>
            
            <Grid.Row centered>
            {
                    this.state.cart.length!=0?
                     <Button color='green'>PROCEED TO CHECKOUT</Button>  
                    :
                    null
                } 
             
            </Grid.Row>
            <Grid.Row columns={4}>
                <Grid.Column>
                     
                        <Input placeholder='Minimum' value={this.state.dummyPriceMin} onChange={(text)=>
                            {this.setState({dummyPriceMin:text.target.value})}}/>
                        <Input placeholder='Maximum' value={this.state.dummyPriceMax} onChange={(text)=>{
                            this.setState({dummyPriceMax:text.target.value})
                            console.log(this.state.dummyPriceMax)
                            }}/>
                    
                </Grid.Column>
                <Grid.Column>
                        
                </Grid.Column>
                <Grid.Column>
                        
                </Grid.Column>
                <Grid.Column>
                       <Button color='red' onClick={()=>{this.onModify()}}>MODIFY</Button> 
                </Grid.Column>
                
            </Grid.Row>
                {/* Unsorted */}
                 <Grid.Row  columns={4}>
                 {this.state.items.map((i,j)=>{
                return(
                    
                        
                         
                           <Grid.Column key={j}> <Card  fluid style={{margin: 5}}>
                             
                            <Card.Content>
                                <p>{i.name}</p>
                                <img  width='100%' src='https://picsum.photos/200' />
                                <h2>₹ {i.price}</h2>
                                <h3>{i.size}</h3>
                                {
                                    i.cart==false?
                                    <Button fluid onClick={()=>{this.pushToCart(i,j)}} inverted color='red'>ADD TO CART</Button>
                                    :
                                    <Button fluid onClick={()=>{this.removeFromCart(i,j)}}   color='red'>REMOVE FROM CART</Button>
                                }
                            </Card.Content>
                       </Card>  </Grid.Column>
                        
                         
                         
                        
                         
                       
                )
            })} 
          
            
                 </Grid.Row>
                  
            </Grid><br/><br/>
            {
                    this.state.cart.length!=0?
                    <Button color='green'>PROCEED TO CHECKOUT</Button>
                    :
                    null
                }
            </div>
        );
    }
}

export default ItemDisplay;