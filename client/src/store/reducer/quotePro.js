import { CHANGE_FIELD,  SUBMIT_QUOTE_SUCCESS, SUBMIT_QUOTE_ERROR } from '../action/user-actions';

const stateInitial = {

  billSiretQuotePro: '',
  billSocieteQuotePro:'',
  billMailQuotePro:'',
  billNumberQuotePro:'',
  billTrackQuotePro:'',
  billStreetQuotePro:'',
  billComplementQuotePro:'',
  billCityQuotePro:'',
  billPostalCodeQuotePro:'',
  billPhoneQuotePro:'',
  loadNameQuotePro:'',
  loadFirstNameQuotePro:'',
  loadNumberQuotePro:'',
  loadTrackQuotePro:'',
  loadStreetQuotePro:'',
  loadComplementQuotePro:'',
  loadCityQuotePro:'',
  loadPostalCodeQuotePro:'',
  loadPhoneQuotePro:'',
  nameDeliveryQuotePro:'',
  firstNameDeliveryQuotePro:'',
  deliveryNumberQuotePro:'',
  deliveryTrackQuotePro:'',
  deliveryStreetQuotePro:'',
  deliveryComplementQuotePro:'',
  deliveryCityQuotePro:'',
  deliveryCodeQuotePro:'',
  deliveryphoneQuotePro:'',
  paletteNumberQuotePro:'',
  weightQuotePro:'',
  lenghtQuotePro:'',
  widthQuotePro:'',
  heightQuotePro:'',
  commentQuotePro:'',
  quoteMessage:'',
  quotePro: {}

};

export default (state = stateInitial, action = {}) => {
    switch (action.type)

    {        
        case CHANGE_FIELD:
            if (action.payload.reducerName === "quotePro") {
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
            }

            return state;

            case SUBMIT_QUOTE_SUCCESS:
                return {
                    ...state,
                    quoteMessage: action.payload,
                    billSiretQuotePro: '',
                    billSocieteQuotePro:'',
                    billMailQuotePro:'',
                    billNumberQuotePro:'',
                    billTrackQuotePro:'',
                    billStreetQuotePro:'',
                    billComplementQuotePro:'',
                    billCityQuotePro:'',
                    billPostalCodeQuotePro:'',
                    billPhoneQuotePro:'',
                    loadNameQuotePro:'',
                    loadFirstNameQuotePro:'',
                    loadNumberQuotePro:'',
                    loadTrackQuotePro:'',
                    loadStreetQuotePro:'',
                    loadComplementQuotePro:'',
                    loadCityQuotePro:'',
                    loadPostalCodeQuotePro:'',
                    loadPhoneQuotePro:'',
                    nameDeliveryQuotePro:'',
                    firstNameDeliveryQuotePro:'',
                    deliveryNumberQuotePro:'',
                    deliveryTrackQuotePro:'',
                    deliveryStreetQuotePro:'',
                    deliveryComplementQuotePro:'',
                    deliveryCityQuotePro:'',
                    deliveryCodeQuotePro:'',
                    deliveryphoneQuotePro:'',
                    paletteNumberQuotePro:'',
                    weightQuotePro:'',
                    lenghtQuotePro:'',
                    widthQuotePro:'',
                    heightQuotePro:'',
                    commentQuotePro:'',
                
                };

            case SUBMIT_QUOTE_ERROR:
                return {
                    ...state,              
                    quoteMessage: action.payload,
                };

            

            default:
                return state;
        }


    };