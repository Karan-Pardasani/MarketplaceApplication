import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import { toast } from 'react-toastify';


function Home({ user}) {

  const navigate = useNavigate();
  useEffect(()=>{
    if( user.auth.token == null){
      navigate("/login");
    }

  }, []);



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