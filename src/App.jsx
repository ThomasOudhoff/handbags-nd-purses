import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";
import bag_1 from "./assets/screenshots/bag_1.png";
import bag_2 from "./assets/screenshots/bag_1.png";
import bag_3 from "./assets/screenshots/bag_1.png";
import bag_4 from "./assets/screenshots/bag_1.png";

function App() {
  return (
      <div>
      <nav>
          <Button text="to the collection" onClick={() => console.log('to the collection clicked')} />
          <Button text="shop all bags" onClick={() => console.log('to all bags clicked')} />
          <Button text="pre-orders" onClick={() => console.log('pre orders clicked')} disabled="true"/>
      </nav>
          <main>
              <Product label="best seller" src={bag_1} name = "The handy Bag" price="€400,-"/>
              <Product label="best seller" src={bag_2} name = "The stylish bag" price="€250,-"/>
              <Product label="new collection" src={bag_3} name = "The simple Bag" price="€300,-"/>
              <Product label="new collection" src={bag_4} name = "The trendy Bag" price="€150,-"/>
          </main>
      </div>
  )
}
export default App;