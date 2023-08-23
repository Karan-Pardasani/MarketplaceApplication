import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import Header from '../components/header/header';
import ProductList from '../components/productList/productList';
import Footer from '../components/footer/footer';

function Home({ user}) {

  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if( user.auth.token == null){
  //     navigate("/login");
  //   }

  // }, []);
  return(
    <>  
      <Header />
      <ProductList/>
      <Footer/>
    </>
  )

  

}

const mapStateToProps = (state) => {

  return {
    user: state.user,
    messages: state.messages
  }

};

const mapDispatchToProps = (dispatch) => {

  return {

    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)