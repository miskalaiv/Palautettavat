import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import AdminView from './components/AdminView';
import styles from './App.module.css';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
  }
  
  onSearchFieldChange = (event) => {
 
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, rating, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      rating: rating,
      price: price
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let output =
      <>
      <div className={ styles.amazonbar}> amazon 
        <div className={styles.search}> 
          Search <input className={styles.element} type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/> </div>
        </div>

        <SearchView
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) } 
          />
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}> Admin Mode</button>
      </>
    
    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }

   
     return (
      <>
        { output }
      </>
    )
  }n
}
export default App;