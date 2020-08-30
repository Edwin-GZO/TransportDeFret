import { connect } from 'react-redux';
import FormQuotePro from '../components/FormQuotePro';
import { changeField, submitquote } from '../store/action/user-actions';

const mapStateToProps = (state) => ({

    billSiretQuotePro: state.quotePro.billSiretQuotePro,
    billSocieteQuotePro: state.quotePro.billSocieteQuotePro,
    billMailQuotePro: state.quotePro.billMailQuotePro,
    billNumberQuotePro: state.quotePro.billNumberQuotePro,
    billTrackQuotePro: state.quotePro.billTrackQuotePro,
    billStreetQuotePro: state.quotePro.billStreetQuotePro,
    billComplementQuotePro: state.quotePro.billComplementQuotePro,
    billCityQuotePro: state.quotePro.billCityQuotePro,
    billPostalCodeQuotePro: state.quotePro.billPostalCodeQuotePro,
    billPhoneQuotePro: state.quotePro.billPhoneQuotePro,
    loadNameQuotePro: state.quotePro.loadNameQuotePro,
    loadFirstNameQuotePro: state.quotePro.loadFirstNameQuotePro,
    loadNumberQuotePro: state.quotePro.loadNumberQuotePro,
    loadTrackQuotePro: state.quotePro.loadTrackQuotePro,
    loadStreetQuotePro: state.quotePro.loadStreetQuotePro,
    loadComplementQuotePro: state.quotePro.loadComplementQuotePro,
    loadCityQuotePro: state.quotePro.loadCityQuotePro,
    loadPostalCodeQuotePro: state.quotePro.loadPostalCodeQuotePro,
    loadPhoneQuotePro: state.quotePro.loadPhoneQuotePro,
    nameDeliveryQuotePro: state.quotePro.nameDeliveryQuotePro,
    firstNameDeliveryQuotePro: state.quotePro.firstNameDeliveryQuotePro,
    deliveryNumberQuotePro: state.quotePro.deliveryNumberQuotePro,
    deliveryTrackQuotePro: state.quotePro.deliveryTrackQuotePro,
    deliveryStreetQuotePro: state.quotePro.deliveryStreetQuotePro,
    deliveryComplementQuotePro: state.quotePro.deliveryComplementQuotePro,
    deliveryCityQuotePro: state.quotePro.deliveryCityQuotePro,
    deliveryCodeQuotePro: state.quotePro.deliveryCodeQuotePro,
    deliveryphoneQuotePro: state.quotePro.deliveryphoneQuotePro,
    paletteNumberQuotePro: state.quotePro.paletteNumberQuotePro,
    weightQuotePro: state.quotePro.weightQuotePro,
    lenghtQuotePro: state.quotePro.lenghtQuotePro,
    widthQuotePro: state.quotePro.widthQuotePro,
    heightQuotePro: state.quotePro.heightQuotePro,
    commentQuotePro: state.quotePro.commentQuotePro,
    quoteMessage: state.quotePro.quoteMessage,
  });

  const mapDispatchToProps = (dispatch) => ({
      
    changeField: (value, name) => {
    
      const changeObject = {
        [name]: value
      };
      console.log(changeObject)
      dispatch(changeField(changeObject));
  
    },
    

    submitquote: ()=> {
        dispatch(submitquote());
    }  
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormQuotePro);